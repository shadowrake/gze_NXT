"use client";

import React from "react"

import { useState } from "react";
import ReCaptcha from "react-google-recaptcha"
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler, useFieldArray, set } from "react-hook-form";
import { FormDataSchema } from "@lib/utils/schema";
import { z } from "zod";
import { sendEmail, verifyCaptcha } from "app/actions";



//define the interface for the props
type Input = z.infer<typeof FormDataSchema>




export default function Contact()  {
    const [data, setData] = useState<Input>();
    const recaptchaRef = React.useRef<ReCaptcha>(null);
    const [isVerified, setIsverified] = useState<boolean>(false);

    //Define the formstate and readys the form for submission
    const {
      register,
      handleSubmit,
      watch,
      control,
      getValues,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<Input>({
      resolver: zodResolver(FormDataSchema),
    });

    //Define the uses the sendEmail function to send an email on submit and resets the form on success
    const processForm: SubmitHandler<Input> = async data => {
      const result = await sendEmail(data);

      if (result?.success) {
        console.log({ data: result.data });
        toast.success("Email sent");
        reset();
        window.location.href = "/recruitment";
        return;
      }

      if (result && 'error' in result) {
        console.log(result.error);
      }

      toast.error("Error sending email");

      
    }

    async function handleCaptchaSubmission(token: string | null) {
      // Server function to verify captcha
      await verifyCaptcha(token)
        .then(() => setIsverified(true))
        .catch(() => setIsverified(false))
    }
    
    return (
        <div className="mt-10 sm:mt-0">
          <form
            autoComplete="off"
            onSubmit={handleSubmit(processForm)}
            className="space-y-8 divide-y divide-gray-200 mx-auto max-w-2xl"
          >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
          <div>
            <label htmlFor="Game" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                Choose Game
            </label>
            <select
                id="Role"
                className="mt-2 block w-1-2 rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="Team manager"
                {...register("game")}
            >
                <option>Counter-Strike 2</option>
                <option>Leauge of Legends</option>
                <option>Rocket leauge</option>
                <option>Rainbow-six:siege</option>
                <option>Fortnite</option>
            </select>
            </div>
            {errors.role?.message && (
                    <p className="text-sm text-red-400">{errors.role.message}</p>
                  )}
          <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="Email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    {...register("email", {required: "You need a vaild email"})} />
          </div>
          {errors.email?.message && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                  )}
          </div>
          <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Discord Username
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="My discord tag is..."
                    defaultValue={''}
                    {...register("discordTag", {required: "You need to write your gamer tag here"})} />
          </div>
          {errors.discordTag?.message && (
                    <p className="text-sm text-red-400">{errors.discordTag.message}</p>
                  )}
          </div>
          <label htmlFor="age" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                How old are you?
            </label>
            <div className="mt-2">
                <input
                type="number"
                id="age"
                placeholder="XX"
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("age")}
                />
            </div>
            {errors.age?.message && (
                    <p className="text-sm text-red-400">{errors.age.message}</p>
                  )}
                  <label htmlFor="gamertag" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  What is the gamertag you use most often?
            </label>
            <div className="mt-2">
                <input
                type="text"
                id="gamertag"
                placeholder="My gamertag is..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("gamertag")}
                />
            </div>
            {errors.gamertag?.message && (
                    <p className="text-sm text-red-400">{errors.gamertag.message}</p>
                  )}
                  <label htmlFor="hours" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  How many hours do you have on the chosen game?            </label>
            <div className="mt-2">
                <input
                type="number"
                id="hours"
                placeholder="XXXXX"
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("hours")}
                />
            </div>
            {errors.hours?.message && (
                    <p className="text-sm text-red-400">{errors.hours.message}</p>
                  )}
                  <label htmlFor="rank" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  Which rank are you that is relavant to the game? (please link)
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="rank"
                placeholder="My rank is..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("rank")}
                />
            </div>
            {errors.rank?.message && (
                    <p className="text-sm text-red-400">{errors.rank.message}</p>
                  )}
                  <label htmlFor="role" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  Which role do you prefer?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="role"
                placeholder="I prefer..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("role")}
                />
            </div>
            {errors.role?.message && (
                    <p className="text-sm text-red-400">{errors.role.message}</p>
                  )}
                  <label htmlFor="toxic" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  Are you toxic?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="toxic"
                placeholder="I'm not toxic..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("toxic")}
                />
            </div>
            {errors.toxic?.message && (
                    <p className="text-sm text-red-400">{errors.toxic.message}</p>
                  )}
                  <label htmlFor="role" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  Are you a teamplayer?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="teamPlayer"
                placeholder="I'm a teamplayer..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("teamPlayer")}
                />
            </div>
            {errors.teamPlayer?.message && (
                    <p className="text-sm text-red-400">{errors.teamPlayer.message}</p>
                  )}
                  <label htmlFor="prevExperience" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  What previous experience can you bring to the team?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="prevExperience"
                placeholder="I have experience with..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("prevExperience")}
                />
            </div>
            {errors.prevExperience?.message && (
                    <p className="text-sm text-red-400">{errors.prevExperience.message}</p>
                  )}
                  <label htmlFor="ambitons" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  What are your ambitions for this season?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="ambitons"
                placeholder="My ambitions are..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("ambitons")}
                />
            </div>
            {errors.ambitons?.message && (
                    <p className="text-sm text-red-400">{errors.ambitons.message}</p>
                  )}
                  <label htmlFor="anythingElse" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  Anything else?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="anythingElse"
                placeholder="I would like to add..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("anythingElse")}
                />
            </div>
            {errors.anythingElse?.message && (
                    <p className="text-sm text-red-400">{errors.anythingElse.message}</p>
                  )}
          </div>
        </div>

              <div className="mt-6 flex flex-col items-center justify-end gap-x-6">
                <div className="flex-row">
                <a className="mr-6" href="/recruitment">
                <button type="button"  className="mt-6 mx-1 text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                </a>

                <button
                  className="mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isSubmitting || !isVerified}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                </div>
                <ReCaptcha
                  className="mt-6"  
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!}
                  onChange={handleCaptchaSubmission}
                />
              </div>
              <p className="text-red-900 text-center">All forms submitted will be deleted within 3 months</p>
      </form>
    </div>
    )
}