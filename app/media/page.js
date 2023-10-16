import NavBar from '../../components/nav.js'
import { FadeIn } from '../../components/FadeIn.jsx'
import Footer from '../../components/footer.js'
import Media from '../../components/media_main.jsx'
import Spons from '../../components/sponsors_bottom.jsx'

export default async function main_media() {
    return (
        <main className='bg-white h-full'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <Media></Media>
            <Spons></Spons>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }


  