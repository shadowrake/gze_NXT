import { FadeIn } from "../../../components/FadeIn";
import Footer from "../../../components/footer";
import NavBar from "../../../components/nav";
import Player from "./player";
import Sponsor from "../../../components/sponsors_bottom";
import { getTeamsById } from "../../../lib/prisma/read/teams";
import Matches from "./matches";

export default async function playerPage({params}) {
    // get the team from api by id
    const { team } = await getTeamsById(params.id)
    return (
    <main className="bg-white">
        <NavBar />
        {/* creates an fadein effect on the page */}
        <FadeIn>
        <div className="px-4 py-5 sm:p-6 bg-greenzone">{<div className=" justify-center sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        </div>
        <div className=''>
        <div className="flex gap-x-2.5">
        <img src="https://i.bo3.no/image/319645/gamer2020-square.png" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        <a href={team.gamer_link} className='justify-center font-bold text-black'><p className="inline-flex text-lg items-center border-b-2 border-transparent font-bold text-black-900 hover:border-green-900 hover:text-black-700">
        {team.title} Gamer.no page </p></a>
        </div>
        </div>
        </div>}</div>
        {/* sends the team prop to both player and matches components */}
        <Player team = {team}/>
        <Matches team = {team}></Matches>
        <Sponsor />
        </FadeIn>
        <Footer />
    </main>
    )
  }
  