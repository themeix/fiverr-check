"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input' 
import Title from '@/components/ui/title'
  

const HeroOne = () => {
   
 


  return (
    <section className='themeix-hero-section bg-white relative pt-4 lg:my-15 mb-9'>
      <div className='container'>
        <div className='grid xl:grid-cols-[46%_53%] lg:grid-cols-[50%_auto] grid-cols-1 justify-between items-center'>
          {/* ------- left side start */}
          <div className='max-w-[690px] relative pt-6 pb-9 lg:pt-0 lg:pb-0'>
            <div className='relative inline-block mb-2.5'>
              <h5 className='sm:px-10 px-5 sm:text-lg text-base py-3.5 font-bold leading-[120%] bg-accent rounded-lg text-primary-foreground  inline-block'>Best  Marketing and Web Agency  </h5>
              <Image src={"/images/shapes/welcome-icon1-1.png"} width={58} height={58} alt='Welcome' className='absolute -right-7 -top-7 rotate-[21deg]' />
            </div>
            <Title size={'7.5xl'}> Data powered Digital Marketing </Title>

            <p className='mt-[23px] font-semibold'>Choose Themeix as your digital marketing agency and boost your business with our exceptional digital marketing services and cutting-edge technology solutions.</p>
 
            <form>
              <div className='flex sm:flex-row flex-col sm:items-center gap-[11px] pt-[33px]'>
                <Input type={"text"} placeholder={"Enter your website"} className={"border-2 sm:min-w-[364px] min-w-[300px] "} />
                <div>
                  <Button size="lg">Send me a proposal</Button>
                </div>
              </div>
             
            </form>
          </div>
          {/* ------- left side End */}

          <div className='w-full h-full relative flex justify-end'>
      


          <video
  id="hero__video-loop"
  className="hero__video-loop"
  poster="/assets/img/hero/CTA_1920x_Desktop.jpg"
  autoPlay
  loop
  muted
  playsInline
  style={{ width: "100%", height: "500px" }}
>
  <source src="/videos/hero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOne