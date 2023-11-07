import './globals.scss'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenZoneEsports | Esports organization',
  description: 'We are an Esports organization, our staff is a friend group who are passionate about Esports.We have a goal to recruit new/amateur players who are willing to be a part of our organization and try to achive greatness.',
  image: 'https://cdn.discordapp.com/attachments/808597548156942356/808597579608367636/gze.png',
  url: 'https://greenzoneesports.com',
  type: 'website',
  siteName: 'GreenZone Esports',
  siteLanguage: 'en',
  siteLocale: 'en_US',
  twitterUsername: '@GreenZoneEsport',
  authorName: 'GreenZone Esports',
  authorUrl: 'https://greenzoneesports.com',
  metadata: "GreenZone Esports, Esports, Gaming, Gaming organization, Esports organization, GreenZone, norwegian, Norwegian, CS2, LoL, Counter strike 2, Leauge of legends",
  keywords: "GreenZone Esports, Esports, Gaming, Gaming organization, Esports organization, GreenZone, norwegian, Norwegian, CS2, LoL, Counter strike 2, Leauge of legends",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        {children}
        {/* defines toast as seen after submiting an email */}
        <Toaster position="top-right" richColors expand closeButton></Toaster>
        </body>
    </html>
  )
}
