"use client";

import React from "react"

import { useState } from "react";
import ReCaptcha from "react-google-recaptcha"
import { toast } from "sonner";
import ContactForm from "@components/contact_form_email";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler, useFieldArray, set } from "react-hook-form";
import { FormDataSchemas } from "@lib/utils/schemaS";
import { z } from "zod";
import { addEntry, sendEmailS, verifyCaptcha } from "app/actions";



//define the interface for the props
type Input = z.infer<typeof FormDataSchemas>




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
      resolver: zodResolver(FormDataSchemas),
    });

    //Define the uses the sendEmail function to send an email on submit and resets the form on success
    const processForm: SubmitHandler<Input> = async data => {
      const result = await sendEmailS(data);

      if(result?.success){
        console.log({data: result.data});
        toast.success("Email sent");
        reset();
        window.location.href = "/recruitment";
        return;
      }

      console.log(result?.error)
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
            onSubmit={handleSubmit(processForm)}
            className="space-y-8 divide-y divide-gray-200 mx-auto max-w-2xl"
          >
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">

         
          <label htmlFor="name" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            First name
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First name"
                    {...register("name")} />
          </div>
          {errors.name?.message && (
                    <p className="text-sm text-red-400">{errors.name.message}</p>
                  )}
          </div>


          <label htmlFor="surname" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Last name
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="surname"
                    autoComplete="surname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Last name"
                    {...register("surname")} />
          </div>
          {errors.surname?.message && (
                    <p className="text-sm text-red-400">{errors.surname.message}</p>
                  )}
          </div>


          <label htmlFor="Age" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Age
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="number"
                    id="Age"
                    autoComplete="Age"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Age"
                    {...register("age")} />
          </div>
          {errors.age?.message && (
                    <p className="text-sm text-red-400">{errors.age.message}</p>
                  )}
          </div>


          <label htmlFor="Email" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="Email"
                    autoComplete="Email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    {...register("email")} />
          </div>
          {errors.email?.message && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                  )}
          </div>


          <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
          Discord Username (optional)
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Discord username"
                    {...register("gamerTag")} />
          </div>
          </div>


          <div>
            <label htmlFor="Role" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                Role
            </label>
            <select
                id="Role"
                className="mt-2 block w-1-2 rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="Team manager"
                {...register("role")}
            >
                <option>Team manager</option>
                <option>Community Manager</option>
                <option>TBA</option>
            </select>
            </div>
            {errors.role?.message && (
                    <p className="text-sm text-red-400">{errors.role.message}</p>
                  )}


            <div className="mt-2">
            <label htmlFor="teamManager" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                If team manager, what game? else, let it be blank
            </label>
            <select
                id="teamManager"
                className="mt-2 block w-1-2 rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
                {...register("teamManager")}
            >
                <option></option>
                <option>Counter strike 2</option>
                <option>League of legends</option>
                <option>Rainbow six siege</option>
                <option>Rocket leauge</option>
                <option>Apex legends</option>
                <option>Valorant</option>
                <option>Cod:Warzone</option>
                <option>Fortnite</option>
            </select>
            </div>
            {errors.teamManager?.message && (
                    <p className="text-sm text-red-400">{errors.teamManager.message}</p>
                  )}

            <label htmlFor="joinTeam" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                Why would you like to join our team?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="joinTeam"
                placeholder="I would like to join because..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("joinTeam")}
                />
            </div>
            {errors.joinTeam?.message && (
                    <p className="text-sm text-red-400">{errors.joinTeam.message}</p>
                  )}

            <label htmlFor="qualities" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                What qualities do you have that would make you a good fit for our team?
            </label>
            <div className="mt-2">
                <textarea
                rows={4}
                id="qualities"
                placeholder="I am a good fit because..."
                className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register("qualities")}
                />
            </div>
                {errors.qualities?.message && (
                    <p className="text-sm text-red-400">{errors.qualities.message}</p>
                  )}

            <label htmlFor="anythingElse" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                Anything else you would like to add?
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