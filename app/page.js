import NavBar from '../components/nav.js'
import Footer from '../components/footer.js'
import Main from '../components/Main_header.js'
import { FadeIn } from '../components/FadeIn.jsx'

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
