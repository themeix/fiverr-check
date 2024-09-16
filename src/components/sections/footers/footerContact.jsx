import Logo from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterContact = ({ bgColor, color, white_logo }) => {
    return (
        <div className='grid lg:grid-cols-[30%_60%] items-center gap-8 bg-white rounded-xl p-5 '>
            <div className=' max-w-[178px]'>
                {
                    white_logo ?
                        <Image src={"/images/logo-light2.png"} width={500} height={200} alt='logo-white' className={`w-full h-full`} />
                        :
                        <Logo />
                }
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-8'>
                <div className='flex items-center gap-8'>
                    <div className={cn(`w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`)}>
                        <Image src={'/images/shapes/google-map-pin.png'} width={45} height={50} alt='map arrwo' />
                    </div>
                    <div className={cn(`${color}`)}>
                        <p>1829 Lakewood Ranch Blvd, </p>
                        <p>Bradenton, FL 34211,</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className={cn(`w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`)}>
                        <Image src={"/images/shapes/skills-icon.png"} width={44} height={50} alt='comments icon' />
                    </div>
                    <div className={cn(`${color}`)}>
                        <p> <span className='font-semibold'>Email:</span> <Link href={"mailto:support@themeix.com"} className='relative hover-underline after:h-[1px] after:bg-muted'> support@themeix.com</Link> </p>
                        <p> <span className='font-semibold'>Call us:</span> <Link href={"tal:+1 941 462 3303"} className='relative hover-underline after:h-[1px] after:bg-muted'> +1 941 462 3303</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContact