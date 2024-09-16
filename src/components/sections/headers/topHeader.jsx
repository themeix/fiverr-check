"uee client"
import Link from 'next/link'
import Email from '../../../../public/icons/email'
import Call from '../../../../public/icons/call'
import SocialIcons from '@/components//ui/socialIcons'
import { cn } from '@/lib/utils';


const TopHeader = ({ color }) => {


    // The color, darkBg and bgcolor props are inherited from the header three, and these properties are passed down to different children of the 

    return (
        <div className='container hidden lg:block'>
            <div className='pt-[22px] pb-[23px] '>
                <div className='flex justify-between items-center'>
                    {/*  left side Start */}
                    <div className='flex items-center gap-7.5'>
                        <p className={cn(`flex items-center gap-4 ${color}`)}>
                            <Email />
                            <Link href={"mailto:support@themeix.com"} className='multiline-hover'>support@themeix.com</Link>
                        </p>
                        <p className='h-7.5 w-[1px] bg-accent dark:bg-[#717A83]'></p>
                        <p className={cn(`flex items-center gap-4 ${color}`)}>
                            <Call />
                            <Link href={"tel:+19414623303"}> <span className='multiline-hover'>941-462-3303 </span> </Link>
                        </p>
                    </div>
                    {/*  left side end */}


                    <div className='flex items-center gap-7.5'>
                        <div className='flex items-center gap-7.5'>
                            <div className='hidden xl:block'>
                                <SocialIcons color={color} />
                            </div>             
                        </div>                      
               
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default TopHeader