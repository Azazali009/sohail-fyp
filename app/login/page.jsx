import Link from "next/link";
import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { useCreateUser } from "./useCreateUser";

const Login = () => {
  return (
    <div className=" flex pb-16 bg-gray-200 justify-center">
      <form className="mt-4 mx-3 grid w-full shadow-2xl bg-white grid-cols-1 gap-y-10 rounded-xl px-8 py-4 text-gray-500 shadow-shadowTwo dark:text-white dark:shadow-shadowOne sm:mx-0 sm:w-3/5">
        <h2 className=" mb-3 text-center text-lg font-semibold capitalize text-sky-500 dark:text-sky-300 sm:text-3xl">
          Login to your Account
        </h2>

        <div className="flex flex-col gap-2">
          <label>Your Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            className={`h-12 w-full rounded-lg border-gray-700 bg-gray-300 p-4 text-gray-500 shadow-shadowTwo outline-none outline-offset-2 focus-visible:border-b-transparent  dark:border-b-[1px] dark:bg-[#191b1e] dark:text-lightText dark:shadow-none sm:w-3/4`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Your Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            className={`h-12 w-full rounded-lg border-gray-700 bg-gray-300 p-4 text-gray-500 shadow-shadowTwo outline-none outline-offset-2 focus-visible:border-b-transparent dark:border-b-[1px] dark:bg-[#191b1e] dark:text-lightText dark:shadow-none sm:w-3/4`}
          />
        </div>

        <div>
          <button
            type="submit"
            className=" px-4 py-2 hover:bg-sky-600 duration-200 bg-sky-500 text-sky-100  rounded-md "
          >
            Login
          </button>
          <div className="divider">OR</div>
        </div>
        <p className="text-sm font-medium sm:text-base">
          Do not have an account?
          <Link
            href={"/signup"}
            className=" link ml-2 capitalize text-sky-500"
            to="/signup"
          >
            signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
