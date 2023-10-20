import NavBar from '@components/nav.js'
import {getCCById} from '../../../../lib/prisma/read/cc.js'
import CCProfile from './cc_profile.jsx'
import Footer from '@components/footer.js'
import Spons from '@components/sponsors_bottom.jsx'
import { FadeIn } from '@components/FadeIn.jsx'

export default async function cc_profile({params}) {
    const { cc } = await getCCById(params.id)
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            <FadeIn>
            <CCProfile cc={cc}></CCProfile>
            <Spons></Spons>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }