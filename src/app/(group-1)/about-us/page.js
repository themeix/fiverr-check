import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import Mission from '@/components/sections/mission'
import StoryFive from '@/components/sections/ourStories/storyFive'
import PageTitleThree from '@/components/sections/pageTitleThree'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/components/sections/teams/teamGrid'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
  title: "NextPro | About", 
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const About = () => {
  return (
    <main>
        <PageTitleThree pageName={"About"} pageDescription={"We offer a comprehensive suite of solutions designed to meet your digital needs. At Themeix, we specialize in delivering cutting-edge web development, UI/UX design, and digital marketing services that help businesses thrive online. Whether you are looking to create a stunning website, enhance user experience, or boost your online presence, our expert team is here to assist you every step of the way."}/>
        <StoryFive counter={false}/>
        <Mission/>
        <TeamGrid/>
        <TestimonialTwo/>
        <FaqTwo/>
        <SubscribeTwo/>
    </main>
  )
}

export default About