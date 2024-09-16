import React from 'react'
import Link from 'next/link'
import FooterContact from './footerContact'
import SocialIcons from '@/components/ui/socialIcons'
import ImportanceLinks from './importanceLinks'

const FooterFour = () => {
    return (
        <footer className='bg-primary rounded-tr-[30px] rounded-tl-[30px] pt-[100px] relative'>
          <div className='container'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <FooterContact white_logo={false} bgColor={"bg-white"} color="text-dark" />
                    <span className='inline-block bg-white h-[1px] w-full mb-12.5 mt-[45px]'></span>
                    <div className='grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between'>
                        <div>

                            <h3 className='text-1xl font-semibold text-muted-foreground lg:pb-7.5 pb-3 text-white'>About Themeix</h3>

                            <p className='pb-[38px] text-white'>Choose Themeix, a leading digital marketing agency, for creative design, development, and more. Boost your business success with our comprehensive offerings, free consultations, and state-of-the-art technology. </p>
                            <SocialIcons color={"text-white"} />
                        </div>
                        <div>
                            <ImportanceLinks color={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-muted bg-white mt-[54px] relative z-10 rounded-tr-[30px] rounded-tl-[30px]'> 
                <div className='max-w-[1350px] mx-auto px-[15px] flex xl:flex-row flex-col justify-between items-center py-7.5 text-dark'>
                    <p>Designed and Developed  By <Link href={"https://themeix.com"} className='text-primary font-medium relative hover-underline after:h-[1px]'>themeix</Link></p>
                    <p>Copyright: © 2024. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterFour