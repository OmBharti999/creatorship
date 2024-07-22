"use server";

import { prisma } from "@/prisma/prisma.config";
import { UserJSON } from "@clerk/nextjs/server";

export const createNewUser = async (userWebhookParams: UserJSON) => {
  try {
    const {
      first_name,
      last_name: lastname,
      id,
      email_addresses,
    } = Object(userWebhookParams);
    const user = await prisma.user.create({
      data: {
        email: email_addresses[0]?.email_address || "",
        firstname: first_name || "",
        clerk_id: id,
        lastname,
      },
    });
    return user;
  } catch (error) {
    console.log("error while creating user", error);
  }
};
