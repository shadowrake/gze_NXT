import NavBar from '../../../components/nav'
import Footer from '../../../components/footer'
import { FadeIn } from '../../../components/FadeIn'
import Events from '../../../components/events_main'

import Sponsor from '../../../components/sponsors_bottom'

export default async function About() {
  return (
    <main className='bg-white'>
      <NavBar />
      {/* creates an fadein effect on the page */}
      <FadeIn>
      <Events></Events>
      <Sponsor></Sponsor>
      </FadeIn>
      <Footer />
    </main>
  )
}