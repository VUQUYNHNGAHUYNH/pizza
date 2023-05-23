"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-orange-600 bg-pattern lg:min-h-[768px] pt-32 lg:pt-0">
      <div
        className="container mx-auto min-h-[768px] flex flex-col lg:flex-row items-center
       text-center lg:text-left lg:gap-10 gap-8 "
      >
        <div className="text-6xl lg:text-7xl font-bangers text-white">
          Best Pizza In The World
        </div>
        <div className="relative">
          <Image
            src={"/pizza-banner.png"}
            width={530}
            height={538}
            alt="banner"
          />
          <Image
            src={"/chilli-1.png"}
            width={160}
            height={84}
            alt="chilli"
            className="absolute top-8 left-4"
          />
          <Image
            src={"/leaves.png"}
            width={160}
            height={84}
            alt="chilli"
            className="absolute bottom-8 lg:-left-12 left-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
