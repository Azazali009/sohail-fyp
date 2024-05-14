import React from "react";
import { playFairDisplay } from "../helpers/styleFont";
import Image from "next/image";
import Button from "./Button";

const Card = ({ authorName, authorImage, authorLocatin }) => {
  return (
    <div className=" border flex flex-col shadow-2xl py-10 bg-gray-200 rounded-lg gap-6 p-4">
      <div className=" flex items-center gap-2">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <Image src={authorImage} height={200} width={200} alt="author" />
            {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          </div>
        </div>
        <div>
          <h1 className={` font-semibold text-sky-500  capitalize text-xl`}>
            {authorName}
          </h1>
          <p className="uppercase text-xs">Location: {authorLocatin}</p>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, expedita.
      </p>

      <div className=" ">
        <Button>follow</Button>
      </div>
    </div>
  );
};

export default Card;
