import { Category, categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPostsByCategory, postsPerPage } from "@/posts";
import { notFound, redirect } from "next/navigation";


import PageTitleThree from '@/components/sections/pageTitleThree';

export default async function Page({
  params,
}: {
  params: { category: Category; page: string };
}) {
  const { category, page } = params;
  const currentPage = Number(page);

  if (currentPage < 1) notFound();
  if (currentPage === 1) redirect(`/blog/category/${category}`);

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: currentPage,
    limit: postsPerPage,
  });

  if (!posts.length) notFound();

  return (
    <main>

<PageTitleThree
        pageName={`${category} : (Page ${currentPage})`}
        pageDescription={`Page ${currentPage} of ${category} cateogry is here! Discover more articles, insights, and expert advice to stay updated and informed.`}
      />



       <div className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
         <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
          <Posts posts={posts} />
          </div>


          <Pagination
          baseUrl={`/blog/category/${category}/page`}
          page={currentPage}
          perPage={postsPerPage}
        total={total}
      />          </div>
          </div>     
    
     
    </main>
  );
}
 


export async function generateStaticParams() {
  const paths = await Promise.all(
    categories.map(async (category) => {
      // Get total posts count for the category
      const { total } = await getPaginatedPostsByCategory({
        category: category.name,  // Pass the category name (string)
        page: 1,
        limit: Number.MAX_SAFE_INTEGER, // Get all posts to calculate total
      });
      const totalPages = Math.ceil(total / postsPerPage);

      // Generate paths for each category and page
      return Array.from({ length: totalPages }, (_, i) => ({
        category: category.name,  // Ensure this is a string
        page: (i + 1).toString(),
      }));
    })
  );

  return paths.flat();
}