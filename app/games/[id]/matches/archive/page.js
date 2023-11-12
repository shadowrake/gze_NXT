import NavBar from "@components/nav.js"
import { getMatches } from "@lib/prisma/read/matches.js"
import { getTeamsById } from "@lib/prisma/read/teams"
import { getTeams } from "@lib/prisma/read/teams"
import Footer from "@components/footer.js"
import { FadeIn } from "@components/FadeIn.jsx"
import Spons from "@components/sponsors_top.jsx"
export const runtime = 'edge';


export default async function Player({params}) {

    const { team } = await getTeamsById(params.id)
    // Fetch data from external API
    const {matches} = await getMatches()

    // Fliter data from external API to match today's date and team with the right keyword defined in the database
    const match = matches.filter((player) => team.name === player.keyword)

    return (
        <main className="bg-white">
        <NavBar />
        <FadeIn>
        <Spons  />
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Matches</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            upcoming/current/previous Matches for the {team.title} team.
            </p>
          </div>
        {Object.keys(match).length != 0 ?
        <div>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {match.map((match) => (
            <div key={match.id}>
              <div className="relative">
                <a href={match.href ? match.href : "https://www.gamer.no/lag/greenzone-esports-cs/184666/kamper"}>
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={match.imgUrl ? match.imgUrl : "https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/d382efb8-c8ca-4bdc-6d8b-5da23559e500/public"}
                    alt={match.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{match.name}</h3>
                  <p className="text-sm font-medium text-gray-900">VS</p>
                  <h3 className="text-lg font-medium text-gray-900">{match.team2}</h3>
                  <p className="mt-1 text-sm text-gray-500">Starts: <br />{match.date.toDateString()} @ {match.date.toLocaleTimeString("en-UK", { timeZone: "Europe/Oslo" })} (CET)</p>
                  {match.winLoss === "win" ?
                  <p className="mt-1 text-base text-green-500">{match.winLoss.toUpperCase()}</p>
                  : match.winLoss === "loss" ? <p className="mt-1 text-base text-red-500">{match.winLoss.toUpperCase()}</p>: null}
                </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href={`/games/${team.id}`} className="text-base mt-8 font-medium text-indigo-600 hover:text-indigo-500 md:block">
          Click here to go back
          <span aria-hidden="true"> &rarr;</span>
        </a>
        </div>
        : <div className="mt-4 md:flex md:items-center flex-col md:justify-center">
        <a href={`/games/${team.id}`} className="text-base mb-6 font-medium text-indigo-600 hover:text-indigo-500 md:block">
          No matches found, click here to go back
          <span aria-hidden="true"> &rarr;</span>
        </a>
        <img
          src={match.imgUrl ? match.imgUrl : "https://hermankristiansen.no/banner_gze_4k.png"}
          alt={match.imageAlt}
          className="hidden md:block h-1/2 w-1/2 object-cover object-center"
          />
          <img
          src={"https://hermankristiansen.no/banner_gze_4k.png"}
          alt={match.imageAlt}
          className="md:hidden h-1/2 w-full object-cover object-center"
          />
      </div>
      }
      </div>
    </div>
    
    </FadeIn>
    <Footer />
    </main>
    )
  }