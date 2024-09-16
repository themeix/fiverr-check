"use client"
import React from 'react'
import Image from 'next/image'
 
import Title from '@/components/ui/title'

const PageTitleThree = ({ pageName, pageDescription }) => { // Changed pageimageSrc to imageSrc
  return (
    <section className='themeix-hero-section bg-white relative  lg:py-15 pb-9'>
      <div className='container'>
        <div className='grid grid-cols-1 justify-between items-center'>
          {/* ------- left side start */}
          <div className='max-w-[850px] relative pt-6 pb-9 lg:pt-0 lg:pb-0 mx-auto text-center'>
            {pageName && (
              <Title size={'7.5xl'}>{pageName}</Title>
            )}
            <p className='mt-[23px] font-semibold'>
            {pageDescription}
            </p>
  
      
          </div>
          {/* ------- left side End */}
  

        </div>
      </div>
    </section>
  )
}

export default PageTitleThree;
