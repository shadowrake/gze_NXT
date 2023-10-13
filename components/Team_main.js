import {getTeams} from '../lib/prisma/read/teams.js'
import {getTeamsSoon} from '../lib/prisma/read/teamsSoon.js'

  export default async function team_main() {
    const {teams} = await getTeams()

    const {teamsSoon} = await getTeamsSoon()

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">Our teams</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {teams.map((teams) => (
              <div key={teams._id} >
            <a href={`/games/${teams.id}`}>
              <div className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <div class="bg-red-100 relative group">
                  <img src={teams.imageSrc} alt={teams.imageAlt} className="object-contain h-190 w-290 object-center" />
                  <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-xl bg-green-200 md:bg-opacity-80 text-black font-semibold">{teams.title}</div>
                </div>
                </div>
              </div>
                </a>
                </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">Teams we are for looking players in</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {teamsSoon.map((teams) => (
              <div key={teams.id}>
              <a href={`/recruitment/${teams.id}`}>
              <div  className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <div class="bg-red-100 relative group">
                  <img src={teams.imageSrc} alt={teams.imageAlt} className="object-contain h-190 w-290 object-center" />
                  <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-xl bg-green-200 md:bg-opacity-80 text-black font-semibold">Apply now</div>
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
  