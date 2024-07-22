import { SignedIn, UserButton } from "@clerk/nextjs";
import { Factory } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-10 bg-black w-full flex items-center px-6">
      <h3 className="flex gap-3 text-white">
        <Factory size={20} />
        Creatorship.io
      </h3>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
