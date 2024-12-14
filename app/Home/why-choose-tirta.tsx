import { Card } from "@/components/ui/card";
import { LiaHandPointRightSolid } from "react-icons/lia";

export default function ChooseTirtaMed() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="col-span-1 md:col-span-2">
        <div className="w-full text-center pt-2">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose TirtaMed&apos;s Training
            </h2>
            <div className="flex justify-center">
              <div className="w-4 h-2 bg-[#00D2C1] pt-2 wavy-line" />
            </div>
            {/* <p className="max-w-2xl mx-auto text-gray-600 py-3">
            We are proud to collaborate with industry-leading partners who share
            our commitment to excellence and innovation in the medical field.
          </p> */}
          </div>{" "}
        </div>
        <p className="md:text-lg text-gray-800 mx-2 md:mx-20 text-center mb-8">
          TirtaMed is an accredited CPD provider, and its courses are also
          accredited. All our training programs lead to recognized certification
          upon successful completion. Our certification process includes:
        </p>
      </div>
      <div className="flex max-sm:flex-col max-sm:px-4 justify-around items-center ">
        <Card className="  shadow-none border-none">
          <ul className="space-y-4">
            {[
              "Internationally aligned curriculum  adapted to Ethiopian context",
              "Training materials available in the local language",
              "Experienced instructors with practical emergency response background",
              "Diverse learning methodologies",
              "Regular updates incorporating latest medical guidelines",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <LiaHandPointRightSolid className="w-6 h-6 flex-shrink-0 text-brand" />
                <span className="text-lg text-left">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className=" shadow-none border-none">
          <ul className="space-y-4">
            {[
              "Interactive digital learning platform",
              "Self-paced modules with multimedia content",
              "Flexibility to learn anytime, anywhere",
              "Automated certification upon completion",
              "Network of certified first aid professionals",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <LiaHandPointRightSolid className="w-6 h-6 flex-shrink-0 text-brand" />
                <span className="text-lg text-left">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
