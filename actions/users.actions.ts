"use server";

import { prisma } from "@/prisma/prisma.config";
import { UserJSON } from "@clerk/nextjs/server";

export const createNewUser = async (userWebhookParams: UserJSON) => {
  try {
    const {
      firstName,
      lastName: lastname,
      id,
      primaryEmailAddress,
    } = Object(userWebhookParams);
    const user = await prisma.user.create({
      data: {
        email: primaryEmailAddress?.emailAddress || "",
        firstname: firstName || "",
        clerk_id: id,
        lastname,
      },
    });
    return user;
  } catch (error) {
    console.log("error while creating user", error);
  }
};
