import Navbar from "@/components/shared/navbar";
import { Sidebar } from "@/components/shared/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-col items-center space-y-12 p-24">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-xl">Have a new Idea, create an offer</h2>
          <Sidebar />
        </div>
        <div className="gap-5 flex ">
          {/* <Button asChild>
            <Link href={`/creator`}>Creator</Link>
          </Button>
          <Button>
            <Link href={`/business-owner`}>Business Owner</Link>
          </Button> */}
        </div>
      </main>
    </>
  );
}
