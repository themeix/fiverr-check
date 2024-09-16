// components/sections/blogs/cardOne.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from '@/components/ui/title';
import ZoomIn from '@/components/animations/zoomIn';

const CardOne = ({ id, title, date, thumb, author, category, slug }) => {
    return (
        <div className='group'>
            <ZoomIn id={id}>
                <div className='relative overflow-hidden rounded-2.5xl'>
                    <div className='absolute z-10 top-5 left-5'>
                        {category.length > 0 && (
                            <Link href={`/categories/${category[0].toLowerCase()}`} className='px-2.5 py-[5px] inline-block font-semibold text-primary-foreground rounded-lg text-sm bg-accent'>
                                {category[0]}
                            </Link>
                        )}
                    </div>
                    <div className='relative'>
                        <Image
                            src={thumb}
                            width={520}
                            height={280}
                            sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw'
                            style={{ width: "100%" }}
                            alt={title || 'Post thumbnail'}
                            className='group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover'
                            unoptimized
                        />
                    </div>
                </div>
                <div className='pt-[15px]'>
                    <div className='flex items-center gap-7.5 pb-[15px]'>
                        {author && (
                            <Link href={`/author/${author.author_name.toLowerCase().replace(/\s+/g, '-')}`} className='text-base font-semibold hover:text-primary-foreground transition-all duration-500'>
                                {author.author_name}
                            </Link>
                        )}
                    </div>
                    <Title size={"2xl"}>
                        <Link href={slug} className='multiline-hover hover:text-primary-foreground transition-all duration-500'>
                            {title}
                        </Link>
                    </Title>
                </div>
            </ZoomIn> 
        </div>
    );
};

export default CardOne;
