import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faChild, faBook, faSmile } from "@fortawesome/free-solid-svg-icons";

function Bonus({ onClick }) {
  const bonuses = [
    {
      id: 1,
      title: "30-Day Wealth Acceleration Course",
      price: "₹1999",
      description: "A comprehensive program designed to fast-track your financial growth with daily actionable steps and mindset shifts.",
      icon: faGift,
    },
    {
      id: 2,
      title: "Deep Healing Transformation Pack",
      price: "₹2499",
      description: "Includes Inner Child Healing Meditation, Advanced Trauma Release Session, and Emotional Freedom Techniques (EFT) guide.",
      icon: faChild,
    },
    {
      id: 3,
      title: "Abundance Meditation Tapes",
      price: "₹1799",
      description: "A series of guided meditation tapes focused on creating a mindset of abundance and prosperity.",
      icon: faBook,
    },
    {
      id: 4,
      title: "Rapid Destress Audio",
      price: "₹999",
      description: "An audio track engineered to provide quick relief from stress and anxiety, perfect for busy professionals.",
      icon: faSmile,
    },
  ];

  return (
    <div className="min-h-screen px-10 bg-[#f8f5f8] flex flex-col items-center justify-center">
      <div className="text-center mt-5 mb-8">
        <h1 className=" text-[30px] md:text-[50px] font-bold text-black md:animate-bounce">
          Get Bonuses Worth Rs. 7296
        </h1>
       
      </div>
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-6">
        {bonuses.map((bonus) => (
          <div
            key={bonus.id}
            className="bg-[#a4dacd] p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105"
          >
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center animate-pulse">
                <FontAwesomeIcon
                  icon={bonus.icon}
                  size="2x"
                  className="text-yellow-500"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-black">
              Bonus No.{bonus.id}
            </h2>
            <p className="mt-2 text-black font-semibold">{bonus.title}</p>
            <p className="mt-2 text-black">
              {bonus.description} –{" "}
              <span className="font-semibold">{bonus.price}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          className="bg-yellow-400 md:text-[24px] text-black mt-5 px-10 py-3 rounded-full font-bold hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
          onClick={onClick}
        >
          Book Your Free Slot
        </button>
        <p className="text-center text-[20px] mt-2 font-bold text-black mb-10">
          90% seats booked
        </p>
      </div>
    </div>
  );
}

export default Bonus;
