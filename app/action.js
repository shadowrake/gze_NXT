"use server";

const { z } = require("zod");
const { Resend } = require('resend');
const { FormDataSchema } = require("../lib/utils/schema");
const ContactForm = require("@components/contact_form_email").default;

const resend = new Resend(process.env.RESEND_API_KEY);

async function addEntry(data) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export async function sendEmail(data) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    const { input, email, gamerTag } = result.data;
    try {
      const data = await resend.emails.send({
        from: 'Greenzone Esports <herman.kristiansen@greenzoneesports.com>',
        to: ['herman@hermankristiansen.no'],
        subject: 'New contact form submission',
        text: `Input: ${input}\nEmail: ${email}\nGamer tag: ${gamerTag}`,
        react: ContactForm({ input, email, gamerTag })
      });
      return { success: true, data: data };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}