import { SignedIn, UserButton } from "@clerk/nextjs";
import { Factory } from "lucide-react";
import React from "react";
import { LogoWithName } from "../Logo";

const Navbar = () => {
  return (
    <header className="h-10 bg-black w-full flex items-center justify-between px-6 lg:px-10">
      <LogoWithName className="text-white" />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
