import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="navbar sticky top-0 z-50 bg-primary shadow-lg text-white">
      <div className="flex-1">
        <Logo />
        <Navbar />
      </div>
      <div className="flex gap-2">
        <Link href={"signup"} className="btn uppercase text-sky-500 bg-white">
          sign up
        </Link>
        <Link href={"/login"} className="btn bg-white text-sky-500 uppercase">
          login
        </Link>
      </div>
    </header>
  );
};

export default Header;
