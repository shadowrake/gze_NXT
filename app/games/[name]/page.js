import { FadeIn } from "@components/FadeIn";
import Footer from "@components/footer";
import NavBar from "@components/nav";
import Player from "./player";
import Sponsor from "@components/sponsors_bottom";
import { getTeamsByName } from "@lib/prisma/read/teams";

export default async function team_main(params) {
    const { player } = await getTeamsByName(params.name)
    return (
    <main className="bg-white">
        <NavBar />
        <FadeIn>
        <Player player = {player}/>
        <Sponsor />
        </FadeIn>
        <Footer />
    </main>
    )
  }
  