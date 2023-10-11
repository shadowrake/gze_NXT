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
        <div className="px-4 py-5 sm:p-6 banner_gamer">{<div className=" justify-center sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        </div>
        <div className=''>
        <a href={team.gamer_link} className='justify-center font-bold text-black'><div className="flex gap-x-2.5">
        <img src="https://i.bo3.no/image/319645/gamer2020-square.png" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        <p className="inline-flex text-lg items-center border-b-2 border-transparent font-bold text-black-900 hover:border-green-900 hover:text-black-700">
        {team.title} Gamer.no page </p>
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
  