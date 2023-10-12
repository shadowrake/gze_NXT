import NavBar from "../../../../components/nav"
import { FadeIn } from '../../../../components/FadeIn.jsx'
import Footer from '../../../../components/footer.js'
import Teams from './rec_team.jsx'
import { getTeamsSoonById } from '../../../../lib/prisma/read/teamsSoon.js'
 
 export default async function recTeam({params}) {
    const { teamSoon } = await getTeamsSoonById(params.id)

    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            <FadeIn>
            <Teams teamSoon = {teamSoon}></Teams>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }