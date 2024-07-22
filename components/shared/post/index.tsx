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

export const PostCard = ({
  post: { authorId, description, id, isCreator, title },
}: {
  post: Post;
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <h6 className="text-red-500 font-semibold">
          {isCreator ? "Need Creator" : "Let's have become partners"}
        </h6>
        <CardTitle className="text-blue-400">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent></CardContent> */}
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  );
};
