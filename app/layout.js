import './globals.scss'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenZoneEsports | Esports organization',
  description: 'We are an Esports organization, our staff is a friend group who are passionate about Esports.We have a goal to recruit new/amateur players who are willing to be a part of our organization and try to achive greatness.',
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
