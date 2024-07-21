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

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
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
