
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    alert("Thank you for your message! We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-primary">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mt-4">
              Let's discuss your vision. Fill out the form, and our expert consultants will get in touch with you for a free, no-obligation consultation.
            </p>
            <div className="mt-8 space-y-4 text-gray-700">
              <p><strong>Email:</strong> contact@nribuild.com</p>
              <p><strong>Phone (India):</strong> +91 98765 43210</p>
              <p><strong>Phone (USA):</strong> +1 (415) 123-4567</p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-accent focus:border-accent" placeholder="John Doe" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-accent focus:border-accent" placeholder="john.doe@example.com" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                  <textarea id="message" rows={4} className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-accent focus:border-accent" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full text-white bg-accent hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
