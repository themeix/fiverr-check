import HeaderTwo from '@/components/sections/headers/headerTwo'
import FooterFour from '@/components/sections/footers/footerFour' 
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <HeaderTwo/>
        {children}
        <FooterFour/>
    </div>
  )
}

export default layout