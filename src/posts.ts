import { readdir, readFile } from "fs/promises";
import path from "path";
import { type Category } from "./categories";
import grayMatter from "gray-matter";
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
async function loadMDXFile(slug: string): Promise<Post> {
  try {
    const file= await readFile(path.join(process.cwd(),`src/(posts)/${slug}`), 'utf8');
    const {data} = grayMatter(file)
    return  {
      title: data.title, 
      slug: slug.replace('.mdx',''),
      publishDate: data.publishDate,
      excerpt: data.excerpt,
      categories: data.categories,
      tags: data.tags,
      author: data.author,
      blogThumb: data.blogThumb,
      featuredImage: data.featuredImage,
    };
  } catch (error) {
    console.error(`Failed to load MDX file for slug: ${slug}`, error);
    return {} as Post; // Return a default empty object or handle error accordingly
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    
    // Retrieve files from posts directory
    const filenames = await readdir(path.join(process.cwd(), "src/(posts)"));
    
    // Retrieve metadata from MDX files
    const posts = await Promise.all(
      filenames.filter(name=>name.endsWith('.mdx')).map(async (file) => {
        const metadata = await loadMDXFile(file);
        return metadata ;
      })
    );

    // Sort posts from newest to oldest
    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

    return posts;
  } catch (err: any) {
    console.error(err.message);
    return [];
  }
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter((post) => post.categories.includes(category));

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
