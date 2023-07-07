import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string; prev: Post | null; next: Post | null };

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getFeaturedPosts() {
  const data = await getAllPosts();
  return data.filter((post) => post.featured);
}
export async function getNonFeaturedPosts() {
  const data = await getAllPosts();
  return data.filter((post) => !post.featured);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const content = await readFile(filePath, "utf-8");
  const currentIdx = posts.indexOf(post);
  const prev = currentIdx < posts.length ? posts[currentIdx + 1] : null;
  const next = currentIdx > 0 ? posts[currentIdx - 1] : null;

  return { ...post, content, prev, next };
}
