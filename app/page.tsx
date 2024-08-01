import { getAllPostsWithUserEmail } from "@/actions/posts.actions";
import { HomeDisplay } from "@/components/HomeDisplay";
import Navbar from "@/components/shared/navbar";
import { PostsWithFilter } from "@/components/shared/postsWithFilter";
import { Sidebar } from "@/components/shared/sidebar";
import { Separator } from "@/components/ui/separator";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function HomeComponent() {
  const posts = await getAllPostsWithUserEmail();

  const user = await currentUser();
  // email
  const currentUserEmailID = user?.emailAddresses[0]?.emailAddress;
  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-col items-center space-y-12 p-10 lg:p-24 w-full">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-xl max-sm:text-base max-lg:text-lg font-semibold text-blue-900">
            Have a new Idea, create an offer
          </h2>
          <Sidebar />
        </div>
        <Separator />
        <PostsWithFilter posts={posts} autherMail={currentUserEmailID} />
      </main>
    </>
  );
}

export default async function Home() {
  return (
    <>
      <SignedOut>
        <HomeDisplay />
      </SignedOut>
      <SignedIn>
        <HomeComponent />
      </SignedIn>
    </>
  );
}
