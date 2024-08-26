"use server";

import { Resend } from "resend";
import { validateString } from "./utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderTelephone = formData.get("senderTelephone");
  const senderName = formData.get("name");

  if (!message || typeof message !== "string") {
    return {
      error: "invalid message",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalid message",
    };
  }

  await resend.emails.send({
    from: " Contact form <onboarding@resend.dev>",
    to: "simondemeulemeester9@gmail.com",
    replyTo: senderEmail as string,
    subject: "Contact form",
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
      senderName: senderName as string,
      senderTelephone: senderTelephone as unknown as number,
    }),
  });
};
