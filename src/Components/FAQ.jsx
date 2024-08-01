import React, { useState } from 'react';

const faqs = [
  {
    question: "How I’ll get the link to attend the program?",
    answer: "You will get an email right after you register. Do check the spam and promotions tab just in case it landed there."
  },
  { question: "How I’ll get the bonus items?", answer: "You will get the bonus items through email." },
  { question: "Why does this program cost only ₹99?", answer: "We aim to make it affordable for everyone." },
  { question: "Will I get the recording of the program?", answer: "Yes, the recording will be provided." },
  { question: "Why is the training during business hours?", answer: "It's designed to fit into the workday schedule." },
  { question: "Who is this seminar ideal for?", answer: "It's ideal for entrepreneurs and business owners." },
  { question: "Is this applicable to my industry?", answer: "Yes, it applies to all industries." },
  { question: "Can I attend this if I want to start a business but don't have one yet?", answer: "Absolutely, it will help you get started." },
  { question: "What if I have questions about registration, attending, etc?", answer: "You can contact our support for assistance." },
  { question: "If I miss attending this time can I attend this again?", answer: "Yes, you can attend the next session." },
  { question: "What do I need to keep handy during the webinar?", answer: "A notepad and pen would be useful." },
  { question: "Can I attend this program along with my business partner(s)?", answer: "Yes, it's encouraged." },
  { question: "Is it a LIVE workshop?", answer: "Yes, it's a live interactive workshop." }
];

const Accordion = ({ onClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full flex items-center p-2 md:p-0 justify-center bg-[#e3efec]'>
      <div className="max-w-2xl mx-auto py-8 md:mt-20 mb-20">
        <h2 className="text-[36px] font-bold text-center text-blue-600">
          FAQs: 
          <span className="ml-2 text-gray-800">
            Here’s everything you may ask...
          </span>
        </h2>
        
        <div className="mt-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-300 mb-2">
              <button
                className="w-full text-left flex justify-between items-center p-4 text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button
            className="bg-yellow-400 border-none outline-none text-white py-4 px-10 rounded-full font-bold hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
            onClick={onClick}
          >
            Book Your Free Slot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
