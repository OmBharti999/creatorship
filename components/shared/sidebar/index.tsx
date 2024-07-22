"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IdeaForm } from "../form";
import { Apple } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="flex justify-center items-center gap-1 bg-red-600/25 hover:bg-red-600/50 "
        >
          <Apple size={16} />
          Add your offer
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Make a Post</SheetTitle>
          <SheetDescription>
            <span className="font-semibold">Check/Uncheck</span> is this for
            creators, add <span className="font-semibold">title</span> and{" "}
            <span className="font-semibold">description</span> to create an new
            offer here. Click{" "}
            <span className="font-semibold">Make it Live</span> when you&apos;re
            done.
          </SheetDescription>
        </SheetHeader>
        <hr className="mt-2 mb-6" />
        <IdeaForm closeSidebar={setOpen} />
      </SheetContent>
    </Sheet>
  );
}
