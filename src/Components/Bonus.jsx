import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faChild,
  faBook,
  faSmile,
  faTasks,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function Bonus({ onClick }) {
  const bonuses = [
    {
      id: 1,
      title: "21 day Abundance Challenge",
      price: "Rs.1199",
      icon: faGift,
    },
    {
      id: 2,
      title: "Inner Child Healing Meditation",
      price: "Rs.2099",
      icon: faChild,
    },
    {
      id: 3,
      title: "111 Affirmations e-book (Health, Money, Relationship, Career)",
      price: "Rs.599",
      icon: faBook,
    },
    {
      id: 4,
      title: "Improve Self Esteem- Guided Meditation",
      price: "Rs.1698",
      icon: faSmile,
    },
    {
      id: 5,
      title: "Overcome Procrastination & Increase Productivity",
      price: "Rs.795",
      icon: faTasks,
    },
    {
      id: 6,
      title: "The Miracle Morning routine - 90 day challenge",
      price: "Rs.1209",
      icon: faSun,
    },
  ];

  return (
    <div className="min-h-screen px-10 flex flex-col items-center justify-center ">
      <div className="text-center mt-10 mb-8">
        <h1 className="text-3xl font-bold text-white animate-bounce">
          Get Bonuses Worth Rs.7599
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map((bonus) => (
          <div
            key={bonus.id}
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-opacity-70"
          >
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-black bg-opacity-60 rounded-full flex items-center justify-center animate-pulse">
                <FontAwesomeIcon
                  icon={bonus.icon}
                  size="2x"
                  className="text-yellow-500"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-white">
              Bonus No.{bonus.id}
            </h2>
            <p className="mt-2 text-white">
              {bonus.title} –{" "}
              <span className="font-semibold">{bonus.price}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          className="bg-yellow-400 text-white px-10 py-3 rounded-full font-bold hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
          onClick={onClick}
        >
          Book Your Free Slot
        </button>
        <p className="text-center mt-2 font-bold text-white  mb-10">
          90% seats booked{" "}
        </p>
      </div>
    </div>
  );
}

export default Bonus;
