import { getNonFeaturedPosts } from "@/service/posts";
import MultiCarousel from "../common/MultiCarousel";
import PostsCard from "./PostsCard";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <MultiCarousel>
      {posts.map((post) => (
        <PostsCard post={post} />
      ))}
    </MultiCarousel>
  );
}
