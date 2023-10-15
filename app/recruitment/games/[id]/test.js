"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormDataSchema } from "@lib/utils/schema";
import { z } from "zod";
import { addEntry, sendEmail } from "../../../action.js";

export default function Contact({ input }) {
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      gamerTag: "",
      input: input,
    },
  });

  const processForm = async (data) => {
    const result = await sendEmail(data);
    setData(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent");
      reset();
      return;
    }

    console.log(result?.error);
    toast.error("Error sending email");
  };

  return (
    <div className="mt-10 sm:mt-0">
      <form
        onSubmit={handleSubmit(processForm)}
        className="space-y-8 divide-y divide-gray-200"
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="mt-2 block text-sm font-medium leading-6 text-gray-900"
            >
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
                  {...register("email")}
                />
              </div>
              {errors.email?.message && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>
            <label
              htmlFor="username"
              className="mt-2 block text-sm font-medium leading-6 text-gray-900"
            >
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
                  {...register("gamerTag")}
                />
              </div>
              {errors.gamerTag?.message && (
                <p className="text-sm text-red-400">{errors.gamerTag.message}</p>
              )}
            </div>
            {input.map((person, index) => (
              <div key={person.id}>
                <label
                  htmlFor="username"
                  className="mt-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  {person.name}
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      key={person.id}
                      type="text"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder={person.name}
                      {...register(`input.${index}.dummy`, {
                        required: "Must have txt",
                      })}
                    />
                  </div>
                  {errors.input?.[index]?.dummy?.message && (
                    <p className="text-sm text-red-400">
                      {errors.input?.[index]?.dummy?.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <div className="flex-1 rounded-lg text-black">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}