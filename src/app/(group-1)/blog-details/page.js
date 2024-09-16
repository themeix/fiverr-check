import React from 'react'
import BlogArtical from '@/components/sections/blogs/blogArtical'
import PageTitle from '@/components/sections/pageTitle'

export const metadata = {
    title: "NextPro | Blog-Single-2",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
  };
  
const BLogSIngle2 = () => {
    return (
        <main>
         
            <BlogArtical sidebarShow={false}/>
        </main>
    )
}

export default BLogSIngle2