
import React, { useState } from 'react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "How do you ensure construction quality when I am not physically present?",
    answer: "We have a multi-layered quality control system. Our on-site supervisors conduct daily checks, and we schedule third-party audits at critical stages. You receive detailed reports with high-resolution photos and videos, and we can even arrange live video walkthroughs of the site."
  },
  {
    question: "How can I track the progress and finances of my project?",
    answer: "You will have access to a secure client portal where we upload weekly progress reports, site photos, and a transparent financial dashboard. All expenses are documented with receipts, ensuring complete clarity on where your money is going."
  },
  {
    question: "What are the legal hurdles involved, and how do you help?",
    answer: "We have a dedicated legal team that handles all regulatory aspects, from plan approvals and RERA registration to utility connections and occupancy certificates. We navigate the bureaucracy so you don't have to."
  },
  {
    question: "How are payments handled?",
    answer: "We follow a milestone-based payment schedule. Payments are requested only after a specific stage of construction is completed and verified. You can make payments securely through international bank transfers."
  }
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-medium text-primary">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-gray-600">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mt-2">Answers to common queries from our NRI clients.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          {faqData.map((item, index) => (
            <FaqAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
