"use client";
import React from "react";
import Footer from "../Home/Footer";
// import dynamic from "next/dynamic";
// const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
//   ssr: false,
// });
import banner1 from "@/public/tirtabanner.jpg";
import training1 from "@/public/image8.jpg";
import training3 from "@/public/training3.jpg";
import training4 from "@/public/image10.jpg";
import training6 from "@/public/image9.jpg";
import training8 from "@/public/image11.jpg";
// import training7 from "@/public/tr1.jpg";
// import training8 from "@/public/tr2.jpg";
// import yegna from "@/public/yegna.jpg";
import { RiCommunityFill } from "react-icons/ri";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { GiArchiveResearch } from "react-icons/gi";
import { MdComputer, MdModelTraining } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { MdOutlineModelTraining } from "react-icons/md";

const services = [
  {
    icon: <MdModelTraining className="h-8 w-8" />,
    title: "About Our Trainings",
    description:
      "Our first aid training programs are designed to meet diverse learning needs while maintaining the highest standards of medical education. Each program is carefully structured to provide both theoretical knowledge and hands-on practical experience, delivered by certified instructors with extensive field experience. Whether you're a healthcare professional, first responder, or community member, our courses equip you with the skills and confidence to handle emergency situations effectively.",
    image: training3,
    link: "/training&certification/detail",
    bulletPoints: [],
  },
  {
    icon: <MdComputer className="h-8 w-8" />,
    title: "Online Trainings",
    description:
      "Latest medical science courses delivered through our interactive digital learning platform.",
    image: training3,
    link: "/training&certification/detail",
    bulletPoints: [
      { title: "Interactive digital learning platform", description: "" },
      { title: "Self-paced modules with multimedia content", description: "" },
      { title: "Virtual simulations of emergency scenarios", description: "" },
      { title: "Real-time assessments and feedback", description: "" },
      {
        title: "Access to digital resources and reference materials",
        description: "",
      },
      { title: "Flexibility to learn anytime, anywhere", description: "" },
      { title: "Regular online instructor support", description: "" },
      { title: "Automated certification upon completion", description: "" },
    ],
  },
  // {
  //   icon: <BiSolidMessageDetail className="h-8 w-8" />,
  //   title: "Why Choose TirtaMed's Training?",
  //   description:
  //     "TirtaMed offers accredited CPD courses with hands-on clinical training and recognized certification.",
  //   image: training7,
  //   link: "/training&certification/detail",
  //   bulletPoints: [
  //     {
  //       title:
  //         "Internationally aligned curriculum adapted to Ethiopian context",
  //       description: "",
  //     },
  //     {
  //       title: "Training materials available in the local language",
  //       description: "",
  //     },
  //     {
  //       title:
  //         "Experienced instructors with practical emergency response background",
  //       description: "",
  //     },
  //     { title: "Diverse learning methodologies", description: "" },
  //     {
  //       title: "Flexible learning options to suit your schedule",
  //       description: "",
  //     },
  //     {
  //       title: "Regular updates incorporating latest medical guidelines",
  //       description: "",
  //     },
  //     { title: "Post-training support and resources", description: "" },
  //     {
  //       title: "Network of certified first aid professionals",
  //       description: "",
  //     },
  //     {
  //       title: "Recognized certification for professional development",
  //       description: "",
  //     },
  //   ],
  // },

  {
    icon: <RiCommunityFill className="h-8 w-8" />,
    title: "Face-to-Face Training (Classroom)",
    description:
      "Intensive hands-on practical sessions with direct interaction with expert instructors.",
    image: training1,
    link: "/training&certification/detail",
    bulletPoints: [
      { title: "Intensive hands-on practical sessions", description: "" },
      { title: "Direct interaction with expert instructors", description: "" },
      { title: "Real-time demonstration of techniques", description: "" },
      { title: "Immediate feedback and correction", description: "" },
      { title: "Group exercises and scenario-based learning", description: "" },
      {
        title: "Networking opportunities with fellow participants",
        description: "",
      },
      { title: "State-of-the-art training facilities", description: "" },
    ],
  },
  {
    icon: <GiArchiveResearch className="h-8 w-8" />,
    title: "Hybrid Training",
    description:
      "Combines the best of online and classroom learning for comprehensive skill development.",
    image: training6,
    link: "/training&certification/detail",
    bulletPoints: [
      {
        title: "Combines the best of online and classroom learning",
        description: "",
      },
      { title: "Theory modules completed online", description: "" },
      { title: "Practical skills perfected in person", description: "" },
      { title: "Flexible scheduling options", description: "" },
      {
        title: "Enhanced learning retention through mixed methods",
        description: "",
      },
      {
        title:
          "Comprehensive assessment of both theoretical and practical skills",
        description: "",
      },
      { title: "Cost-effective training solution", description: "" },
    ],
  },
  {
    icon: <MdOutlineModelTraining className="h-8 w-8" />,
    title: "Refresher Training",
    description:
      "Regular updates on latest first aid protocols and skill reinforcement.",
    image: training4,
    link: "/training&certification/detail",
    bulletPoints: [
      {
        title: "Regular updates on latest first aid protocols",
        description: "",
      },
      { title: "Skill reinforcement and practice", description: "" },
      { title: "Review of emergency response techniques", description: "" },
      { title: "Discussion of real-world scenarios", description: "" },
      { title: "Certificate renewal opportunities", description: "" },
      { title: "Continuous professional development", description: "" },
      { title: "Maintenance of certification standards", description: "" },
    ],
  },
  {
    icon: <FaCertificate className="h-8 w-8" />,
    title: "Certification Process",
    description:
      "Comprehensive theoretical assessment and practical skills evaluation for recognized certification.",
    image: training8,
    link: "/training&certification/detail",
    bulletPoints: [
      { title: "Comprehensive theoretical assessment", description: "" },
      { title: "Practical skills evaluation", description: "" },
      { title: "Scenario-based testing", description: "" },
      { title: "Documentation of completed training hours", description: "" },
      { title: "Official certification with validity period", description: "" },
      {
        title: "Registration in TirtaMed's certified first aiders database",
        description: "",
      },
    ],
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Training & Certification" />
      <ServicesPage services={services} />
      {/* <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} /> */}
      <Footer />
    </div>
  );
}
