
import React from 'react'
import dynamic from 'next/dynamic'
import ContactForm from '@/components/sections/contactForm'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'

export const metadata = {
  title: "NextPro | contact",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const ContactUs = () => {
  return (
    <main>
      <PageTitle pageName={"Contact Us"} breadcrumbLink={"Contact"} />
    
      <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} />
      <div className='lg:pt-15 pt-9'></div>
      <SubscribeTwo />
    </main>
  )
}

export default ContactUs