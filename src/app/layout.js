import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contextApi/themeProvider";
import CountryProvider from "@/contextApi/countryProvider";
import ScrollCircle from "@/components/ui/scrollCircle"
const CustomCursor = dynamic(() => import('@/components/ui/customCursor'), { ssr: false })
const Setting = dynamic(() => import('@/components/ui/setting'), { ssr: false })

 
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--plus-jakarta-sans"
})
 

export const metadata = {
  title: "Themeix",
  description: "Choose Themeix as your digital marketing agency and boost your business with our exceptional digital marketing services and cutting-edge technology solutions.",
  icons: {
    icon: '/icon.png'
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountryProvider>
            {children}
           
            <ScrollCircle />
          
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
