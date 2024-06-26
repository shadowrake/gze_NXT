import {getTeams} from '../lib/prisma/read/teams.js'
import {getTeamsSoon} from '../lib/prisma/read/teamsSoon.js'

  export default async function team_main() {

    // Fetch data from external API
    const {teams} = await getTeams()

    const team = teams.filter((teams) => teams.activity === 'active')

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-2xl font-medium text-gray-900">Our teams</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {/* maps data from api */}
            {team.map((teams) => (
              <div key={teams._id} >
            <a href={`/games/${teams.id}`}>
              <div className="group relative">
                <div className="overflow-hidden rounded-lg bg-gray-100">
                <div className="bg-red-100 relative group">
                  <img src={teams.imageSrc} alt={teams.imageAlt} className="object-contain h-190 w-290 object-center" />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-xl bg-green-200 md:bg-opacity-80 text-black font-semibold">{teams.title}</div>                  
                </div>
                </div>
              </div>
                </a>
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  