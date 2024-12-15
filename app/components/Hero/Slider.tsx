"use client";
import React from "react";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import banner1 from "@/public/image1.jpg";
import Link from "next/link";

function Slider() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      style={{
        textAlign: "center",
        display: "flex",
        border: "none",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: isSmallScreen ? "cover" : "fit",
        backgroundImage: `url(${banner1.src})`,
        color: "white",
        height: isSmallScreen ? "50vh" : isMedium ? "65vh" : "110vh",
        width: "100%",
        objectFit: "contain",
        padding: isSmallScreen ? "10px" : "20px",
      }}
    >
      <div className="absolute max-sm:hidden flex flex-col p-2 rounded-xl text-start   left-5 max-sm:w-3/4 md:left-20 gap-5  ">
        <div className=" top-0 font-extrabold tracking-wider text-white  text-5xl max-sm:text-2xl sm:max-w-[35rem]  relative">
          Community-Focused Healthcare Solutions
        </div>
        <div className="slide-in-left  text-white text-md sm:text-lg text-xs md:text-xl relative text-bold sm:max-w-[28rem] slide-in-bottom ">
          TirtaMed, where our name embodies the essence of pulsatility!
        </div>
        <div className="slide-in-right flex gap-9">
          <Link
            href="/about"
            className="bg-brand rounded-3xl px-5 max-sm:px-3 max-sm:text-xs max-sm:py-0.5 py-2"
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
    </Paper>
  );
}

export default Slider;
