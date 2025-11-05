
import React from 'react';

const services = [
  { title: "Plot Evaluation", description: "Expert assistance in evaluating and acquiring the perfect piece of land for your project." },
  { title: "Architectural Design", description: "Collaborating with top architects to bring your vision to life with functional and aesthetic designs." },
  { title: "Legal & Approvals", description: "Navigating the complex regulatory landscape to secure all necessary permits and approvals hassle-free." },
  { title: "Project Management", description: "End-to-end management ensuring your project stays on schedule and within budget." },
  { title: "Quality Control", description: "Rigorous quality checks and material audits to guarantee the highest standards of construction." },
  { title: "Transparent Reporting", description: "Regular progress updates with photos and videos, keeping you informed every step of the way." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">From concept to completion, we manage every detail of your construction project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
