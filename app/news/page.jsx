import NavBar from '../../components/nav'
import Footer from '../../components/footer'
import { FadeIn } from '../../components/FadeIn'
import News from '../../components/news.jsx'

import Sponsor from '../../components/sponsors_bottom'

export default async function About() {
  return (
    <main className='bg-white'>
      <NavBar />
      {/* creates an fadein effect on the page */}
      <FadeIn>
      <News></News>
      <Sponsor></Sponsor>
      </FadeIn>
      <Footer />
    </main>
  )
}
