import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

import PageTitleThree from '@/components/sections/pageTitleThree';

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({ page: 1, limit: postsPerPage });

  return (
    <main>


<PageTitleThree
        pageName={"Themeix Blog"}
        pageDescription={"We offer a comprehensive suite of solutions designed to meet your digital needs. At Themeix, we specialize in delivering cutting-edge web development, UI/UX design, and digital marketing services that help businesses thrive online. Whether you're looking to create a stunning website, enhance user experience, or boost your online presence, our expert team is here to assist you every step of the way."}
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
          <Pagination baseUrl="/blog/page" page={1} perPage={postsPerPage} total={total} />
          </div>
          </div>
 

 

 
   
    </main>
  );
}
