"use client";
import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ShowHideCredential from "../showHideCredential";
import { Button } from "@/components/ui/button";

import type { PostWithEmail } from "@/types";
import { deletePostWithId } from "@/actions/posts.actions";
import { toast } from "sonner";
import { useAppContext } from "@/context/sidebar.provider";
import { Edit, Trash2 } from "lucide-react";

export const PostCard = ({
  post: { author, description, id, isCreator, title },
  autherMail,
}: {
  post: PostWithEmail;
  autherMail: string | null | undefined;
}) => {
  const { state, setState } = useAppContext();
  const deletePost = async () => {
    const deletePost = await deletePostWithId(id);
    if (deletePost?.id) {
      toast.error("Offer has been deleted");
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <Card className="w-full 2xl:max-w-[60vw] max-lg:max-w-sm max-sm:max-w-[320px]">
          <CardHeader>
            <h6 className="text-red-500 font-semibold max-sm:text-sm">
              {isCreator ? "Need Creator" : "Let's become partners"}
            </h6>
            <CardTitle className="text-blue-400 max-sm:text-base">
              {title}
            </CardTitle>
            <CardDescription className="max-sm:text-xs">
              {description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <ShowHideCredential contact={author?.email} postId={id} />
            <div className="flex gap-5 max-sm:gap-1">
              {Boolean(autherMail && autherMail === author?.email) && (
                <Button
                  onClick={deletePost}
                  className="bg-red-500 hover:bg-red-700 max-sm:text-xs"
                >
                  <TooltipTrigger>
                    <Trash2 />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete</p>
                  </TooltipContent>
                </Button>
              )}
              {autherMail === author?.email && (
                <Button
                  onClick={() => {
                    setState({
                      isSidebarOpen: true,
                      postToUpdate: {
                        author,
                        description,
                        id,
                        isCreator,
                        title,
                      },
                    });
                  }}
                  className="bg-blue-500 hover:bg-blue-700 max-sm:text-xs"
                >
                  <TooltipTrigger>
                    <Edit />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Update</p>
                  </TooltipContent>

                  <span className="max-md:hidden">Update</span>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </Tooltip>
    </TooltipProvider>
  );
};
