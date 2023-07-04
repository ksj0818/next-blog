import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function PostsCard({ post }: { post: Post }) {
  const { path, title, description, category, date } = post;
  return (
    <article className="text-center transition-all shadow-lg hover:-translate-y-2 hover:shadow-xl hover:brightness-90">
      <Link href={`/posts/${path}`}>
        <Image src={`/images/posts/${path}.png`} alt={path} width={300} height={200} className="w-full" />
        <p className="flex items-center justify-end font-bold gap-x-1 text-sky-500">
          <AiTwotoneCalendar />
          {date.toString()}
        </p>
        <h2 className="text-xl font-bold truncate">{title}</h2>
        <h3 className="text-lg font-semibold truncate">{description}</h3>
        <button className="px-2 py-1 my-2 rounded-lg bg-emerald-300">{category}</button>
      </Link>
    </article>
  );
}
