import React, { useState } from 'react';
import Modal from './Modal';
import Form from './Form';

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#e3efec] flex flex-col items-center">
      <h2 className="text-4xl font-bold mt-10">Frequently Asked Questions:</h2>
      <div className="w-full max-w-2xl mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${openIndex === index ? 'text-red-500' : 'text-gray-700'}`}>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </div>
            </button>
            {openIndex === index && <p className="p-4 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <button
        className="mt-10 mb-5 px-10 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        onClick={openModal}
      >
        Enroll Now
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default FAQ;
