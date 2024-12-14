"use client";

import React from "react";
import Slider from "./Slider";
import Link from "next/link";
function Hero() {
  return (
    <div className="relative  right-0 flex flex-col">
      <Slider />
      <div className="flex sm:hidden flex-col px-6 text-center w-full relative -top-1 bg-white rounded-xl text-startleft-5  md:left-20 gap-2 bottom-[10%]">
        <div className=" top-0 pt-serif-bold tracking-wider text-second   max-sm:text-2xl relative font-semibold ">
          Community-Focused Healthcare Solutions
        </div>
        <div className="slide-in-left  text-black sm:text-lg text-xs md:text-xl relative  sm:max-w-[28rem] slide-in-bottom ">
          TirtaMed, where our name embodies the essence of pulsatility!
        </div>
        <div className="slide-in-right self-center flex gap-9">
          <Link
            href="/about"
            className="bg-brand rounded-3xl px-5 max-sm:px-3 max-sm:text-lg max-sm:py-0.5 py-2"
          >
            Read More
          </Link>
          {/* <Link
            href="/contact"
            className="bg-brand rounded-3xl px-5 max-sm:px-3 max-sm:text-xs max-sm:py-0.5 py-2"
          >
            Contact Us
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
