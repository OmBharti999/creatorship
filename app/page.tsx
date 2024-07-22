import { getAllPostsWithUserEmail } from "@/actions/posts.actions";
import Navbar from "@/components/shared/navbar";
import { PostCard } from "@/components/shared/post";
import { PostsWithFilter } from "@/components/shared/postsWithFilter";
import { Sidebar } from "@/components/shared/sidebar";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const posts = await getAllPostsWithUserEmail();
  console.log("posts", posts);
  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-col items-center space-y-12 p-24">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-xl">Have a new Idea, create an offer</h2>
          <Sidebar />
        </div>
        <Separator />
        <PostsWithFilter posts={posts} />
      </main>
    </>
  );
}
