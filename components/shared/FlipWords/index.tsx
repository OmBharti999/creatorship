import React from "react";
import { FlipWords } from "../../ui/flip-words";

export function FlipWordsComponent() {
  const heroWords = ["Build", "Contribute", "Evolving"];
  const heroWordsAfter = ["for", "in", "to"];

  return (
    <div className="h-[40rem] flex justify-center items-center">
      <div className="text-4xl xl:text-7xl mx-auto font-bold">
        <FlipWords words={heroWords} /> <FlipWords words={heroWordsAfter} />{" "}
        <br />
        <p className="text-lg xl:text-2xl xl:mt-3 ml-3 mt-1 font-normal">
          Shaping the merchant and creators experience for the first time <br />{" "}
          as a core product, the admin.
        </p>
      </div>
    </div>
  );
}
