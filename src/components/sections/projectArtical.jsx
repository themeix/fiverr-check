import React from 'react'
import Title from '../ui/title'
import Image from 'next/image'

const ProjectArtical = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <Title size={"5xl"} className={"max-w-[759px] text-center mx-auto"}>Boosting Online Visibility for XYZ Furniture Co.</Title>
                <div className='pt-12.5'>
                    <div className='grid lg:grid-cols-[66%_33%] grid-cols-1 items-start gap-12.5'>
                        <article>
                            <Image src={"/images/resource/portfolio-feature1-1.jpg"} width={872} height={451} className='rounded-[30px]' alt='project background ' />
                            <div className='pt-20'>
                                <Title size={"4xl"}>Client Overview:</Title>
                                <p className='pt-2.5'>XYZ Furniture Co. is a leading manufacturer and retailer of high-quality furniture products with a strong presence in the offline market. Despite their success offline, they were struggling to gain traction online and wanted to increase their visibility and sales through digital channels. </p>
                            </div>
                            <div className='pt-12.5'>
                                <Title size={"4xl"}>Challenge:</Title>
                                <p className='pt-2.5'>XYZ Furniture Co. faced several challenges in the digital space, including:</p>
                                <ol className='pt-6 flex flex-col gap-1'>
                                    <li>
                                        <b className='text-muted-foreground'>1.</b> <b className='text-muted-foreground'>Low online visibility:</b> Their website was not ranking well on search engines, making it difficult for potential customers to find them online.
                                    </li>
                                    <li>
                                        <b className='text-muted-foreground'>2.</b> <b className='text-muted-foreground'>Limited online presence</b> They lacked a cohesive digital marketing strategy and were not leveraging social media or content marketing to reach their target audience.</li>
                                    <li>
                                        <b className='text-muted-foreground'>3.</b> <b className='text-muted-foreground'>Poor website performance:</b> Their website was outdated and not optimized for user experience, leading to high bounce rates and low conversion rates.</li>
                                </ol>
                            </div>
                            
                            
                      
                        </article>
                        <aside className='rounded-[30px] p-7.5 border border-accent sticky top-[var(--header-height)] transition-all duration-300'>
                            <ul className='flex flex-col gap-6 max-w-[360px]'>
                                <li>
                                    <b className='text-muted-foreground'>Client: </b>
                                    <p>XYZ Furniture Co.</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Industry:  </b>
                                    <p>Furniture Manufacturing and Retail</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Project Duration: </b>
                                    <p>6 months</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Services Provided:</b>
                                    <p>Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Website Redesign</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Key Objectives: </b>
                                    <p>Increase online visibility, drive website traffic, improve search engine rankings, boost online sales and conversions.</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Results Achieved: </b>
                                    <p>150% increase in website traffic, First-page Google rankings for high-value keywords,200% increase in online sales and conversions</p>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectArtical