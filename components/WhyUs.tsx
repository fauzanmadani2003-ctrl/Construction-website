
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const features = [
  {
    name: "Complete Transparency",
    description: "We provide detailed financial breakdowns and open communication channels. No hidden costs, no surprises."
  },
  {
    name: "NRI-Centric Approach",
    description: "We understand the unique challenges you face and have tailored our processes to ensure a smooth, remote experience."
  },
  {
    name: "Uncompromising Quality",
    description: "Our on-ground team conducts meticulous quality checks, ensuring every aspect of your project meets the highest standards."
  },
  {
    name: "Single Point of Contact",
    description: "Enjoy the convenience of a dedicated project manager who is your single point of contact for all your queries."
  },
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Building a property in India from abroad can be daunting. We bridge the distance with trust, technology, and a commitment to excellence, making the process seamless and secure for you.
            </p>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-500 bg-green-100 rounded-full p-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-primary">{feature.name}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://picsum.photos/600/500?image=20" alt="Construction planning" className="rounded-lg shadow-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
