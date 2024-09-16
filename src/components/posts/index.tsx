import { type Post } from "@/posts";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Title from "@/components/ui/title";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map(({ slug, title, publishDate, excerpt, categories, blogThumb  }) => (
        <div className="group" key={slug}>
          <div className="relative overflow-hidden ">
          <div className="mb-4">
        <Image
          src={blogThumb}
          alt={title}
          width={800} // Adjust width as needed
          height={400} // Adjust height as needed
          className="rounded-lg"
        />
      </div>


          <ul className="inline-flex space-x-2 pb-2">
                {categories.map((cat) => (
                  <li key={cat} className="list-none">
                    <Link
                      href={`/blog/category/${cat}`}
                      className="inline-block px-2 py-1 text-sm font-medium uppercase text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
          

            <Title  className="" size={"2xl"}>
              <Link
                href={`/blog/${slug}`}
                className="multiline-hover hover:text-primary-foreground transition-all duration-500"
              >
                {title}
              </Link>
            </Title>
          
            

            
        
          </div>
        </div>
      ))}
    </>
  );
}
