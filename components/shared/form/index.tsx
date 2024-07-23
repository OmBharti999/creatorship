"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addNewPost, updatePostWithId } from "@/actions/posts.actions";
import { toast } from "sonner";

import { useAppContext } from "@/context/sidebar.provider";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(120, {
    message: "Description must be at least 120 characters.",
  }),
  isCreator: z.boolean(),
});

export function IdeaForm() {
  const { state, setState } = useAppContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: state.postToUpdate?.title ?? "",
      description: state.postToUpdate?.description ?? "",
      isCreator: state.postToUpdate?.isCreator ?? false,
    },
  });

  async function createNewPost(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // async function createNewPost(formData: FormData) {
    console.log("values", values);
    const id = state.postToUpdate?.id;
    if (id) {
      const updatePost = await updatePostWithId(id, values);
      if (updatePost?.id) {
        toast.success("Offer has been updated.");
        setState({ postToUpdate: {}, isSidebarOpen: false });
      }
    } else {
      const postAdded = await addNewPost(values);

      if (postAdded?.status === "success") {
        toast.success("Offer has been created.");
        setState({ ...state, isSidebarOpen: false });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(createNewPost)} className="space-y-8">
        <FormField
          control={form.control}
          name="isCreator"
          render={({ field }) => (
            <FormItem className="flex justify-start gap-4 items-center">
              <FormLabel>Is this for Creators</FormLabel>
              <FormControl className="w-4 h-4 py-0 mt-0">
                {/* @ts-ignore */}
                <Input
                  type="checkbox"
                  {...field}
                  defaultChecked={state.postToUpdate?.isCreator}
                  style={{ marginTop: 0 }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>Write your Title here.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Description</FormLabel>
              <FormControl>
                <Textarea placeholder="your description" {...field} />
              </FormControl>
              <FormDescription>Write your description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Make it Live</Button>
      </form>
    </Form>
  );
}
