import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Post } from "@prisma/client";
import ShowHideCredential from "../showHideCredential";

interface PostWithEmail extends Post {
  author: { email: string };
}

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
      {/* <CardContent></CardContent> */}
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
        <ShowHideCredential contact={author?.email} postId={id} />
      </CardFooter>
    </Card>
  );
};
