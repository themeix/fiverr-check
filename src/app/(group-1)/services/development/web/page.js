import React from 'react';
import ContactForm from '@/components/sections/contactForm';
import PageTitleTwo from '@/components/sections/pageTitleTwo'
import ServiceArtical from '@/components/sections/services/serviceArtical';

export const metadata = {
  title: "Best Web Development Services - Themeix",
  description: "NextPro is a modern Next.js and Tailwind CSS Template featuring General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const ServicesDetails = () => {
  return (
    <main>
      <PageTitleTwo 
        pageName={"Themeix Web Development Services: Cutting-Edge Websites That Drive Success"}  
        pageDescription={"At Themeix, we craft high-quality websites designed to attract more clients, increase your revenue, and fuel your business growth. Our web, mobile app, and software development services are tailored to meet all your business needs, ensuring you achieve your goals with precision."}  
        imageSrc={"/images/services/seo.png"} // Fixed prop name
        
      />
      <ServiceArtical />
      <ContactForm
        color={"text-white"}
        inputColor={"bg-transparent border-white border text-white placeholder:text-white"}
      />
      <div className='lg:pb-15 pb-9'></div>
    </main>
  );
};

export default ServicesDetails;
