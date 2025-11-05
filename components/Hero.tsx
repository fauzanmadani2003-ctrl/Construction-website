
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center text-white py-32 md:py-48" 
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1073')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Build Your Dream Home in India, With Confidence.
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Your trusted partner in construction consultancy, offering transparency and expertise for NRIs.
        </p>
        <a 
          href="#contact" 
          className="bg-accent hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
