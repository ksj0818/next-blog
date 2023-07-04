import CategoryPosts from "@/components/posts/CategoryPosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <CategoryPosts posts={posts} categories={categories} />;
}
