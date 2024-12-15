"use client";
import React from "react";
// import ServicesPage from "./main";
// import ServicesBanner from "./servies-banner";
import Footer from "../Home/Footer";
// import dynamic from "next/dynamic";
// const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
//   ssr: false,
// });
import banner1 from "@/public/tirtabanner.jpg";

// import { Stethoscope, Book, Users, Notebook } from "lucide-react";
import { SiFuturelearn } from "react-icons/si";

import serv1 from "@/public/image4.jpg";
// import serv2 from "@/public/serv2.jpg";
import serv4 from "@/public/image5.jpg";
import serv3 from "@/public/image6.jpg";
import yegna from "@/public/image7.jpg";
import { RiCommunityFill } from "react-icons/ri";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { PiAmbulanceFill } from "react-icons/pi";
import { GiArchiveResearch } from "react-icons/gi";

const services = [
  {
    icon: <SiFuturelearn className="h-8 w-8" />,
    title: "Emergency Response Training",
    subtitle:
      "We deliver comprehensive first aid and emergency response trainings",
    description:
      "We deliver comprehensive first aid and emergency response trainings tailored for:",
    image: serv1,
    link: "/what-we-do/detail",
    bulletPoints: [
      {
        title: "First Responders",
        description:
          "Equipping lay persons and healthcare workers with protocols and life-saving techniques",
      },
      {
        title: "Organizations",
        description:
          "Custom-designed programs that transform workplaces into safety-conscious environments",
      },
      {
        title: "Healthcare Professionals",
        description:
          "CPD certification courses enhancing medical emergency capabilities",
      },
      {
        title: "Community Groups",
        description:
          "Essential emergency response skills adapted for local contexts",
      },
    ],
  },
  {
    icon: <PiAmbulanceFill className="h-8 w-8" />,
    title: "Yegna Ambulance Network",
    subtitle:
      "Innovation meets necessity in our groundbreaking Yegna Ambulance service. This pioneering program seamlessly integrates Ethiopia's ambulance resources into a coordinated emergency response network",
    description:
      "Innovation meets necessity in our groundbreaking Yegna Ambulance service. This pioneering program seamlessly integrates Ethiopia's ambulance resources into a coordinated emergency response network:",
    image: serv4,
    link: "/what-we-do/detail",
    bulletPoints: [
      {
        title: "Unified Command System",
        description:
          "Coordinating first and second-tier ambulances for optimal resource utilization",
      },
      {
        title: "Smart Dispatch",
        description:
          "Technology-driven allocation ensuring rapid response times",
      },
      {
        title: "Quality Standardization",
        description:
          "Implementing consistent service standards across all network participants",
      },
      {
        title: "Nationwide Accessibility",
        description:
          "Strategic coverage planning for both urban and rural areas",
      },
    ],
  },
  {
    icon: <GiArchiveResearch className="h-8 w-8" />,
    title: "Research and Consultancy",
    subtitle:
      "Our research and consultancy division drives innovation in Ethiopian emergency medical services",
    description:
      "Our research and consultancy division drives innovation in Ethiopian emergency medical services:",
    image: serv3,
    link: "/what-we-do/detail",
    bulletPoints: [
      {
        title: "Evidence-Based Research",
        description:
          "Conducting studies on emergency healthcare delivery in the Ethiopian context",
      },
      {
        title: "Policy Development",
        description:
          "Collaborating with stakeholders to shape effective emergency healthcare frameworks",
      },
      {
        title: "System Design",
        description:
          "Creating scalable emergency response models tailored to local resources and needs",
      },
      {
        title: "Impact Assessment",
        description:
          "Measuring and enhancing the effectiveness of emergency healthcare initiatives",
      },
    ],
  },
  {
    icon: <RiCommunityFill className="h-8 w-8" />,
    title: "Community Impact Initiative",
    subtitle: "We believe in building resilient communities ",
    description: "We believe in building resilient communities through:",
    image: yegna,
    link: "/what-we-do/detail",
    bulletPoints: [
      {
        title: "Public Health Education",
        description:
          "Comprehensive awareness programs on emergency preparedness",
      },
      {
        title: "Community Response Networks",
        description: "Establishing local emergency response capabilities",
      },
      {
        title: "Cultural Integration",
        description:
          "Ensuring emergency services respect and incorporate local practices",
      },
    ],
  },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="What We Do" />
      <ServicesPage services={services} />
      {/* <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} /> */}
      <Footer />
    </div>
  );
}
