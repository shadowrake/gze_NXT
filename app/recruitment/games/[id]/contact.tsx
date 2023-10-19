"use client";

import React from "react"

import { useState } from "react";
import ReCaptcha from "react-google-recaptcha"
import { toast } from "sonner";
import ContactForm from "@components/contact_form_email";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler, useFieldArray, set } from "react-hook-form";
import { FormDataSchema } from "@lib/utils/schema";
import { z } from "zod";
import { addEntry, sendEmail, verifyCaptcha } from "app/actions";





//define the interface for the props
type Input = {
  email: string;
  gamerTag: string;
  input: { name: string; id: React.Key; dummy: string}[];
  teamSoon: {title: string};
  title: string;
  message: string;
};




export default function Contact({ input, teamSoon }: Input)  {
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
      defaultValues: {
        email: "",
        gamerTag: "",
        input: input,
        title: "",
      },
    });

    //Define the uses the sendEmail function to send an email on submit and resets the form on success
    const processForm: SubmitHandler<Input> = async data => {
      const result = await sendEmail(data);
      setData(data);

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
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
          <input 
                    type="hidden"
                    id="username"
                    autoComplete="username"
                    value={teamSoon.title}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register("title", {required: "You need a vaild email"})} />
                    {errors.title?.message && (
                    <p className="text-sm text-red-400">{errors.title.message}</p>
                  )}
          <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="username"
                    autoComplete="username"
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
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="discord username"
                    {...register("gamerTag", {required: "You need to write your gamer tag here"})} />
          </div>
          {errors.gamerTag?.message && (
                    <p className="text-sm text-red-400">{errors.gamerTag.message}</p>
                  )}
          </div>
          {/* Maps passed down prop to create input based on how many entries there are in the database */}
          {input.map((person: { name: string ; id: React.Key }, index) => (
            <div key={person.id}>
              <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                {person.name}
              </label>
              <div className="mt-2">
                  <textarea
                    key={person.id}
                    
                    id="username"
                    autoComplete="username"
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={person.name}
                    {...register(`input.${index}.dummy`, { required: "Must have txt" })}
                  />
                  
              </div>
              {errors.input?.[index]?.dummy?.message && (
                    <p className="text-sm text-red-400">{errors.input?.[index]?.dummy?.message}</p>
                  )}
            </div>
            ))}
          </div>
        </div>

              <div className="mt-6 flex flex-col items-center justify-end gap-x-6">
                <div className="flex-row">
                <button type="button" className="mt-6 mx-1 text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>

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