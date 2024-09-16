import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, getPosts, postsPerPage } from "@/posts";
import { notFound, redirect } from "next/navigation";
import PageTitleThree from "@/components/sections/pageTitleThree";

export default async function Page({ params }: { params: { page: string } }) {
  let page = Number(params.page);

  if (page < 1) {
    notFound();
  }

  if (page === 1) {
    redirect("/blog");
  }

  const { posts, total } = await getPaginatedPosts({
    page,
    limit: postsPerPage,
  });

  if (!posts.length) {
    notFound();
  }

  return (
    <main>
      <PageTitleThree
        pageName={`Blog (Page ${page})`}
        pageDescription={`Page ${page} of our blog is here! Discover more articles, insights, and expert advice to stay updated and informed.`}
      />
      <div className="lg:py-15 py-9">
        <div className="max-w-[1350px] mx-auto px-[15px]">
          <ul className="flex space-x-2 pb-10">
            {categories.map((cat) => (
              <li key={cat.name} className="list-none">
                <a
                  className="inline-block px-4 py-2 text-sm font-medium uppercase text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition"
                  href={`/blog/category/${cat.name}`}
                >
                  {cat.name}
                </a>
              </li>
            ))}            
          </ul>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
            <Posts posts={posts} />
          </div>
          <Pagination
            baseUrl="/blog/page"
            page={page}
            perPage={postsPerPage}
            total={total}
          />
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const pages = Math.ceil(posts.length / postsPerPage);

  return Array.from({ length: pages }, (_, i) => ({
    page: `${i + 1}`,
  }));
}
