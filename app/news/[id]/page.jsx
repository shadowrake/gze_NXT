import { CalendarDaysIcon,InformationCircleIcon } from '@heroicons/react/20/solid'
import { getNewsById } from '../../../lib/prisma/read/news.js'
import NavBar from '../../../components/nav'
import Footer from '../../../components/footer'
import {FadeIn} from '../../../components/FadeIn'


export default async function News({params}) {
  const { news } = await getNewsById(params.id)
  return (
    <main className="bg-white">
    <NavBar />
    <FadeIn>
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <div className="flex gap-x-2.5">
        <img src={news.author.imgUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        {news.author.name}
      </div>
      <div className="flex gap-x-2.5">
        <CalendarDaysIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
        {news.date}
      </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{news.title}</h1>
        <p className="mt-6 text-xl leading-8">
          {news.desc}
        </p>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={news.imgUrl}
            alt={news.img}
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            {news.imgAlt}
          </figcaption>
        </figure>
      </div>
    </div>
    </FadeIn>
    <Footer />
  </main>
  )
}
