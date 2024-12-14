"use client";
import React from "react";
import Footer from "../Home/Footer";
// import dynamic from "next/dynamic";
// const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
//   ssr: false,
// });
import banner1 from "@/public/tirtabanner.jpg";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import amb from "@/public/image12.jpg";
import need from "@/public/image13.jpg";
import etech from "@/public/image14.png";
import image15 from "@/public/image15.svg";
import image16 from "@/public/image16.svg";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { GiArchiveResearch, GiJoin } from "react-icons/gi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaServicestack } from "react-icons/fa";

const services = [
  {
    icon: <IoExtensionPuzzleOutline className="h-8 w-8" />,
    title: "Prehospital Care Excellence",
    description:
      "When emergencies strike, every second counts. Our network of highly trained medical professionals delivers advanced life support and emergency care directly at the scene. We maintain multiple tiers of ambulance service, strategically placed to minimize response times across our coverage areas.",
    image: amb,
    link: "/yegna-ambulance/detail",
    bulletPoints: [],
  },
  {
    icon: <HiOutlineStatusOnline className="h-8 w-8" />,
    title: "Powered by Innovation and Digital Integration",
    description:
      "Through our partnership with eTech, a leading technology company in Ethiopia, Yegna Ambulance Network utilizes cutting-edge digital solutions to enhance every aspect of our service. Our smart dispatch system provides real-time ambulance tracking and automated deployment of the nearest units, ensuring the fastest possible response times. Our 24/7 command center coordinates all emergency responses through an advanced communication platform. This central hub manages resources, tracks performance, and ensures optimal response to every emergency call.",
    image: need,
    link: "/yegna-ambulance/detail",
    bulletPoints: [],
  },
  {
    icon: <GiArchiveResearch className="h-8 w-8" />,
    title: "Quality Assurance",
    description:
      "We uphold the highest standards through regular staff training, provision of emergency kits, and continuous performance monitoring. Our teams regularly update their certifications to stay aligned with the latest emergency care protocols.",
    image: etech,
    link: "/yegna-ambulance/detail",
    bulletPoints: [],
  },
  {
    icon: <FaServicestack className="h-8 w-8" />,
    title: "Service Options",
    description:
      "Whether you require emergency or non-emergency medical transport, our services are available 24/7. We provide:",
    image: image15,
    link: "/yegna-ambulance/detail",
    bulletPoints: [
      { title: "Emergency medical response", description: "" },
      { title: "Inter-facility transfers", description: "" },
      { title: "Specialty care transport", description: "" },
      { title: "Mass gathering medical coverage", description: "" },
      { title: "Remote area services", description: "" },
    ],
  },
  {
    icon: <GiJoin className="h-8 w-8" />,
    title: "Join Our Network",
    description:
      "Yegna Ambulance Network welcomes partnerships with healthcare facilities, emergency service providers, and medical transport companies. Together, we're building Ethiopia's most reliable pre-hospital care system.Contact us to learn more about our services or to become part of our growing network of healthcare partners.",
    image: image16,
    link: "/yegna-ambulance/detail",
    bulletPoints: [],
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Yegna Ambulance Network" />
      <ServicesPage services={services} />
      {/* <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} /> */}
      <Footer />
    </div>
  );
}
