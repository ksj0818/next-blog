import { getFeaturedPosts } from "@/service/posts";
import GridPosts from "./GridPosts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <>
      <GridPosts posts={posts} />
    </>
  );
}
