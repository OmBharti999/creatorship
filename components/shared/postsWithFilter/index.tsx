"use client";

import { PostWithEmailArray } from "@/types";
import { PostCard } from "../post";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

type filterType = "creators" | "business-owners";

export const PostsWithFilter = ({ posts }: PostWithEmailArray) => {
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
          className="w-9"
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
            <PostCard key={item.id} post={item} />
          ))}
      </div>
    </>
  );
};
