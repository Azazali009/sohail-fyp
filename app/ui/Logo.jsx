import React from "react";
import { playFairDisplay } from "../helpers/styleFont";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className={` ${playFairDisplay.className} `}>
      <Image
        width={200}
        height={200}
        alt="logo"
        src={"/sohail-logo.png"}
        className=" w-28"
      />
    </Link>
  );
};

export default Logo;
