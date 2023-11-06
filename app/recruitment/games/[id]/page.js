import NavBar from "../../../../components/nav"
import { FadeIn } from '../../../../components/FadeIn.jsx'
import Footer from '../../../../components/footer.js'
import Teams from './rec_team.jsx'
import { getTeamsById } from '../../../../lib/prisma/read/teams.js'
import { getTeamsSoon } from '../../../../lib/prisma/read/teamsSoon.js'



 
 export default async function recTeam({params}) {
    const { team } = await getTeamsById(params.id)

    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            {/* passes down the teamsoon param to rec_team */}
            <Teams team = {team}></Teams>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }
