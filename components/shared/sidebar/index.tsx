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

export function Sidebar() {
  return (
    <Sheet>
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
            Add title and description to your here. Click save when you&apos;re
            done.
          </SheetDescription>
        </SheetHeader>
        <hr className="mt-2 mb-6" />
        <IdeaForm />
      </SheetContent>
    </Sheet>
  );
}
