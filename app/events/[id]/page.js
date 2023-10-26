import { CalendarDaysIcon,InformationCircleIcon } from '@heroicons/react/20/solid'
import { getEventsById } from '../../../lib/prisma/read/events.js'
import { getEvents } from '../../../lib/prisma/read/events.js'
import NavBar from '../../../components/nav.js'
import Footer from '../../../components/footer.js'
import {FadeIn} from '../../../components/FadeIn.jsx'
import Spons from '@components/sponsors_top.jsx'

export async function generateStaticParams() {
  const {event} = await getEvents();
  return event.map(event => ({ id: event.id }));
}

export default async function event({ params }) {
  // Fetch necessary data for the blog post using params.id
  const { event } = await getEventsById(params.id)
  return (
    <main className="bg-white">
    <NavBar />
    {/* creates an fadein effect on the page */}
    <FadeIn>
    <Spons  />
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <div className="flex gap-x-2.5">
        <img src="https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/8f82cc2d-9c49-45e4-4106-8b24a8e47b00/public" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        GZE staff
      </div>
      <div className="flex gap-x-2.5">
        <CalendarDaysIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
        {event.datetime.toDateString()}
      </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{event.title}</h1>
        <p className="mt-6 text-xl leading-8">
          {event.desc}
        </p>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={event.imgUrl}
            alt={event.img}
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            {event.imgAlt}
          </figcaption>
        </figure>
      </div>
    </div>
    
    </FadeIn>
    <Footer />
  </main>
  )
}