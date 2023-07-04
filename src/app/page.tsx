import FeaturedPosts from "@/components/posts/FeaturedPosts";
import ProfileCard from "@/components/profile/ProfileCard";

export default function Home() {
  return (
    <section>
      <ProfileCard />
      <FeaturedPosts />
    </section>
  );
}
