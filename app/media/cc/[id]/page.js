import NavBar from '@components/nav.js'
import {getCCById} from '../../../../lib/prisma/read/cc.js'
import {getCC} from '../../../../lib/prisma/read/cc.js'
import CCProfile from './cc_profile.jsx'
import Footer from '@components/footer.js'
import Spons from '@components/sponsors_top.jsx'
import { FadeIn } from '@components/FadeIn.jsx'

export async function generateStaticParams() {
    const {cc} = await getCC();
    return cc.map(cc => ({ id: cc.id }));
  }

export default async function cc({params}) {
    const { cc } = await getCCById(params.id)
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            <FadeIn>
            <Spons></Spons>
            <CCProfile cc={cc}></CCProfile>
            
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }