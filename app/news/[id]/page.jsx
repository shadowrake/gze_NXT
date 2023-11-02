import { CalendarDaysIcon,InformationCircleIcon, ClockIcon } from '@heroicons/react/20/solid'
import { getNewsById } from '../../../lib/prisma/read/news.js'
import { getNews } from '../../../lib/prisma/read/news.js'
import NavBar from '../../../components/nav'
import Footer from '../../../components/footer'
import {FadeIn} from '../../../components/FadeIn'
import Sponsor from '@components/sponsors_top.jsx'


export default async function news({params}) {
  // get the news from api by id
  const { news } = await getNewsById(params.id)
  return (
    <main className="bg-white">
    <NavBar />
    {/* creates an fadein effect on the page */}
    <FadeIn>
    <Sponsor></Sponsor>
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <div className="flex gap-x-2.5">
        <img src={news.author.imgUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        {news.author.name}
      </div>
      {news.datetime.toLocaleString("en-UK", { timeZone: "Europe/Oslo" }) === news.updateDate.toLocaleString("en-UK", { timeZone: "Europe/Oslo" }) ? 
      <div className="flex gap-x-2.5">
        <CalendarDaysIcon className="mt-0.5 h-6 w-6 flex-none text-gray-300" aria-hidden="true" />
        Published:&nbsp;
        {news.datetime.toDateString()} @ {news.datetime.toLocaleTimeString("en-UK", { timeZone: "Europe/Oslo" })} (CET) </div> : 
      <div className="flex flex-col gap-x-2.5">
        <div className='flex flex-row'>
        <CalendarDaysIcon className="mt-0.5 h-6 w-6 flex-none text-gray-300" aria-hidden="true" />
        Published:&nbsp;
        {news.datetime.toDateString()} @ {news.datetime.toLocaleTimeString("en-UK", { timeZone: "Europe/Oslo" })} (CET)
        </div>
        <div className='flex flex-row'>
        <ClockIcon className="h-6 w-6 text-gray-500" />
        Updated:&nbsp; 
        {news.updateDate.toDateString()} @ {news.updateDate.toLocaleTimeString("en-UK", { timeZone: "Europe/Oslo" })} (CET)
        </div>
      </div>
      }
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{news.title}</h1>
        {news.headline != "" ?
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">{news.headline}</h2>
        : null}
        <p className="mt-6 text-xl leading-8">
          {news.desc}
        </p>
        {news.desc2 != "" ?
        <p className="mt-6 text-xl leading-8">
          {news.desc2}
        </p>
        : null}
        {news.desc3 != "" ?
        <p className="mt-6 text-xl leading-8">
          {news.desc3}
        </p>
        : null}
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
        {news.desc4 != "" ?
        <p className="mt-6 text-xl leading-8">
          {news.desc4}
        </p>
        : null}
        {news.desc5 != "" ?
        <p className="mt-6 text-xl leading-8">
          {news.desc5}
        </p>
        : null}
      </div>
    </div>
    </FadeIn>
    <Footer />
  </main>
  )
}
