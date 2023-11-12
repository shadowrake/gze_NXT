import {getSponsors} from '../lib/prisma/read/spons.js'

export default async function Spons() {
    const {spons} = await getSponsors()
    return (
      <div className="bg-gray-900 py-2 sm:py-4">
        <div className="hidden md:block mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {spons.map((sponsor) => (
            <img
              key={sponsor.id}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={sponsor.img}
              alt={sponsor.imgAlt}
              width={158}
              height={48}
            />
            ))}
          </div>
        </div>
        <div className="md:hidden mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" flex flex-row max-w-lg grid-cols-4 items-center gap-x-4 gap-y-5 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {spons.map((sponsor) => (
            <img
              key={sponsor.id}
              className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
              src={sponsor.img}
              alt={sponsor.imgAlt}
              width={158}
              height={48}
            />
            ))}
          </div>
        </div>
      </div>
    )
  }
  