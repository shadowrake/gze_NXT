import { object } from "zod"
import { getAchiv } from "../../../lib/prisma/read/achiv"

export default async function Player({team}) {
    // Fetch data from external API
    const {achiv} = await getAchiv()

    // Fliter data from external API to match the right team with the right keyword defined in the database
    const achivment = achiv.filter((player) => team.name === player.keyword)
    return (
      <div className="bg-white py-16 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Achievements</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Achievements from our {team.title} team
            </p>
          </div>
          {Object.keys(achivment).length != 0 ?
          <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          
          {/* maps data from api */}
          {achivment.map((achiv) => (
            <li key={achiv.name}>
              <img className="aspect-[3/2] w-3/4 rounded-2xl object-cover" src={achiv.img ? achiv.img : "https://hermankristiansen.no/person_not_founhd.png"} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{achiv.name}</h3>
              <p className="text-base leading-7 text-gray-600">{achiv.organizer}</p>
              <p className="text-base leading-7 text-gray-600">{achiv.date.toDateString()}</p>
            </li>
          ))}
        </ul>
          : <div><h3 className='text-gray-900 text-lg font-bold text-center'>No achievements yet</h3></div>}
        </div>
      </div>
    )
  }
  