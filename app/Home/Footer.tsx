"use client";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo2.png";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const contactInfo = [
    {
      type: "Email",
      value: "Admin@tirtamed.com",
    },
    {
      type: "Phone",
      value: "+251905630063",
    },
    {
      type: "Location",
      value: "Megenagna, Senper Buld. Office No 701",
    },
  ];
  const usefulLinks = [
    { name: "Courses", href: "https://tirta-s-school.teachable.com/p/11" },
    { name: "Terms of use", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Careers", href: "contact" },
  ];

  const workingHours = [
    { days: "Monday - Friday", hours: "8:00 Am- 5:00 PM" },
    { days: "Saturday", hours: "8:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="bg-[#2F3349] text-white pt-16 pb-8 px-4 pr-6">
        <div className="mx-auto xl:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image src={logo} className="w-10 bg-brand" alt="Tirtamed" />
                <h2 className="text-2xl font-bold">TirtaMed</h2>
              </div>
              <p className="text-gray-300">
                We provide emergency response training, a coordinated ambulance
                network, research, and community programs to transform
                healthcare in Ethiopia. Join us in saving lives and building
                resilient communities.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <p className="text-sm text-gray-400">{info.type}</p>

                    <p className="text-gray-300 hover:text-brand">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand transition-colors flex items-center gap-2"
                    >
                      <span className="text-blue-400">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3 mb-6">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-300"
                  >
                    <span>{schedule.days}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => router.push("/contact")}
                className="bg-[#00D2C1] hover:bg-[#00B5A7] text-white w-full"
              >
                Contact Us Now
              </Button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©Developed by{" "}
              <Link
                href="https://github.com/yohannes-mesay"
                className="text-slate-400 "
                target="_blank"
              >
                Yohannes
              </Link>
            </p>
            {/* <p className="text-gray-400">
              © 2024, Designed and Developed By{" "}
              <Link href="https://t.me/Yuhe5"  className="text-brand">Yohannes</Link>
            </p> */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61555632226474&mibextid=ZbWKwL"
                className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
              >
                {/* <Facebook className="w-5 h-5" /> */}
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link
                href="https://t.me/tirtamed"
                className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
              >
                {/* <Facebook className="w-5 h-5" /> */}
                <FaTelegramPlane className="w-6 h-6" />
              </Link>
              {/* <Link
                href="#"
                className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/company/tirtamed-plc/"
                className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
              >
                {/* <Facebook className="w-5 h-5" /> */}
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Button
                size="icon"
                className="rounded-full bg-[#00D2C1]  ml-12 hover:bg-[#00B5A7] border-0"
                onClick={scrollToTop}
              >
                <ArrowUp className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
