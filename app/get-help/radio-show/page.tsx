"use client";
import Image from "next/image";

import image18 from "@/public/image20.png";
// import Footer from "@/app/Home/Footer";
export default function RadioShow() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto px-4 py-6">
          {/* Header */}
          {/* <Button
            variant="ghost"
            className="mb-6 text-second hover:text-blue-700 transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button> */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
              Radio show
            </h1>
            {/* <div className="w-24 h-1 blue-400 mx-auto"></div> */}
          </div>

          <div className=" grid md:grid-cols-2 gap-8 mb-12">
            <p className="p-6 pb-8 max-sm:px-2 text-center bg-blue-400 text-xl rounded-lg  self-center text-white">
              Stay tuned to &quot;Lehowot Menor,&quot; our partner radio show on
              Ahadu Radio (94.3 MHz) every Sunday morning starting at 7 AM. This
              program is dedicated to emergency medicine and critical care,
              featuring expert discussions, practical tips, and real-life
              stories. Tune in for valuable insights that will help you stay
              informed and prepared.
            </p>
            <div className="relative rounded-lg   w-4/5  mx-auto">
              <Image
                src={image18}
                alt="Emergency Response Illustration"
                layout="responsive"
                className="object-fit "
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
