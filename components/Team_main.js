const products = [
    {
      id: 1,
      name: 'Counter Strike 2 team page',
      href: '#',
      imageSrc: 'https://i.imgur.com/hjpEYZz.png',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
        id: 2,
        name: 'Leauge of Legends team page',
        href: '#',
        imageSrc: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 3,
        name: 'Leauge of Legends team page',
        href: '#',
        imageSrc: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">Our teams</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {products.map((product) => (
            <a href="">
              <div key={product.id} className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <div class="bg-red-100 relative group">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-contain h-190 w-290 object-center" />
                  <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-xl bg-gray-200 md:bg-opacity-50 text-black font-semibold">{product.name}</div>
                </div>
                </div>
              </div>
                </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  