import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import React from 'react'
import CardOne from './cardOne'
import SlideUp from '@/components/animations/slideUp'

async function getPosts() {
    const query = `
    {
      posts(first: 5) {
        nodes {
          id
          title
          content
          uri
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
    `;

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            next: {
                revalidate: 0,
            },
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const { data } = await res.json();

        if (data && data.posts) {
            return data.posts.nodes;
        } else {
            throw new Error('No posts data found');
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export default async function BlogOne() {
    const posts = await getPosts();

    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Blog</Button>
                        <Title size={"5xl"} className="pt-6 text-center max-w-[898px]">
                            From Our Blog – Learn, Grow, & Succeed!
                        </Title>
                    </div>
                </SlideUp>

                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between'>
                    {posts.length ? (
                        posts.slice(0, 3).map(post => (
                            <CardOne
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                thumb={post.featuredImage?.node?.sourceUrl}
                                author={{ author_name: post.author?.node?.name }}
                                date={post.date}
                                category={post.categories.nodes.map((cat) => cat.name)}
                                slug={post.uri} // Use the `uri` for the slugified URL
                            />
                        ))
                    ) : (
                        <p>No posts available</p>
                    )}
                </div>
            </div>
        </section>
    );
}
