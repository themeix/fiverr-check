import { readdir } from "fs/promises";
import path from "path";
import { type Category } from "./categories";

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  excerpt: string;
  categories: Category[];
  tags: string[];
  author: string;
  blogThumb: string;
  featuredImage: string;
}

export const postsPerPage = 3 as const;

async function loadMDXFile(slug: string): Promise<{ metadata: Post }> {
  try {
    const { metadata } = await import(`./app/(group-1)/blog/(posts)/${slug}/page.mdx`);
    return { metadata };
  } catch (error) {
    console.error(`Failed to load MDX file for slug: ${slug}`, error);
    return { metadata: {} as Post }; // Return a default empty object or handle error accordingly
  }
}

export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post directories
  const postsDir = path.join(process.cwd(), 'src/app/(group-1)/blog/(posts)');
  const slugs = (
    await readdir(postsDir, { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await loadMDXFile(slug);
      return { ...metadata, slug }; // Ensure slug is placed after spreading metadata
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories.includes(category)
  );

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts based on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export async function getPaginatedPostsByCategory({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category: Category;
}): Promise<{ posts: Post[]; total: number }> {
  const allCategoryPosts = await getPostsByCategory({ category });

  // Get a subset of posts based on page and limit
  const paginatedCategoryPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedCategoryPosts,
    total: allCategoryPosts.length,
  };
}

 