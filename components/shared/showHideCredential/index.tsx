"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const body = "I am interested in your idea.";

const ShowHideCredential = ({
  contact,
  postId,
}: {
  contact: string;
  postId: string;
}) => {
  const [showCrentials, setShowCredentails] = useState(false);
  return (
    <div className=" flex gap-5 items-center ">
      <Button
        onClick={() => {
          setShowCredentails(!showCrentials);
        }}
        className="max-sm:text-xs"
      >
        {" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Mail />
            </TooltipTrigger>
            <TooltipContent>
              <p> {showCrentials ? contact : "Show Author Mail Id"}</p>
            </TooltipContent>{" "}
          </Tooltip>
        </TooltipProvider>
        <span className="max-md:hidden ml-2">
          {showCrentials ? contact : "Show Author Mail Id"}
        </span>
      </Button>
      {showCrentials && (
        <Button asChild className="bg-blue-500 hover:bg-blue-600">
          <Link
            href={`mailto:${contact}mailto:${contact}?subject=${encodeURIComponent(
              "Regarding Your Post Id " + postId
            )}&body=${encodeURIComponent(body)}`}
            className="max-sm:text-xs"
          >
            {" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Send />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send a Mail</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="max-md:hidden ml-2">Send a Mail</span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ShowHideCredential;
