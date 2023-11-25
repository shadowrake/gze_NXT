import NavBar from "../../../components/nav"
import { FadeIn } from '../../../components/FadeIn.jsx'
import Footer from '../../../components/footer.js'
import Staff from './rec_staff.js'
export const runtime = 'edge' 
 export default async function recTeam() {

    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <Staff></Staff>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }