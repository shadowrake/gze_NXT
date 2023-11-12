 export default async function team_main() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">Apply for a team</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
          <div>
              <a href="/recruitment/games">
              <div  className="group relative">
                <div className="overflow-hidden rounded-lg bg-gray-100">
                <div className="bg-red-100 relative group">
                  <img src="https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/c1f23b9e-32a2-4bac-99c6-860d05761400/public" alt="" className="object-contain h-190 w-full object-center" />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-xl bg-green-200 md:bg-opacity-10 text-black font-semibold"></div>
                </div>
                </div>
              </div>
              </a>
              </div>
          </div>
        </div>
      </div>
    )
  }