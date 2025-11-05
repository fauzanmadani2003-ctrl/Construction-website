
import React from 'react';

const steps = [
  { number: '01', title: 'Discovery & Consultation', description: 'We start with a detailed discussion to understand your vision, requirements, and budget.' },
  { number: '02', title: 'Plan & Design', description: 'Our team works on architectural plans, 3D models, and secures necessary legal approvals.' },
  { number: '03', title: 'Build & Supervise', description: 'We manage on-site operations, contractors, and provide you with real-time progress reports.' },
  { number: '04', title: 'Finish & Handover', description: 'We oversee the final touches, interiors, and hand over the keys to your completed dream property.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Our Four-Step Process</h2>
          <p className="text-lg text-gray-600 mt-2">A simplified and structured approach to turn your vision into reality.</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-5 left-1/2 w-0.5 h-[calc(100%-2.5rem)] bg-gray-300 -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex absolute top-5 h-full items-start">
                  <div className={`w-4 h-4 rounded-full bg-accent border-4 border-white ring-4 ring-accent ${index % 2 === 1 ? 'ml-[calc(50%+1.25rem)]' : 'mr-[calc(50%+1.25rem)]'}`}></div>
                </div>
                <div className="bg-gray-50 border-l-4 border-accent p-6 rounded-lg shadow-md md:border-none md:w-full">
                  <span className="text-4xl font-bold text-accent">{step.number}</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
