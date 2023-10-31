import { getVideoMedia } from "../lib/prisma/read/media"

export default async function VideoMedia() {
    const { videoMedia } = await getVideoMedia()
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-2xl font-medium text-gray-900">Videos from GZE staff and players</h2>
          </div>
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
        </div>
      </div>
    )
  }