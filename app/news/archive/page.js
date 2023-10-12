import NavBar from '../../../components/nav'
import Footer from '../../../components/footer'
import { FadeIn } from '../../../components/FadeIn'
import News from '../../../components/news_archive.jsx'

import Sponsor from '../../../components/sponsors_bottom'

export default async function About() {
  return (
    <main className='bg-white'>
      <NavBar />
      <FadeIn>
      <News></News>
      <Sponsor></Sponsor>
      </FadeIn>
      <Footer />
    </main>
  )
}
