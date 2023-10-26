import NavBar from "@components/nav.js"
import { getMatches } from "@lib/prisma/read/matches.js"
import { getTeamsById } from "@lib/prisma/read/teams"
import { getTeams } from "@lib/prisma/read/teams"
import Footer from "@components/footer.js"
import { FadeIn } from "@components/FadeIn.jsx"
import Spons from "@components/sponsors_bottom.jsx"

export async function generateStaticParams() {
  const { teams } = await getTeams();
  return teams.map(teams => ({ id: teams.id }));
}

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
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Matches</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {match.map((match) => (
            <div key={match.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={match.imgUrl ? match.imgUrl : "https://hermankristiansen.no/banner_gze_4k.png"}
                    alt={match.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{match.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{match.date.toString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Spons  />
    </FadeIn>
    <Footer />
    </main>
    )
  }