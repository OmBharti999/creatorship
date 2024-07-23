"use client";

import { PostCard } from "../post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import type { PostWithEmailArray } from "@/types";

type filterType = "creators" | "business-owners";

interface Props extends PostWithEmailArray {
  autherMail: string | undefined;
}

export const PostsWithFilter = ({ posts, autherMail }: Props) => {
  const [filterActive, setFilterActive] = useState(false);
  const [filter, setFilter] = useState<filterType>("creators" as filterType);
  return (
    <>
      <div className="flex gap-5 items-center w-full">
        <h5>
          Filters{" "}
          <span className="inline-block w-14">
            {!filterActive ? "disabled" : "active"}
          </span>
        </h5>
        <Input
          type="checkbox"
          name="filter-active"
          id="filter-active"
          checked={filterActive}
          className="max-w-9"
          onChange={() => {
            setFilterActive((p) => !p);
          }}
        />
        <Button
          onClick={() => {
            if (filter === "creators") {
              setFilter("business-owners");
            } else {
              setFilter("creators");
            }
          }}
        >
          Show for {filter} Only
        </Button>
      </div>

      <div className="gap-5 flex flex-col justify-start">
        {posts
          ?.filter((item) => {
            if (filterActive) {
              if (filter === "creators") return item.isCreator;
              else return !item.isCreator;
            } else return item;
          })
          .map((item) => (
            <PostCard key={item.id} post={item} autherMail={autherMail} />
          ))}
      </div>
    </>
  );
};
