import NavBar from '../../components/nav.js'
import Media from '../../components/media_main.jsx'
import { FadeIn } from '../../components/FadeIn.jsx'
import Footer from '../../components/footer.js'
import { getMedia } from '../../lib/prisma/read/media.js'
import Spons from '../../components/sponsors_bottom.jsx'
import Teams from '../../components/teams_rec.jsx'
import Staff from '../../components/staff_rec.jsx'

export default async function main_media() {
    const {media} = await getMedia()
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            <FadeIn>
            <Staff></Staff>
            <Teams></Teams>
            <Spons></Spons>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }