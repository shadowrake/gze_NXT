import { FadeIn } from "@components/FadeIn";
import Footer from "@components/footer";
import NavBar from "@components/nav";
import Player from "./player";
import Sponsor from "@components/sponsors_bottom";
import { getTeamsByName } from "@lib/prisma/read/teams";

export default async function playerPage({params}) {
    const { team } = await getTeamsByName(params.id)
    return (
    <main className="bg-white">
        <NavBar />
        <FadeIn>
        <div className="px-4 py-5 sm:p-6 bg-orange-400">{<div className=" justify-center sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        </div>
        <div className=''>
        <a href={team.gamer_link} className='justify-center font-bold text-White'><div className="flex gap-x-2.5">
        <img src="https://i.bo3.no/image/319645/gamer2020-square.png" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        {team.name} Gamer.no page
        </div>
        </a>
        </div>
        </div>}</div>
        <Player team = {team}/>
        <Sponsor />
        </FadeIn>
        <Footer />
    </main>
    )
  }
  