import { Post } from "@/service/posts";
import PostsCard from "./PostsCard";

export default function GridPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <PostsCard key={post.path} post={post} />
      ))}
    </ul>
  );
}
