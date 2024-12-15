import React from "react";
// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import partners from "@/public/partners.jpg";
import pone from "@/public/pone.jpg";
import ptwo from "@/public/ptwo.jpg";
import pt from "@/public/pthree.png";
// import pf from "@/public/pfour.jpg";
import pfive from "@/public/etechn.jpg";
import psix from "@/public/psi.jpg";
import pseven from "@/public/nado.jpg";
import Image from "next/image";
import Link from "next/link";
const partnerLogos = [
  { image: ptwo, name: "", link: "https://www.msichoices.org/" },
  { image: pone, name: "", link: "https://safaricom.et/" },
  { image: pt, name: "", link: "https://www.huawei.com/en/" },
  { image: pfive, name: "", link: "https://etechsc.com/" },
  { image: pseven, name: "", link: "https://nadorawellness.com/" },
  { image: psix, name: "", link: "https://www.psi.org" },
];

// Custom Next Arrow
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#00d6c0",
        borderRadius: "50%",
        right: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#00d6c0",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mb-12 max-sm: top-12 relative">
      {/* Background Image */}
      {/* <Image
        src={partners}
        alt="Partners Background"
        className="absolute inset-0 z-[-1] h- w-full object-cover"
      /> */}

      <div className="w-full text-center pt-2">
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-gray-900">
            Our partners and clients
          </h2>
          <div className="flex justify-center"></div>
          {/* <p className="max-w-2xl mx-auto text-gray-600 py-3">
            We are proud to collaborate with industry-leading partners who share
            our commitment to excellence and innovation in the medical field.
          </p> */}
        </div>{" "}
      </div>

      <Slider
        {...settings}
        className="mx-auto bg-white/80 p-8 py-0   rounded-md w-4/5"
      >
        {partnerLogos.map((partner, index) => (
          <div key={index} className="p-4">
            <Link
              href={partner.link}
              className="p-4 rounded-lg py-0 outline-none flex flex-col items-center"
            >
              {partner.image.src === psix.src ? (
                <Image
                  src={partner.image}
                  alt={partner.name}
                  className="h-32 w-32 mt-8 outline-none rounded-md mb-4"
                />
              ) : (
                <Image
                  src={partner.image}
                  alt={partner.name}
                  className="h-48 w-48 outline-none object-contain rounded-md mb-4"
                />
              )}
              <h3 className="font-semibold text-center text-gray-700">
                {partner.name}
              </h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
