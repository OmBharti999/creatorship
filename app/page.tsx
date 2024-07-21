import { Sidebar } from "@/components/shared/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-12 p-24">
      <h2 className="text-4xl">Select Your Role</h2>
      <Sidebar />
      <div className="gap-5 flex ">
        <Button asChild>
          <Link href={`/creator`}>Creator</Link>
        </Button>
        <Button>
          <Link href={`/business-owner`}>Business Owner</Link>
        </Button>
      </div>
    </main>
  );
}
