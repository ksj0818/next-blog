import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = { post: Post; type: "prev" | "next" };

const ICON_CLASS = "text-4xl text-yellow-300 group-hover:text-5xl transition-all";
export default function MovePosts({ post, type }: Props) {
  const { path, title, description } = post;
  return (
    <div className="relative w-full">
      <Link href={`/posts/${path}`} className="group">
        <Image
          className="w-full max-h-[200px] brightness-50"
          src={`/images/posts/${path}.png`}
          alt={path}
          width={200}
          height={150}
        />
        <div className="absolute flex items-center w-full px-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {type === "prev" && <AiOutlineArrowLeft className={ICON_CLASS} />}
          <div className="mx-auto text-center">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <h3 className="text-white">{description}</h3>
          </div>
          {type === "next" && <AiOutlineArrowRight className={ICON_CLASS} />}
        </div>
      </Link>
    </div>
  );
}
