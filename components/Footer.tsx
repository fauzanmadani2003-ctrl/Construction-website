
import React from 'react';
import { BuildingIcon } from './icons/BuildingIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <BuildingIcon className="h-8 w-8 text-accent" />
              <span>NRIBuild</span>
            </a>
            <p className="text-gray-400">Your trusted partner in construction consultancy for NRIs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-accent">Services</a></li>
              <li><a href="#why-us" className="hover:text-accent">Why Us</a></li>
              <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@nribuild.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} NRIBuild Consultants. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
