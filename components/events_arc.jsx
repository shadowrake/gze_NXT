import { getEvents } from '../lib/prisma/read/events.js'

  
  export default async function events_main() {

    // Fetch data from external API
    const { event } = await getEvents()
    const events = event.filter((events) => events.endDate.toDateString() < Date.now())
    // Fliter data from external API to match today's date
    return (
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Events</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Event and tournments by GZE.
            </p>
          </div>
          {Object.keys(events).length != 0 ? 
          <div>
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* maps data from api */}
            {events.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                
                <img src={post.imgUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.startDate} className="mr-8 font-semibold outline-1 font-outline">
                    Starts: {post.startDate.toDateString()}
                  </time>
                  <time dateTime={post.endDate} className="mr-8 font-semibold outline-1 font-outline">
                    Ends: {post.endDate.toDateString()}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src="https://hermankristiansen.no/greenzone_logo2.1.png" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      GZE staff
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={`/events/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>))}
              
        </div><a href='/events' className='text-black'>
                <p className='mt-16 bg-green-200 text-center relative inline-flex items-center justify-center rounded-md p-2 text-lg font-bold hover:bg-green-300 hover:text-black-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>Current events</p>
        </a></div>: <div className="mt-4 md:flex flex-col md:items-center md:justify-center">
                <a href={`/events`} className="text-base mb-6 font-medium text-indigo-600 hover:text-indigo-500 md:block">
                No previous events found, go to current
                <span aria-hidden="true"> &rarr;</span>
                </a>
                <img
                  src={"https://hermankristiansen.no/banner_gze_4k.png"}
                  alt=""
                  className="hidden md:block h-1/2 w-1/2 object-cover object-center"
                  />
                  <img
                  src={"https://hermankristiansen.no/banner_gze_4k.png"}
                  alt=""
                  className="md:hidden h-1/2 w-full object-cover object-center"
                  />
              </div>}
        
      </div>
    </div>
    )
  }
  