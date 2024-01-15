import Contact from "./contact"
import { notFound } from "next/navigation"

import { getStaffRec } from "../../../lib/prisma/read/staffRec"

export default async function rec_team() {

    // Fetch data from external API
    const {staff} = await getStaffRec()
    const maintance = true
    return (
        <div className="container mx-auto sm:px-6 lg:px-8">{
      <div className="space-y-12 mx-1 my-8">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Recruitment form for Staff</h2>
          <h4 className="mt-1 text-sm leading-6 text-red-600">An error with form due to edge-runtime, Use the alternative ways at the bottom of page until a fix is deployed.</h4>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Would you like to join our staff team? Fill out the form below and we will get back to you as soon as possible. You can write in English or Norwegian.
          </p>
          {/* passes down the filtered input to contact.tsx */}
          <Contact staff = {staff}></Contact>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold leading-7 text-gray-900">Alternative way to signup</h3>
          <div>
          <div className="mt-2 space-y-4">
            <p className="mt-4 text-black text-center relative inline-flex items-center justify-center rounded-md text-lg md:text-xl font-bold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              Contact our CEO on discord or email:
            </p>
          </div>
          </div>
        </div>
        </div>
        }</div>
    )
}