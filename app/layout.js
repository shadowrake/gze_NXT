import './globals.scss'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenZoneEsports | Esports organization',
  description: 'We are a devoted Esports organization, founded by a collective of individuals who are deeply passionate about the world of Esports. Our mission is to scout and recruit emerging talents who are willing to affiliate with our organization and aim for extraordinary success. Our primary plan is to assemble robust teams for Counter-Strike 2 (CS2), Rainbow Six (R6), and League of Legends (LoL).Our ultimate goal is to elevate our organization to a level where we can compete at the pinnacle of the Esports industry.',
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
