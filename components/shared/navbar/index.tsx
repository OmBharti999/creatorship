import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Factory } from "lucide-react";
import React from "react";
import { LogoWithName } from "../Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className="h-10 bg-black w-full flex items-center justify-between px-6 lg:px-10">
      {/* className="flex gap-3 text-xl font-bold items-center justify-between" */}
      <LogoWithName className={className} />
      <SignedOut>
        <div className="space-x-4">
          <Button
            asChild
            className="bg-violet-700 hover:bg-violet-800 hover:text-violet-100 transition-all font-bold"
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button
            asChild
            className="bg-white text-violet-800 hover:bg-violet-100 hover:text-violet-900 transition-all font-bold max-[450px]:hidden"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

// const Navbar = () => {
//   return (
//     <header className="h-10 bg-black w-full flex items-center justify-between px-6 lg:px-10">
//       <LogoWithName className="text-white" />
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
//   );
// };

export default Navbar;
