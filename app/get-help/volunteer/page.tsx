"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import comm from "@/public/comm.jpg";
import Footer from "@/app/Home/Footer";
export default function EmergencyResponse() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto px-4 py-12">
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
              Volunteer with us
            </h1>
            <div className="w-24 h-1 bg-second mx-auto"></div>
          </div>

          <div className=" grid md:grid-cols-2 gap-8 mb-12">
            <p className="p-6 pb-8 max-sm:px-2 text-center bg-blue-900 text-xl rounded-lg  self-center text-white">
              Join our mission to transform prehospital care in Ethiopia by
              volunteering with TirtaMed. Whether you&apos;re a healthcare
              professional, a student, or a passionate advocate for better care,
              your efforts can make a lasting difference in building safer
              communities.
            </p>
            <div className="relative rounded-lg   w-3/4  mx-auto">
              <Image
                src={comm}
                alt="Emergency Response Illustration"
                layout="responsive"
                className="object-fit "
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
