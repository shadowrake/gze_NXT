import NavBar from '../../components/nav'
import Footer from '../../components/footer'
import { FadeIn } from '../../components/FadeIn'
import Team from '../../components/Team_main'
import Sponsor from '../../components/sponsors_top'

export default async function About() {
  return (
    <main className='bg-white'>
      <NavBar />
      {/* creates an fadein effect on the page */}
      <FadeIn>
      <Sponsor></Sponsor>
      <Team/>
      
      </FadeIn>
      <Footer />
    </main>
  )
}
