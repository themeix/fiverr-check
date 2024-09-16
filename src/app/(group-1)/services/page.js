import React from 'react'
import ContactForm from '@/components/sections/contactForm'
import PageTitleThree from '@/components/sections/pageTitleThree'
import ServiceTwo from '@/components/sections/services/serviceTwo'


export const metadata = {
    title: "NextPro | Services",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
  };
const Services = () => {
    return (
        <main>
            <PageTitleThree pageName={"Services"} pageDescription={"We offer a comprehensive suite of solutions designed to meet your digital needs. At Themeix, we specialize in delivering cutting-edge web development, UI/UX design, and digital marketing services that help businesses thrive online. Whether you are looking to create a stunning website, enhance user experience, or boost your online presence, our expert team is here to assist you every step of the way."}/>

             <ServiceTwo/>
         

     
        </main>
    )
}

export default Services