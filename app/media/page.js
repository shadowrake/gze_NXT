import NavBar from '../../components/nav.js'
import Media from '../../components/media_main.jsx'
import { FadeIn } from '../../components/FadeIn.jsx'
import Footer from '../../components/footer.js'
import { getMedia } from '../../lib/prisma/read/media.js'
import Spons from '../../components/sponsors_bottom.jsx'

export default async function main_media() {
    const {media} = await getMedia()
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <Media media = {media}></Media>
            <Spons></Spons>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }


  