import { getTeamsInput } from "../../../../lib/prisma/read/teaminput"
import Contact from "./contact.tsx"

export default async function rec_team({teamSoon}) {

    const {teamsinput} = await getTeamsInput()

    const input = teamsinput.filter((input) => teamSoon.name === input.keyword)

    return (
        <div className="container mx-auto sm:px-6 lg:px-8">{
            <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Recruitment form for {teamSoon.title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {teamSoon.desc}
          </p>
          <Contact input = {input}></Contact>
        </div>
        </div>
    </form>
        }</div>
    )
}