import NavBar from '@components/nav'
import Footer from '@components/footer'
import { FadeIn } from '@components/FadeIn'
import Team from '@components/Team_main'
import Sponsor from '@components/sponsors_bottom'

export default async function About() {
  return (
    <main className='bg-white'>
      <NavBar />
      <FadeIn>
      <Team/>
      <Sponsor></Sponsor>
      </FadeIn>
      <Footer />
    </main>
  )
}
