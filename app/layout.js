import './globals.scss'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
export const runtime = 'edge';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenZoneEsports | Esports organization',
  description: 'We are a devoted Esports organization, founded by a collective of individuals who are deeply passionate about the world of Esports. Our mission is to scout and recruit emerging talents who are willing to affiliate with our organization and aim for extraordinary success. Our primary plan is to assemble robust teams for Counter-Strike 2 (CS2), Rainbow Six (R6), League of Legends (LoL) and many other games to come.Our ultimate goal is to elevate our organization to a level where we can compete at the pinnacle of the Esports industry.',
  image: 'https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/d382efb8-c8ca-4bdc-6d8b-5da23559e500/public',
  url: 'https://greenzoneesports.com',
  type: 'website',
  siteName: 'GreenZone Esports',
  siteLanguage: 'en',
  siteLocale: 'en_US',
  twitterUsername: '@GreenZoneEsport',
  authorName: 'Herman Kristiansen',
  authorUrl: 'https://hermankristiansen.no',
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
