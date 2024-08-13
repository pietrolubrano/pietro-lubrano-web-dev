"use server"

import nodemailer from 'nodemailer';

export type FormState = {
  res: string,
  message: string
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

export async function sendMail(prevState: FormState, formData: FormData) {

  const from = formData.get('from')
  const message = formData.get('message')

  try {
    const res = await transporter.sendMail({
      from: from as string,
      to: process.env.GMAIL_FROM, // list of receivers
      subject: `Message from website`, // Subject line
      text: message as string, // plain text body
      /* html: emailHtml */ // html body
    })
    return { res: 'OK', message: `✅ Messaggio inviato correttamente.\nAppena possibile risponderemo all'indirizzo email: ${from}` }
  } catch (err) {
    console.log(err)
    return { res: 'Error', message: "Errore durante l'invio riprovare" }
  }
}

