"use client";

import { PostWithEmailArray } from "@/types";
import { PostCard } from "../post";

export const PostsWithFilter = ({ posts }: PostWithEmailArray) => {
  return (
    <>
      <div className="">filter</div>

      <div className="gap-5 flex flex-col">
        {posts?.map((item) => (
          <PostCard key={item.id} post={item} />
        ))}
      </div>
    </>
  );
};
