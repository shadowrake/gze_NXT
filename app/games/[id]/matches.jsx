import { getMatches } from "../../../lib/prisma/read/matches.js"

export default async function Player({team}) {
    // Fetch data from external API
    const {matches} = await getMatches()

    // Fliter data from external API to match today's date and team with the right keyword defined in the database
    const match = matches.filter((player) => player.date >= Date.now() && team.name === player.keyword)

    return (
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Matches</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {match.map((match) => (
            <div key={match.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={match.imgUrl ? match.imgUrl : "https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/d382efb8-c8ca-4bdc-6d8b-5da23559e500/public"}
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
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <a href={`/games/${team.id}/matches/archive`} className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            See all upcoming/current/previous matches
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-8 text-sm md:hidden">
          <a href={`/games/${team.id}/matches/archive`} className="font-medium text-indigo-600 hover:text-indigo-500">
            See all matches
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
    )
  }
  