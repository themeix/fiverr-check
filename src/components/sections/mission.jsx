import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Title from '../ui/title'

import Document from '../../../public/icons/document'
import Shield from '../../../public/icons/shield'
import Discount from '../../../public/icons/discount'
import Buy from '../../../public/icons/buy'
import SlideLeft from '../animations/slideLeft'
import SlideUp from '../animations/slideUp'
const ourItems = [
    {
        id: 1,
        title: "Client-Centric Approach",
        icon: <Document />,
        desc: "We prioritize our clients' needs, delivering tailored solutions for tangible results."
    },
    {
        id: 2,
        title: "Innovation and Excellence",
        icon: <Shield height={"36"} width={"36"} />,
        desc: "We stay ahead in the digital landscape, exploring new technologies for client success."
    },
    {
        id: 3,
        title: "Collaborative Partnership",
        icon: <Discount height={"36"} width={"36"} />,
        desc: "We work closely with clients, building trust through transparent communication."
    },
    {
        id: 4,
        title: "Social Responsibility",
        icon: <Buy height={"36"} width={"36"} />,
        desc: "We conduct business ethically, supporting sustainability and community initiatives."
    },

]
const Mission = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='flex lg:flex-row flex-col justify-between items-start gap-7.5'>
                    <div className='lg:max-w-[620px] w-full'>
                        <SlideLeft>
                            <div className='lg:pb-10 pb-5'>
                                <Button variant="secondary">Mission</Button>
                                <Title size={"5xl"} className="pt-6">Our Mission</Title>
                            </div>
                            <p className='font-semibold text-muted-foreground'>
                                At Next Agency, our mission is to empower businesses to thrive in the digital age by providing innovative and results-driven marketing solutions.
                            </p>
                            <p className='text-muted-foreground pt-7.5'>With a focus on transparency, integrity, and continuous improvement, we strive to be the trusted partner our clients rely on to achieve their goals and surpass their expectations.</p>
                        </SlideLeft>
                    </div>
                    <div className='pt-3 lg:pt-0'>
                        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-[72px] gap-y-10 gap-x-7.5
                        [&>*:nth-child(2)>.icon]:text-[#5A5579] [&>*:nth-child(2)>.icon]:bg-[#5a55791a] 
                        [&>*:nth-child(3)>.icon]:text-[#FE2E79] [&>*:nth-child(3)>.icon]:bg-[#9a2e791a] 
                        [&>*:nth-child(4)>.icon]:text-[#009F96] [&>*:nth-child(4)>.icon]:bg-[#009f961a]
                        '>
                            {
                                ourItems.map(({ desc, icon, id, title }) => <Card key={id} id={id} desc={desc} title={title} icon={icon} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission

const Card = ({ id, icon, title, desc }) => {
    return (
        <SlideUp id={id}>
            <div className='bg-[rgba(162,46,254,0.10)] icon rounded-2xl p-[22px] w-[85px] h-[85px] mb-7.5 flex justify-center items-center text-purple '>
                {icon}
            </div>
            <Link href={"/service-details"} className='text-xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]'>{title}</Link>
            <p className='pt-5'>{desc}</p>
        </SlideUp>
    )
}