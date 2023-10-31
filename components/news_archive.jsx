import {getNews} from '../lib/prisma/read/news.js'

  
  export default async function news_main() {
    // Fetch data from external API
    const {news} = await getNews()
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">News archive</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Older news articles about GZE.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* maps data from api */}
            {news.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imgUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                {post.datetime.toDateString() != post.updateDate.toDateString() ?
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  
                  
                  <time dateTime={post.startDate} className="mr-8 font-semibold outline-1 font-outline">
                    Published: {post.datetime.toDateString()}
                  </time>
                  <time dateTime={post.endDate} className="mr-8 font-semibold outline-1 font-outline">
                    Updated: {post.updateDate.toDateString()}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imgUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                  : <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.startDate} className="mr-8 font-semibold outline-1 font-outline">
                    Published: {post.datetime.toDateString()}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imgUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>}
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={`/news/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
          <a href='/news' className='text-black'>
                <p className='mt-16 bg-green-200 text-center relative inline-flex items-center justify-center rounded-md p-2 text-lg font-bold hover:bg-green-300 hover:text-black-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>Current news</p>
          </a>
        </div>
      </div>
    )
  }
  