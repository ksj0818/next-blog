import MarkdownViewer from "@/components/common/MarkdownViewer";
import MovePosts from "@/components/posts/MovePosts";
import { getFeaturedPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const postdata = await getPostData(slug);
  const { path, prev, next, content } = postdata;

  return (
    <article className="my-8 bg-gray-100 shadow-lg rounded-xl">
      <Image
        src={`/images/posts/${path}.png`}
        alt={slug}
        width={760}
        height={300}
        className="w-full rounded-t-xl h-1/5 max-h-[300px]"
      />
      <section className="px-4 mt-4 prose lg:prose-xl max-w-none">
        <MarkdownViewer content={content} />
      </section>

      <div className="flex">
        {prev && <MovePosts post={prev} type="prev" />}
        {next && <MovePosts post={next} type="next" />}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
