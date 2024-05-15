import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "./Logo";
import AuthNavbar from "../components/Navbar/AuthNavbar";

const Header = () => {
  return (
    <header className="navbar bg-white sticky top-0 z-50 shadow-lg text-primary">
      <div className="flex-1">
        <Logo />
        <Navbar />
      </div>
      <AuthNavbar />
    </header>
  );
};

export default Header;
