import EmailForm from "@/components/contact/EmailForm";
import { Metadata } from "next";
import { AiFillGithub, AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Kim에게 메일 보내기",
};

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "https://www.github.com",
  },
  {
    icon: <AiFillGoogleCircle />,
    url: "https://www.google.com",
  },
  {
    icon: <AiFillFacebook />,
    url: "https://www.facebook.com/",
  },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col w-full max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold">이메일 보내기</h2>
      <p>ksj071808@gmail.com</p>
      <div className="flex mx-auto">
        {LINKS.map((link, index) => (
          <a href={link.url} target="_blank" rel="noreferrer" key={index} className="text-4xl hover:text-yellow-400">
            {link.icon}
          </a>
        ))}
      </div>
      <EmailForm />
    </section>
  );
}
