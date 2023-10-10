import NavBar from '../components/nav'
import Footer from '../components/footer'
import Main from '../components/Main_header'
import { FadeIn } from '@components/FadeIn'

export default function Home() {
  return (
    <main className='bg-white'>
      <NavBar></NavBar>
      <FadeIn>
      <Main></Main>
      </FadeIn>
      <Footer></Footer>
    </main>
  )
}
