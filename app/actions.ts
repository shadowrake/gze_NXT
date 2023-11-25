"use server";

import { z } from "zod";

import axios from "axios";

import { Resend } from 'resend';

import { FormDataSchema } from "../lib/utils/schema";

import { FormDataSchemas } from "../lib/utils/schemaS";

import ContactForm from "@components/contact_form_email";

import ContactFormS from "@components/contact_form_emailS";


type ContactFormInputs = {
    game: string;
    email: string;
    discordTag: string;
    age: string;
    hours: string;
    gamertag: string;
    role: string;
    rank: string;
    toxic: string;
    teamPlayer: string;
    prevExperience: string;
    ambitons: string;
    anythingElse: string;
    };

//Defines the Resend API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = FormDataSchema.safeParse(data);

  if(result.success) {
    const {game, email, discordTag, age, hours, gamertag, role, rank, toxic, teamPlayer, prevExperience, ambitons, anythingElse} = result.data;

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resend}`,
        },
        body: JSON.stringify({
          from: 'Greenzone Esports Recruitment <recruitment@greenzoneesports.com>',
          to: ['recruitment@greenzoneesports.com'],
          subject: `New ${game} recruitment application`,
          text: `Email: ${age}\nEmail: ${hours}\nEmail: ${gamertag}\nEmail: ${role}\nEmail: ${rank}\nEmail: ${email}\nGamer tag: ${discordTag}`,
          react: ContactForm({email, discordTag, age, hours, gamertag, role, rank, toxic, teamPlayer, prevExperience, ambitons, anythingElse})
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to send email: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      return {success: true, data: data};
    } catch (error) {
      // Handle error
    }
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
      subject: `New ${role} ${teamManager} application`,
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

  export async function verifyCaptcha(token: string | null) {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`
    );
    const data = await res.json();

    if (data.success) {
      return "success!";
    } else {
      throw new Error("Failed Captcha");
    }
  }