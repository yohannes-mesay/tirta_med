"use client";
import React from "react";
import Footer from "../Home/Footer";
// import dynamic from "next/dynamic";
// const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
//   ssr: false,
// });
import banner1 from "@/public/tirtabanner.jpg";

import ServicesBanner from "../services/servies-banner";

import Community from "./community/page";
import Link from "next/link";
import RadioShow from "./radio-show/page";

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Get Help" />
      <Community />
      <div className="w-full p-4 bg-brand flex items-center text-white justify-center">
        <Link
          href="/get-help/respond-to-emergencies"
          className="bg-blue-400 p-2 px-6 rounded-md font-semibold sm:text-2xl "
        >
          How to Respond to Emergencies
        </Link>
      </div>
      <RadioShow />

      <div className="w-full  p-4 bg-brand flex items-center text-white justify-center">
        <Link
          href="/get-help/volunteer"
          className="bg-blue-400 p-2 px-6 rounded-md font-semibold sm:text-2xl "
        >
          Volunteer with us
        </Link>
      </div>

      {/* <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} /> */}
      <Footer />
    </div>
  );
}
