import Image from "next/image";
import React from "react";

const Logo = ({ size = 35 }: { size?: number }) => {
  return (
    <div>
      <Image
        src="/creatorship_logo.jpg"
        alt="logo"
        width={size}
        height={size}
      />
    </div>
  );
};

export const LogoWithName = ({ size = 35 }: { size?: number }) => {
  return (
    <div className="flex gap-3 items-center font-bold">
      <Logo size={size} /> Creatorship.io
    </div>
  );
};

export default Logo;
