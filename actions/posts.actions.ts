"use server";

import { prisma } from "@/prisma/prisma.config";
import { auth } from "@clerk/nextjs/server";
import { findUserWithClerkId } from "./users.actions";

export const addNewPost = async (formData: any) => {
  //   const isCreator = formData.get("isCreator");
  //   const description = formData.get("description");
  try {
    //   const title = formData.get("title");
    const { userId } = auth();
    if (!userId) {
      throw new Error("You must be signed in to add an post");
    }

    console.log("add item server action", formData);
    const { isCreator, description, title } = formData;
    console.log("from server action");
    console.log(isCreator, description, title, userId);
    const user = await findUserWithClerkId(userId);
    if (user) {
      const res = await prisma.post.create({
        data: { description, title, isCreator, authorId: user.id },
      });
      return { data: res, status: "success" };
    }
  } catch (error) {
    console.log("error while in addNewPost", error);
    return { error, status: "falied" };
  }
};
