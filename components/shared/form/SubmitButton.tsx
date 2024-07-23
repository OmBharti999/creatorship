"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ id }: { id: undefined | string }) => {
  const { pending } = useFormStatus();
//   console.log("pending", pending);
  const submitButtonText = id ? "Update Offer" : "Make it Live";
  return (
    <Button
      type="submit"
      disabled={pending}
      className={
        id
          ? "bg-green-500 hover:bg-green-700 "
          : "bg-cyan-500 hover:bg-cyan-700"
      }
    >
      {pending ? "please wait" : submitButtonText}
    </Button>
  );
};
