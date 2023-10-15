import { FadeIn } from '../../components/FadeIn'
import Footer from '../../components/footer'
import NavBar from '../../components/nav'
import {getStaff} from '../../lib/prisma/read/staff.js'
import Sponsor from '../../components/sponsors_bottom'

export default async function About() {
    // get the staff from the database
    const { staff } = await getStaff()

  return (
    <main className='bg-white'>
      <NavBar />
      {/* creates an fadein effect on the page */}
      <FadeIn>
      <Sponsor />
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Who are GreenZone Esports</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
            We are an Esports organization, 
            our staff is a friend group who are passionate about Esports.
            We have a goal to recruit new/amateur players who are willing to be a part of our organization and try to achive greatness.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
            Firstly, we are trying to gather teams for CSGO, R6 and LoL. 
            Our dream is to big enough to compete on “the big stage”.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
            Are you ready to <b>#enterthegreenzone</b>
        </p>
      </div>
    </div>
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {staff.map((person) => (
            <li key={person.id} className="rounded-2xl bg-gray-800 px-8 py-10">
              <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src="https://hermankristiansen.no/person_not_founhd.png" alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
              <p className="text-sm leading-6 text-gray-400">{person.nationality}</p>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    </FadeIn>
    <Footer />
    </main>
  )
}