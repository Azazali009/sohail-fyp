import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-none">
      <ul className="menu menu-horizontal font-semibold px-1">
        <li className=" capitalize">
          <Link href={"/"}>home</Link>
        </li>
        <li className=" capitalize">
          <Link href={"/"}>contact</Link>
        </li>
        <li className=" capitalize">
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <details>
            <summary>browse</summary>
            <ul className="p-2 bg-gray-700 text-white rounded-t-none">
              <li className=" capitalize">
                <Link href={""}>books</Link>
              </li>
              <li className=" capitalize">
                <Link href={""}>authors</Link>
              </li>
              <li className=" capitalize">
                <Link href={"recent published"}>books</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
