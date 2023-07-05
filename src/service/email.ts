import { ContactEmailForm } from "@/components/contact/EmailForm";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail(email: ContactEmailForm) {
  const { from, message, subject } = email;
  const info = {
    from: from,
    to: process.env.AUTH_USER2,
    subject: `[BLOG] ${subject}`,
    html: `
        <h1>${subject}</h1>
        <br/>
        <p>${message}</p>
        <br/>
        <p>보낸 사람: ${from}</p>
    `,
  };

  return transporter.sendMail(info);
}
