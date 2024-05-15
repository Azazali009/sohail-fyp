"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import FormRow from "../ui/Formrow";
import { useLogin } from "./useLogin";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isPending } = useLogin();

  const navigate = useRouter();

  function onSubmit(data) {
    login(
      { ...data },
      {
        onSuccess: () => {
          navigate.push("/");
          alert("Login successfully");
        },
      }
    );
  }
  return (
    <div className=" flex pb-16 bg-gray-200 justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 mx-3 grid w-full shadow-2xl bg-white grid-cols-1 gap-y-10 rounded-xl px-8 py-4 text-gray-500 shadow-shadowTwo dark:text-white dark:shadow-shadowOne sm:mx-0 sm:w-3/5"
      >
        <h2 className=" mb-3 text-center text-lg font-semibold capitalize text-sky-500 dark:text-sky-300 sm:text-3xl">
          Login to your Account
        </h2>

        <FormRow lable={"Your Email:"} error={errors?.email?.message}>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            className={`h-12 w-full rounded-lg border-gray-700 bg-gray-100 p-4 text-gray-500 shadow-shadowTwo outline-none outline-offset-2 focus-visible:border-b-transparent  dark:border-b-[1px] dark:bg-[#191b1e] dark:text-lightText dark:shadow-none sm:w-3/4`}
            {...register("email", {
              required: "Field are required",
            })}
          />
        </FormRow>
        <FormRow lable={"Your password:"} error={errors?.password?.message}>
          <input
            type="password"
            placeholder="******"
            className={`h-12 w-full rounded-lg border-gray-700 bg-gray-100 p-4 text-gray-500 shadow-shadowTwo outline-none outline-offset-2 focus-visible:border-b-transparent  dark:border-b-[1px] dark:bg-[#191b1e] dark:text-lightText dark:shadow-none sm:w-3/4`}
            {...register("password", {
              required: "Field are required",
            })}
          />
        </FormRow>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className=" px-4 disabled:opacity-60 disabled:cursor-not-allowed py-2 hover:bg-sky-600 duration-200 bg-sky-500 text-sky-100  rounded-md "
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
