import NavBar from '../components/nav.js'
import Footer from '../components/footer.js'
import Main from '../components/new_main_header.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import {getSlide} from '../lib/prisma/read/slide.js'
import Team from '../components/Team_main'
import News from '../components/news_main'
import Spons from '../components/sponsors_top'
import Events from '../components/events_main'

export default async function Home() {
  const {slide} = await getSlide()
  return (
    <main className='bg-white'>
      <NavBar></NavBar>
      {/* creates an fadein effect on the page */}
      <FadeIn>
      <Spons></Spons>
      <Main slide = {slide}></Main>
      <Team></Team>
      <News></News>
      <Events></Events>
      
      </FadeIn>
      <Footer></Footer>
    </main>
  )
}
