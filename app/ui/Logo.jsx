import React from "react";
import { playFairDisplay } from "../helpers/styleFont";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={` ${playFairDisplay.className} btn btn-ghost text-xl`}
    >
      ARA
    </Link>
  );
};

export default Logo;
