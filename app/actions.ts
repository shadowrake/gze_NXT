"use server";

import { z } from "zod";

import { Resend } from 'resend';

import { FormDataSchema } from "../lib/utils/schema";

import { FormDataSchemas } from "../lib/utils/schemaS";

import ContactForm from "@components/contact_form_email";

import ContactFormS from "@components/contact_form_emailS";

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

//Defines the Resend API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
//Validates the data sent from the client side form and returns an error if the data is not valid
const result = FormDataSchema.safeParse(data);

if(result.success) {
//Destructures the data from the client side form
const {input, email, gamerTag} = result.data;
try{
//Sends the email to the email address specified in the "to" field
const data = await resend.emails.send({
    from: 'Greenzone Esports Recruitment <recruitment@greenzoneesports.com>',
    to: ['recruitment@greenzoneesports.com'],
    subject: 'New recruitment application',
    text: `Input: ${input}\nEmail: ${email}\nGamer tag: ${gamerTag}`,
    react: ContactForm({input, email, gamerTag})
})
//Returns a success message if the email was sent successfully
return {success: true, data: data};
} catch (error) {
return {success: false, error: error};
}
}
//Returns an error if the data sent from the client side form is not valid
if(result.error) {
return {success: false, error: result.error.format()};
}
}

type Inputs = z.infer<typeof FormDataSchemas>;

export async function sendEmailS(data: Inputs) {
  //Validates the data sent from the client side form and returns an error if the data is not valid
  const result = FormDataSchemas.safeParse(data);
  
  if(result.success) {
  //Destructures the data from the client side form
  const {name, surname, age, email, gamerTag, role, joinTeam, qualities, teamManager, anythingElse} = result.data;
  try{
  //Sends the email to the email address specified in the "to" field
  const data = await resend.emails.send({
      from: 'Greenzone Esports Recruitment <recruitment@greenzoneesports.com>',
      to: ['recruitment@greenzoneesports.com'],
      subject: 'New recruitment application',
      text: `Name: ${name}\n Surname: ${surname}\n age: ${age}\nEmail: ${email}\nGamer tag: ${gamerTag}\nRole: ${role}\nJoin team: ${joinTeam}\nQualities: ${qualities}\nTeam manager: ${teamManager}\nAnything else: ${anythingElse}`,
      react: ContactFormS({name, surname, age, email, gamerTag, role, joinTeam, qualities, teamManager, anythingElse})
  })
  //Returns a success message if the email was sent successfully
  return {success: true, data: data};
  } catch (error) {
  return {success: false, error: error};
  }
  }
  //Returns an error if the data sent from the client side form is not valid
  if(result.error) {
  return {success: false, error: result.error.format()};
  }
  }