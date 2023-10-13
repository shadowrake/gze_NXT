"use server";

import { z } from "zod";

import { Resend } from 'resend';

import { FormDataSchema } from "../lib/utils/schema";

import ContactForm from "@components/contact_form_email";

type Input = {
    email: string;
    gamerTag: string;
    input: { name: string; id: React.Key }[];
  };
  

export async function addEntry(data: Input) {
  const result = FormDataSchema.safeParse(data);

    if (result.success) {
        return {success: true, data: result.data};
    }

    if(result.error) {
        return {success: false, error: result.error.format()};
    }
}

type ContactFormInputs = {
    email: string;
    gamerTag: string;
    input: { name: string; id: React.Key; dummy: string}[];
  };
  

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
const result = FormDataSchema.safeParse(data);

if(result.success) {
const {input, email, gamerTag} = result.data;
try{
const data = await resend.emails.send({
    from: 'Greenzone Esports <herman.kristiansen@greenzoneesports.com>',
    to: ['herman@hermankristiansen.no'],
    subject: 'New contact form submission',
    text: `Input: ${input}\nEmail: ${email}\nGamer tag: ${gamerTag}`,
    react: ContactForm({input, email, gamerTag})
})
return {success: true, data: data};
} catch (error) {
return {success: false, error: error};
}
}

if(result.error) {
return {success: false, error: result.error.format()};
}
}