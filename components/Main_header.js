import Team from './Team_main'
import News from './news_main'
import Spons from './sponsors_bottom'
import Events from './events_main'

export default function main_header() {
    return <div className="divide-gray-200 overflow-hidden bg-white shadow">
    <div className="">
      {<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-40 lg:px-8">
    <img
      src="https://hermankristiansen.no/test2.png"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div
      className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div
      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  </div>}
    </div>
    <div className="px-4 py-5 sm:p-6 banner_gamer">{<div className=" justify-center sm:flex">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
      </div>
      <div className=''>
      <div className="flex gap-x-2.5">
        <img src="https://i.bo3.no/image/319645/gamer2020-square.png" alt="gamer.no logo" className="h-6 w-6 flex-none rounded-full bg-white/10" />
        <a href="https://www.gamer.no/klubber/greenzone-esports/171493" className='justify-center font-bold text-black '><p className='inline-flex text-lg items-center border-b-2 border-transparent font-bold text-black-900 hover:border-green-900 hover:text-black-700'>Team Gamer.no page </p>
        </a>
        </div>
        
      </div>
    </div>}</div>
      <Team></Team>
      <News></News>
      <Events></Events>
      <Spons></Spons>
    </div>
  }


  