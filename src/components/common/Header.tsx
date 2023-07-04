import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";

const LINKS = ["About", "Contact", "Posts"];
export default function Header() {
  return (
    <header className="flex items-center justify-between mt-4">
      <Link href="/">
        <SiNextdotjs className="text-5xl" />
      </Link>
      <div className="flex gap-4">
        {LINKS.map((link, index) => (
          <Link href={link.toLowerCase()} key={index} className="text-lg font-bold hover:underline">
            {link}
          </Link>
        ))}
      </div>
    </header>
  );
}
