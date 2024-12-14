"use client";

import { ReactNode, ReactElement } from "react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface BulletPoint {
  title: string;
  description: string | ReactElement;
}

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  bulletPoints?: BulletPoint[];
}

export default function HelpMain({ services }: { services: Service[] }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto px-4 md:px-10 py-14">
        <div className="grid gap-8 items-start">
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="cursor-pointer transition-all hover:border-blue-200 hover:shadow-lg"
                onClick={() => router.push(service.link)}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>
                      {service.description.length > 200
                        ? `${service.description.substring(0, 200)}...`
                        : service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
