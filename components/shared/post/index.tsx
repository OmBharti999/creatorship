import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShowHideCredential from "../showHideCredential";

import type { PostWithEmail } from "@/types";

export const PostCard = ({
  post: { author, description, id, isCreator, title },
}: {
  post: PostWithEmail;
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <h6 className="text-red-500 font-semibold">
          {isCreator ? "Need Creator" : "Let's become partners"}
        </h6>
        <CardTitle className="text-blue-400">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <ShowHideCredential contact={author?.email} postId={id} />
      </CardFooter>
    </Card>
  );
};
