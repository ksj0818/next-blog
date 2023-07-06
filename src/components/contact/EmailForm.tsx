"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner from "./Banner";
import { sendContactEmail } from "@/service/contact";

export type ContactEmailForm = {
  from: string;
  subject: string;
  message: string;
};
export type ContactBanner = {
  message: string;
  state: "success" | "error";
};

const LABLE_CLASS = "font-bold text-white";
const INPUT_CLASS = "px-2";
const DEFAULT_FORM = { from: "", subject: "", message: "" };
export default function EmailForm() {
  const [form, setForm] = useState<ContactEmailForm>(DEFAULT_FORM);
  const [banner, setBanner] = useState<ContactBanner | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "메일 전송 성공!", state: "success" });
        setForm(DEFAULT_FORM);
      })
      .catch((e) => {
        console.log(e);
        return setBanner({ message: "메일 전송 실패!", state: "error" });
      })
      .finally(() =>
        setTimeout(() => {
          setBanner(null);
        }, 3000)
      );
  };
  return (
    <section>
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="flex flex-col gap-1 p-4 mt-4 text-left rounded-lg bg-slate-700">
        <label htmlFor="from" className={LABLE_CLASS}>
          Your Email
        </label>
        <input
          className={INPUT_CLASS}
          type="email"
          name="from"
          id="from"
          value={form.from}
          required
          autoFocus
          onChange={onChange}
        />
        <label htmlFor="subject" className={LABLE_CLASS}>
          Subject
        </label>
        <input
          className={INPUT_CLASS}
          type="text"
          name="subject"
          id="subject"
          value={form.subject}
          required
          onChange={onChange}
        />
        <label htmlFor="message" className={LABLE_CLASS}>
          Message
        </label>
        <textarea
          className={INPUT_CLASS}
          rows={10}
          name="message"
          id="message"
          value={form.message}
          required
          onChange={onChange}
        />
        <button className="p-1 mt-3 font-bold bg-orange-500 hover:bg-orange-400">Submit</button>
      </form>
    </section>
  );
}
