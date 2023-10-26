import NavBar from '../../components/nav.js'
import { FadeIn } from '../../components/FadeIn.jsx'
import Footer from '../../components/footer.js'
import Media from '../../components/media_main.jsx'
import Spons from '../../components/sponsors_top.jsx'

export default async function main_media() {
    return (
        <main className='bg-white h-full'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <Spons></Spons>
            <Media></Media>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }


  