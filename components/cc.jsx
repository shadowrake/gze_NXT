import {getCC} from '../lib/prisma/read/cc.js'
  
  export default async function Example() {
    const { cc } = await getCC()

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {cc.map((creator) => (
              <div key={creator.id}>
              <a  href={`/media/cc/${creator.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={creator.img}
                    alt={creator.imgAlt}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className='hidden md:block'>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex flex-col justify-center items-center text-xl bg-green-200 md:bg-opacity-30 text-black font-semibold">
                  
                  <h3 className="mt-1 px-2 text-3xl font-bold text-black">{creator.gamertag.toUpperCase()}</h3>
                  <p className="mt-1 px-2 bg-white rounded text-base italic text-black">{creator.role.toUpperCase()}</p>
                  <p className="mt-1 px-2 text-sm text-black">{creator.age}, {creator.Nationality.toUpperCase()}</p>
                  </div>
                </div>
                <div className="md:hidden absolute inset-x-0 h-1/4 inset-y-3/4 flex flex-col justify-center items-center text-xl bg-green-200 md:bg-opacity-30 text-black font-semibold">
                  <h3 className="mt-1 px-2 text-3xl font-bold text-black">{creator.gamertag.toUpperCase()}</h3>
                  <p className="mt-1 px-2 bg-white rounded text-base italic text-black">{creator.role.toUpperCase()}</p>
                  <p className="mt-1 px-2 text-sm text-black">{creator.age}, {creator.Nationality.toUpperCase()}</p>
                </div>
                </div>
                
              </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  