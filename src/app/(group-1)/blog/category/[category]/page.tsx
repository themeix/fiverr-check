import { categories, type Category, type CategoryDescription } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPostsByCategory, postsPerPage } from "@/posts";
import { notFound } from "next/navigation";
import PageTitleThree from "@/components/sections/pageTitleThree";

export default async function CategoryPage({ params }: { params: { category: Category } }) {
  const { category } = params;

  // Find the category description
  const categoryData = categories.find(cat => cat.name === category);

  if (!categoryData) {
    notFound();
  }

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      <PageTitleThree
        pageName={`Category: ${categoryData.name}`}
        pageDescription={categoryData.description}
      />
      <div className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
         <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
          <Posts posts={posts} />
          </div>


          <Pagination
        baseUrl={`/blog/category/${category}/page`}
        page={1}
        perPage={postsPerPage}
        total={total}
      />          </div>
          </div>
   
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.name,
  }));
}
