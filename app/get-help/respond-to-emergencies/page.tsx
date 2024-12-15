"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { AlertCircle, PhoneCall, Heart, ArrowLeft } from "lucide-react";
import aid from "@/public/aid.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Footer from "@/app/Home/Footer";
export default function EmergencyResponse() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className=" mx-auto px-4 py-12">
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
              How to Respond to Emergencies
            </h1>
            <div className="w-24 h-1 bg-second mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[550px] max-sm:h-[300px] rounded-lg overflow-hidden">
              <Image
                src={aid}
                alt="Emergency Response Illustration"
                fill
                className="object-fit"
                priority
              />
            </div>

            <Card className="p-6 bg-blue-900 text-white">
              <h2 className="text-xl md:text-2xl font-semibold mb-6">
                For any emergency, please follow these instructions:
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">
                      A. Check
                    </h3>
                    <p className="text-blue-100">
                      Ensure the scene is safe. If the scene is not safe, do not
                      approach the patient; instead, call for support. If the
                      scene is safe, check the patient&apos;s responsiveness by
                      tapping their shoulder. If the patient is awake, assist
                      them based on their needs. If the patient is not awake,
                      proceed to the next step.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">
                      B. Call
                    </h3>
                    <p className="text-blue-100">
                      If the patient is unresponsive, shout for help and/or call
                      the ambulance service. In Addis Ababa, dial{" "}
                      <span className="font-bold">939</span> or{" "}
                      <span className="font-bold">907</span>. Note the local
                      emergency number if you are outside of Addis Ababa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">
                      C. Care
                    </h3>
                    <p className="text-blue-100">
                      After calling the ambulance, provide first aid based on
                      ABCD (Airway, Breathing, Circulation, and Disability).
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prepare yourself for critical moments
            </h2>
            <p className="text-gray-600 mb-8">
              Our first aid courses are available in both free and paid options.
              These comprehensive resources teach you how to respond to
              emergencies effectively, whether at home, work, or in your
              community. Sign up today to gain the skills you need to save
              lives.
            </p>
            <Link
              href="https://tirta-s-school.teachable.com/"
              className="bg-brand hover:bg-brand rounded-sm text-white font-semibold px-8 py-3"
            >
              Visit our courses
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
