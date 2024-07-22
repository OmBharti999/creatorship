"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const ShowHideCredential = ({
  contact,
  postId,
}: {
  contact: string;
  postId: string;
}) => {
  const [showCrentials, setShowCredentails] = useState(false);
  return (
    <div className=" flex gap-5 items-center">
      <Button
        onClick={() => {
          setShowCredentails(!showCrentials);
        }}
      >
        {showCrentials ? contact : "Show Author Mail Id"}
      </Button>
      {showCrentials && (
        <Button asChild className="bg-blue-500 hover:bg-blue-600">
          <Link
            href={`mailto:${contact}mailto:${contact}?subject=${encodeURIComponent(
              "Regarding Your Post Id " + postId
            )}`}
          >
            Send a Mail
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ShowHideCredential;
