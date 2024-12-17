"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import image2 from "@/public/image2.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Community() {
  const router = useRouter();
  return (
    <>
      <div className="  bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <Button
            variant="ghost"
            className="mb-6 text-blue-900 hover:text-blue-700 transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Community Service
            </h1>
            <div className="w-24 h-1 bg-second mx-auto"></div>
          </div>

          <div className=" grid md:grid-cols-2  gap-8 sm:mb-12">
            <div className="relative rounded-lg lg:h-80  h-48 w-full mx-auto">
              <Image
                src={image2}
                alt="Emergency Response Illustration"
                layout="responsive"
                className="object-fit"
                priority
              />
            </div>

            <p className="p-6 pb-8 max-sm:px-2 text-center bg-blue-900 text-xl rounded-lg  self-center text-white">
              Through partnerships with local organisations, we provide free
              essential support and education to strengthen community
              resilience. From first aid training to emergency preparedness
              programs, we aim to make life-saving knowledge accessible to all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
