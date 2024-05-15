import Image from "next/image";
import React from "react";

const Providers = () => {
  return (
    <div className=" my-28 border-b pb-16 border-gray-400 w-full">
      <h2 className=" text-center mb-8 font-semibold text-2xl capitalize text-stone-600">
        our providers
      </h2>
      <div className="flex  items-center mt-8 justify-between">
        <Image
          width={300}
          height={300}
          alt="providers"
          src={"/IEEE.webp"}
          className="w-36"
        />
        <Image
          width={300}
          height={300}
          alt="providers"
          src={"/Pensoft.webp"}
          className="w-36"
        />
        <Image
          width={300}
          height={300}
          alt="providers"
          src={"/IntechOpen.webp"}
          className="w-36"
        />
        <Image
          width={300}
          height={300}
          alt="providers"
          src={"/Willey.webp"}
          className="w-36"
        />
        <Image
          width={300}
          height={300}
          alt="providers"
          src={"/Bristol-University-Press.webp"}
          className="w-36"
        />
      </div>
    </div>
  );
};

export default Providers;
