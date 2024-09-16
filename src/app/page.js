import React from 'react'
import HeroOne from '@/components/sections/heroes/heroOne'
import PartnersSlider from '@/components/sections/partnersSlider'
 
import ServiceTwo from '@/components/sections/services/serviceTwo'


import { partnersData } from '@/lib/fackData/partnersData'

import Strategy from '@/components/sections/strategy'

import BlogOne from '@/components/sections/blogs/blogOne'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import HeaderTwo from '@/components/sections/headers/headerTwo'
import FooterFour from '@/components/sections/footers/footerFour' 
import TestimonialOne from '@/components/sections/testimonials/testimonialThree'

const Home = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroOne />
        <div className='max-w-[1350px] mx-auto px-[15px] lg:py-15 py-9  '>
          <div className='lg:grid grid-cols-[25%_1fr] items-center'>
            <div>
              <h5 className='text-muted-foreground font-extrabold text-2xl lg:max-w-[251px] w-full lg:text-start text-center pb-10 md:pb-0 '>Trusted Experts & Partners</h5>
            </div>
            <div className='overflow-hidden'>
              <PartnersSlider data={partnersData} className={"lg:px-0 sm:px-0 px-0 lg:overflow-hidden w-full"} />
            </div>
          </div>
        </div>
         
        <Strategy />
        <ServiceTwo/>
   
        
  
        <TestimonialOne />
     
      </main>
      <FooterFour />

    </>
  )
}

export default Home