import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShowHideCredential from "../showHideCredential";
import { Button } from "@/components/ui/button";

import type { PostWithEmail } from "@/types";
import { deletePostWithId } from "@/actions/posts.actions";
import { toast } from "sonner";

export const PostCard = ({
  post: { author, description, id, isCreator, title },
  autherMail,
}: {
  post: PostWithEmail;
  autherMail: string | null | undefined;
}) => {
  const deletePost = async () => {
    const deletePost = await deletePostWithId(id);
    if (deletePost?.id) {
      toast.error("Offer has been deleted");
    }
  };
  return (
    <Card className="w-full 2xl:max-w-[60vw]">
      <CardHeader>
        <h6 className="text-red-500 font-semibold">
          {isCreator ? "Need Creator" : "Let's become partners"}
        </h6>
        <CardTitle className="text-blue-400">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <ShowHideCredential contact={author?.email} postId={id} />
        {Boolean(autherMail && autherMail === author?.email) && (
          <Button onClick={deletePost} className="bg-red-500 hover:bg-red-700">
            Delete
          </Button>
        )}
        {/* {autherMail === author?.email && <Button>Update</Button>} */}
      </CardFooter>
    </Card>
  );
};
