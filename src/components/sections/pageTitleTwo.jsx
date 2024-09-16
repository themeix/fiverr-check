"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input' 
import Title from '@/components/ui/title'

const PageTitleTwo = ({ pageName, imageSrc, pageDescription }) => { // Changed pageimageSrc to imageSrc
  return (
    <section className='themeix-hero-section bg-slate-100 relative  lg:py-15 py-8'>
      <div className='container'>
        <div className='grid xl:grid-cols-[60%_40%] lg:grid-cols-[50%_auto] grid-cols-1 justify-between items-center'>
          {/* ------- left side start */}
          <div className='max-w-[690px] relative pt-6 pb-9 lg:pt-0 lg:pb-0'>
            {pageName && (
              <Title size={'5xl'}>{pageName}</Title>
            )}
             {pageDescription && (
            <p className='mt-[23px] font-semibold'>
            {pageDescription}
            </p>
            )}
            
  
            <form>
              <div className='flex sm:flex-row flex-col sm:items-center gap-[11px] pt-[33px]'>
                <Input 
                  type={"text"} 
                  placeholder={"Enter your website"} 
                  className={"border-2 sm:min-w-[364px] min-w-[300px] "} 
                />
                <div>
                  <Button size="lg">Send me a proposal</Button>
                </div>
              </div>
            
            </form>
          </div>
          {/* ------- left side End */}
  
          <div className='w-full h-full relative flex justify-end'>
            {imageSrc && (
              <Image
                src={imageSrc}
                width={600}
                height={600}
                alt={pageName || 'Default alt text'} // Used pageName or default text for alt
                className='block  '
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageTitleTwo;
