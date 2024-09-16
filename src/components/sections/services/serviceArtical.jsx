import Image from 'next/image'
import React from 'react'
// import Title from '@//ui/title'
import Title from '@/components/ui/title'
import Highlight from '@/components/ui/highlight'
import SlideUp from '@/components/animations/slideUp'
import SideBar from '../sideBar'
import { faqData } from '@/lib/fackData/faqData'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Document from '../../../../public/icons/document'
import Shield from '../../../../public/icons/shield'
import Discount from '../../../../public/icons/discount'
import Buy from '../../../../public/icons/buy'
import Send from '../../../../public/icons/send'
import Activity from '../../../../public/icons/activity'


const ServiceArtical = () => {
    return (
        <div className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5'>
                    <div>
                        <SideBar search={false} blog={false} />
                    </div>
                    <article>
                        <Image src={'/images/resource/sergices-details1-1.jpg'} width={872} height={472} alt='service-bg' className='rounded-[30px]' />
                        <div className='pt-7.5'>
                            <Title size={"5xl"}>Why choose <Highlight>Next Agency</Highlight> as your Marketing Partner</Title>
                            <div className='pt-7.5'>
                                <p>At Next Agency, we understand the importance of having a strong online presence and ranking well in search engine results. </p>
                                <p className='pt-6'>Choosing us as your digital marketing partner means selecting a team committed to your success. With a proven track record, tailored solutions, and industry expertise, we prioritize your unique goals and objectives.</p>
                            </div>
            
                        </div>
                 
                 
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ServiceArtical


const Card = ({ icon, title, desc }) => {
    return (
        <div className='grid grid-cols-[83px_auto] items-start gap-7.5'>
            <div className='bg-primary w-[83px] h-[83px] rounded-[15px] flex justify-center items-center text-white'>
                {icon}
            </div>
            <div>
                <h5 className='text-xl font-extrabold text-muted-foreground pb-2'>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    )
}