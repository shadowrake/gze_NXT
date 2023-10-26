import NavBar from '../../../components/nav'
import Footer from '../../../components/footer'
import { FadeIn } from '../../../components/FadeIn'
import Events from '../../../components/events_arc'

import Sponsor from '../../../components/sponsors_top'

export default async function About() {
  return (
    <main className='bg-white'>
      <NavBar />
      {/* creates an fadein effect on the page */}
      <FadeIn>
      <Sponsor></Sponsor>
      <Events></Events>
      </FadeIn>
      <Footer />
    </main>
  )
}