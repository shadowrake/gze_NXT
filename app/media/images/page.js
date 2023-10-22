import NavBar from '../../../components/nav.js'
import Media from '../../../components/media_pics.jsx'
import { FadeIn } from '../../../components/FadeIn.jsx'
import Footer from '../../../components/footer.js'
import { getMedia } from '../../../lib/prisma/read/media.js'
import Spons from '../../../components/sponsors_top.jsx'

export default async function main_media() {
    const {media} = await getMedia()
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <Spons></Spons>
            <Media media = {media}></Media>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }
