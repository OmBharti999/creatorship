import { getAllPostsWithUserEmail } from "@/actions/posts.actions";
import Navbar from "@/components/shared/navbar";
import { PostsWithFilter } from "@/components/shared/postsWithFilter";
import { Sidebar } from "@/components/shared/sidebar";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const posts = await getAllPostsWithUserEmail();

  const user = await currentUser();
  // email
  const currentUserEmailID = user?.emailAddresses[0]?.emailAddress;
  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-col items-center space-y-12 p-24">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-xl">Have a new Idea, create an offer</h2>
          <Sidebar />
        </div>
        <Separator />
        <PostsWithFilter posts={posts} autherMail={currentUserEmailID} />
      </main>
    </>
  );
}
