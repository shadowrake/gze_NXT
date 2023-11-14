import NavBar from "../../../components/nav.js"
import { FadeIn } from '../../../components/FadeIn.jsx'
import Footer from '../../../components/footer.js'
import Contact from './contact.tsx'
import { notFound } from 'next/navigation'
export const runtime = 'edge';



 
 export default async function recTeam() {
    return (
        <main className='bg-white'>
            <NavBar></NavBar>
            {/* creates an fadein effect on the page */}
            <FadeIn>
            <div className="container mx-auto sm:px-6 lg:px-8">{
            
            <div className="space-y-12 mx-1 my-8">
              <div className="border-b border-gray-900/10 pb-6">
                <h2 className="text-lg font-semibold leading-7 text-gray-900">Recruitment form for our different teams</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Would you like to join the one of our team? Fill out the form below and we will get back to you as soon as possible. You can write in English or Norwegian.
                </p>
                {/* passes down the filtered input to contact.tsx */}
                <Contact></Contact>
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900">Alternative way to signup</h3>
                <div className="mt-2 space-y-4">
                  <a href="/recruitment/games/howto" className="">
                  <p className="mt-4 bg-greenzone text-black text-center relative inline-flex items-center justify-center rounded-md text-xl font-bold hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    Apply with discord
                  </p>
                  </a>
                </div>
                <div>
                <h3 className="mt-6 text-lg font-bold leading-7 text-gray-900 mx-2">OR</h3>
                <div className="mt-2 space-y-4">
                <p className="mt-4 text-xl font-bold leading-7 text-gray-900">
                    Contact our team managers on discord | shadowrake - CS | Other teams need managers <a className="mt-4 bg-greenzone text-black text-center relative inline-flex items-center justify-center rounded-md text-xl font-bold hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" href="/recruitment/staff">Apply here</a>
                  </p>
                </div>
                </div>
              </div>
              </div>
              }</div>
            </FadeIn>
            <Footer></Footer>
        </main>
    )
  }
