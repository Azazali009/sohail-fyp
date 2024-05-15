"use client";
import Link from "next/link";
import React from "react";
import { useCurrentUser } from "../auth/useCurrentUser";
import { useLogout } from "../auth/useLogout";

const AuthNavbar = () => {
  const { isAuthenticated, isLoadingUser } = useCurrentUser();
  const { logout, isLogOuting } = useLogout();

  if (isLoadingUser)
    return (
      <div className=" flex gap-2">
        <div className="w-24 h-12 bg-gray-100 animate-pulse rounded-md"></div>
        <div className="w-24 h-12 bg-gray-100 animate-pulse rounded-md"></div>
      </div>
    );
  return (
    <div className="flex gap-2">
      {isAuthenticated ? (
        <button
          onClick={logout}
          disabled={isLogOuting}
          className="bg-red-600 active:scale-90 text-red-100 px-4 py-2 rounded-md capitalize font-semibold disabled:bg-opacity-60 tracking-wide hover:opacity-80 duration-300"
        >
          logout
        </button>
      ) : (
        <>
          <Link href={"signup"} className="btn uppercase text-sky-500 bg-white">
            sign up
          </Link>
          <Link href={"/login"} className="btn bg-white text-sky-500 uppercase">
            login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthNavbar;
