import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function howTo() {
  return (
    <div className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apply with discord</h1>
        <p className="mt-6 text-xl leading-8">
          This is a short guide on how to apply for a team in the <a className='text-black text-center relative inline-flex items-center justify-center rounded-md text-lg font-bold hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' href='https://discord.gg/cTCqsEbxhd'>GZE discord.</a> 
        </p>
        <div className="mt-10 max-w-2xl">
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Optional step</h1>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">step 0: accept our rules</h2>
          <p>
            This step is optional, but we recommend you to read our rules before you apply. You can find our rules in the discord channel #rules.
          </p>
          
          <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/2117ae5a-84c9-47b1-45ab-6115dfda1100/public"
            alt="Screenshot from discord, which shows the rules channel"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Screenshot from discord, which shows the rules channel
          </figcaption>
        </figure>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Step 0.5: Click confirm in rules</h2>
          <p className="mt-8">
            When you are in the rules channel, you will see a message from our bot. Click the button marked confirm to confirm that you have read the rules. This will also give the role of community member.
          </p>
          <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/ebbf5344-fad5-407e-23e8-46030fd18000/public"
            alt="Screenshot from discord which shows the rules channel with the confirm button"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Screenshot from discord which shows the rules channel with the confirm button
          </figcaption>
        </figure>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Step 1: Go to our recruitment channel</h2>
          <p className="mt-6">
            When you have accepted our rules (optional), you can go to our recruitment channel. You can find our recruitment channel in the discord channel #recruitment.
          </p>
          <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/4baed008-e447-4af7-7d20-337ebd9a5200/public"
            alt="Screenshot from discord which shows the recruitment channel"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Screenshot from discord which shows the recruitment channel
          </figcaption>
        </figure>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Step 2: Choose the game you are interested in</h2>
          <p className="mt-6">
            When you are in the recruitment channel, you will see a message from our bot. Click the button marked with the game you want to apply to.
          </p>
          <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/27d4fcaa-7c1c-4715-70b3-83c79a48e400/public"
            alt="Screenshot from discord which shows the recruitment channel with the game buttons"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Screenshot from discord which shows the recruitment channel with the game buttons
          </figcaption>
        </figure>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Step 3: Answer the questions</h2>
          <p className="mt-6">
            When you have clicked the button, you will see a message from our bot. The bot will ask you some questions. You can answer the questions by typing in the chat.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Step 4: Done</h2>
          <p className="mt-6">
            When you have answered the questions, you are done. Now you just have to wait for a team manager to contact you.
          </p>
        </div>
      </div>
    </div>
  )
}
