"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import GridPosts from "./GridPosts";
import Categories from "./Categories";

const ALL_POSTS = "All Posts";

export default function CategoryPosts({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

  return (
    <section className="flex">
      <GridPosts posts={filtered} />
      <Categories categories={[ALL_POSTS, ...categories]} onClick={setSelected} />
    </section>
  );
}
