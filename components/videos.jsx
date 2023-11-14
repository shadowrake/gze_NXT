import { getVideoMedia } from "../lib/prisma/read/media"

export default async function VideoMedia() {
    const { videoMedia } = await getVideoMedia()
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Videos from GZE staff and players</h2>
            </div>
          </div>
          {Object.keys(videoMedia).length != 0 ?
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {videoMedia.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <iframe width="424" height="238" src={product.url} title={product.title}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                  <h3>
                      <span aria-hidden="true" className="" />
                      {product.title}
                  </h3>
                  <p>{product.published}</p>
                </div>
              </div>
            ))}
              </div>
              : <div className="mt-4 md:flex md:items-center flex-col md:justify-center">
              <a href={`/`} className="text-lg mb-6 font-medium text-indigo-600 hover:text-indigo-500 md:block">
              No Videos found, click here to go back
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
              </div>
      }
        </div>
      </div>
    )
  }