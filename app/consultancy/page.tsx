"use client";
import React from "react";
import Footer from "../Home/Footer";
// import dynamic from "next/dynamic";
// const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
//   ssr: false,
// });
import banner1 from "@/public/tirtabanner.jpg";
import res from "@/public/image6.jpg";
import need from "@/public/need.jpg";
import online from "@/public/online.jpg";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { MdFoundation } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoHelpBuoy } from "react-icons/io5";
const services = [
  {
    icon: <FaPeopleGroup className="h-8 w-8" />,
    title: "About our research and consultancy services",
    description:
      "At TirtaMed, we provide cutting-edge research and consultancy services tailored to advance emergency and prehospital care systems. Our team of experts delivers evidence-based solutions, leveraging the latest innovations and global best practices.",
    image: res,
    link: "/consultancy/detail",
    bulletPoints: [],
  },
  {
    icon: <MdFoundation className="h-8 w-8" />,
    title: "Founding members research publications",
    description:
      "Our founding members have contributed extensively to advancing emergency and critical care through impactful research. Below is a curated selection of their publications, showcasing innovative approaches, evidence-based practices, and solutions tailored to the unique challenges of healthcare delivery in Ethiopia and East Africa.",
    image: need,
    link: "/consultancy/detail",
    bulletPoints: [
      {
        title: "Publication 1",
        description: (
          <>
            <strong>Debebe</strong>, <strong>Finot</strong>, Goffi, Alberto,
            Haile, Tewodros, Alferid, Fetiya, Estifanos, Haimanot, Adhikari,
            Neill K. J., Predictors of ICU Mortality among Mechanically
            Ventilated Patients: An Inception Cohort Study from a Tertiary Care
            Center in Addis Ababa, Ethiopia, Critical Care Research and
            Practice, 2022, 7797328, 6 pages, 2022.
          </>
        ),
      },
      {
        title: "Publication 2",
        description: (
          <>
            Seid M, Azazh A, Enquselassie F,<strong>Yisma E.</strong> Injury
            characteristics and outcome of road traffic accident among victims
            at Adult Emergency Department of Tikur Anbessa specialized hospital,
            Addis Ababa, Ethiopia: a prospective hospital-based study. BMC Emerg
            Med 2015; 15(10).
          </>
        ),
      },
    ],
  },
  {
    icon: <IoHelpBuoy className="h-8 w-8" />,
    title: "Online Resources ",
    description:
      "Discover a collection of online resources designed to support healthcare professionals, researchers, and policymakers. From clinical guidelines and training modules to insights from the latest studies, our resources are a gateway to empowering individuals and organisations to transform emergency medical services. At TirtaMed, we are dedicated to fostering knowledge sharing and collaboration for a healthier future.",
    image: online,
    link: "/consultancy/detail",
    bulletPoints: [],
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Reasearch & Consultancy" />
      <ServicesPage services={services} />
      {/* <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} /> */}
      <Footer />
    </div>
  );
}
