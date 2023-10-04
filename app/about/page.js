import { FadeIn } from '@components/FadeIn'
import Footer from '@components/footer'
import NavBar from '@components/nav'
import {getStaff} from '@lib/mongo/staff'

async function fetchStaff() {
    const {staff} = await getStaff()
    return staff
}

export default async function About() {
    const staff = await fetchStaff()

  return (
    <main>
      <NavBar />
      <FadeIn>
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Who are GreenZone Esports</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
            We are an Esports organisation, 
            our staff is a friend group who are passionate about Esports.
            We have a goal to recruit new/amateur players who are willing to be a part of our organisation and try to achive greatness.
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
    </FadeIn>
    <FadeIn>
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

{/* <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              </a>
            </li>
              <li>
                <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                  </svg>
                </a>
              </li>
            </ul> */}