
import React from 'react';
import { UserGroupIcon } from './icons/UserGroupIcon';

const testimonials = [
  {
    quote: "The team at NRIBuild made our dream of building a home in Kerala a reality. Their professionalism and transparent communication were exceptional. We felt connected to the project despite being thousands of miles away.",
    name: "Anand & Priya Kumar",
    location: "Dubai, UAE",
    avatar: "https://picsum.photos/100/100?image=823"
  },
  {
    quote: "I was hesitant to invest in a property project from the US, but their detailed reports and video updates gave me complete peace of mind. The quality of work is outstanding. Highly recommended!",
    name: "Sunita Patel",
    location: "California, USA",
    avatar: "https://picsum.photos/100/100?image=836"
  },
  {
    quote: "From handling the complex paperwork to supervising the construction, they managed everything flawlessly. A truly reliable partner for any NRI looking to build in India.",
    name: "Rajesh Singh",
    location: "London, UK",
    avatar: "https://picsum.photos/100/100?image=838"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <UserGroupIcon className="h-12 w-12 mx-auto text-accent" />
          <h2 className="text-4xl font-bold text-primary mt-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-2">Real stories from NRIs who trusted us with their vision.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
