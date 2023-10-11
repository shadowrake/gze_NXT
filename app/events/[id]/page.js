import { CalendarDaysIcon,InformationCircleIcon } from '@heroicons/react/20/solid'
import { getEventsById } from '@lib/prisma/read/events.js'
import NavBar from '@components/nav'
import Footer from '@components/footer'
import {FadeIn} from '@components/fadein'


export default async function event({params}) {
  const { event } = await getEventsById(params.id)
  return (
    <main className="bg-white">
    <NavBar />
    <FadeIn>
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <div className="flex gap-x-2.5">
        <img src="https://hermankristiansen.no/greenzone_logo2.1.png" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        GZE staff
      </div>
      <div className="flex gap-x-2.5">
        <CalendarDaysIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
        {event.date}
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