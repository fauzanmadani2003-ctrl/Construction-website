
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CostEstimator from './components/CostEstimator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CostEstimator />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
