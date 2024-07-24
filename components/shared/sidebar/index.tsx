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
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/sidebar.provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Sidebar() {
  const { state, setState } = useAppContext();

  return (
    <Sheet
      open={state.isSidebarOpen}
      onOpenChange={() =>
        setState((p: any) => ({
          isSidebarOpen: !p.isSidebarOpen,
          postToUpdate: {},
        }))
      }
    >
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="flex justify-center items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold "
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Plus size={16} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Create Offer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span className="max-lg:hidden">Create offer</span>
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
        <IdeaForm />
      </SheetContent>
    </Sheet>
  );
}
