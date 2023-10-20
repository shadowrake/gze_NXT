import NavBar from '../../../components/nav.js'
import CC from '../../../components/cc.jsx'
import Spons from '../../../components/sponsors_bottom.jsx'
import Footer from '../../../components/footer.js'
import { FadeIn } from '../../../components/FadeIn.jsx'
  
  export default async function Cc() {

    return (
      <main className='bg-white'>
        <NavBar></NavBar>
        <FadeIn>
        <CC></CC>
        <Spons></Spons>
        </FadeIn>
        <Footer></Footer>
      </main>
    )
  }
  