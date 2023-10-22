import NavBar from '../../components/nav.js'
import { FadeIn } from '../../components/FadeIn.jsx'
import Footer from '../../components/footer.js'
import Spons from '../../components/sponsors_top.jsx'
import Teams from '../../components/teams_rec.jsx'
import Staff from '../../components/staff_rec.jsx'

export default async function main_media() {
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <Spons></Spons>
            <Staff></Staff>
            <Teams></Teams>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }