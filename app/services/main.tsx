"use client";

import { ReactNode, useState, ReactElement, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";

interface BulletPoint {
  title: string;
  description: string | ReactElement;
}

interface Service {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  link: string;
  bulletPoints?: BulletPoint[];
}

export default function OnlineTraining({ services }: { services: Service[] }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Update the initial selected service based on the screen size
    setSelectedService(window.innerWidth < 768 ? null : services[0]);
  }, [services]);

  useEffect(() => {
    if (window.innerWidth < 768 && selectedService) {
      // Smooth scroll to the details section on smaller screens
      const detailsElement = document.getElementById("service-details");
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedService]);

  const onlineTrainings = [
    {
      title: "Basic First Aid in Amharic Vol. 1",
      description: "Learn basic first aid techniques in Amharic Vol. 1",
      icon: <Play className="h-6 w-6 text-blue-500" />,
      link: "https://tirta-s-school.teachable.com/p/11",
    },
    {
      title: "Trauma-Focused First Aid in Amharic Vol. 1",
      description:
        "Specialized training for trauma-focused first aid in Amharic Vol. 1",
      icon: <Play className="h-6 w-6 text-green-500" />,
      link: "https://tirta-s-school.teachable.com/p/d4bf52",
    },
    {
      title: "First Aid for Medical Emergencies in Amharic Vol. 1",
      description: "Learn first aid for medical emergencies in Amharic Vol. 1",
      icon: <Play className="h-6 w-6 text-purple-500" />,
      link: "https://tirta-s-school.teachable.com/p/422f15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto px-4 md:px-10 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all ${
                  selectedService && selectedService.title === service.title
                    ? "border-blue-500 shadow-lg"
                    : "hover:border-blue-200"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader className="flex flex-row text-xl items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {service.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </motion.div>

          <motion.div
            id="service-details"
            className="mt-8 md:mt-0 h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {selectedService && selectedService.title !== "Online Trainings" ? (
              <Card className="overflow-hidden h-full flex flex-col">
                {selectedService.title === "About Our Trainings" ? (
                  <video
                    className="w-full"
                    poster="/image.png"
                    controls
                    preload="none"
                  >
                    <source src="/vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    width={600}
                    height={600}
                    className={`w-full h-72 object-fit ${
                      selectedService.title ===
                        "Founding members research publications" && "hidden"
                    }`}
                  />
                )}

                <CardContent className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    {selectedService.description}
                  </p>
                  {selectedService.bulletPoints && (
                    <div className="space-y-4 mb-6">
                      {selectedService.bulletPoints.map((point, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (point.title === "Article 2") {
                              router.push(
                                "https://onlinelibrary.wiley.com/doi/full/10.1155/2022/7797328"
                              );
                            } else if (point.title === "Article 3") {
                              router.push(
                                "https://bmcemergmed.biomedcentral.com/articles/10.1186/s12873-015-0035-4"
                              );
                            } else if (point.title === "Article 1") {
                              router.push(
                                "https://bmcemergmed.biomedcentral.com/articles/10.1186/s12873-018-0158-5"
                              );
                            }
                          }}
                          className={`pl-4 border-l-2 ${
                            point.title.startsWith("Article") &&
                            "cursor-pointer "
                          }  border-blue-500`}
                        >
                          <h4
                            className={` ${
                              point.title.startsWith("Article") && "hidden "
                            } font-semibold`}
                          >
                            {point.title}
                          </h4>
                          <p
                            className={`text-gray-600 ${
                              point.title.startsWith("Article") &&
                              "hover:text-blue-900 "
                            } text-sm`}
                          >
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6 h-full flex flex-col">
                <h2 className="text-3xl font-bold mb-6 text-second">
                  Online Trainings
                </h2>
                <div className="space-y-4 flex-grow">
                  {selectedService &&
                    onlineTrainings.map((training, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200">
                              {training.icon}
                            </div>
                            <h3 className="text-xl font-semibold">
                              {training.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {training.description}
                          </p>
                          <Button
                            onClick={() => router.push(training.link)}
                            variant="outline"
                            className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                          >
                            Learn More
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                </div>
                <Button
                  onClick={() =>
                    router.push("https://tirta-s-school.teachable.com/")
                  }
                  variant="outline"
                  className="w-full bg-brand hover:bg-brand/80"
                >
                  Visit all our online courses
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
