import Image from "next/image";
import React from "react";
// import { formateCurrency } from "@/app/helpers/formateCurrency";

const Banner = ({ src, title }) => {
  return (
    <div className=" relative overflow-hidden h-full">
      <Image
        width={500}
        height={500}
        className=" h-[450px] w-full object-cover rounded-lg"
        src={src}
        alt="Product photo!"
      />
    </div>
  );
};

export default Banner;
