import Contact from "./contact"

export default async function rec_team({teamSoon}) {

    return (
        <div className="container mx-auto sm:px-6 lg:px-8">{
            
      <div className="space-y-12 mx-1 my-8">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Recruitment form for Staff</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Would you like to join our staff team? Fill out the form below and we will get back to you as soon as possible. You can write in both english and norwegian.
          </p>
          {/* passes down the filtered input to contact.tsx */}
          <Contact></Contact>
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-7 text-gray-900">Alternative way to signup</h3>
          <div>
          <div className="mt-2 space-y-4">
            <p className="mt-4 text-black text-center relative inline-flex items-center justify-center rounded-md text-xl font-bold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              Contact our CEO on discord: lazyboy
            </p>
          </div>
          </div>
        </div>
        </div>
        }</div>
    )
}