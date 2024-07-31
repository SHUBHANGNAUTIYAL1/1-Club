import React from "react";

const ChangeInLife = ({ onClick }) => {
  return (
    <div className="font-serif flex flex-col items-center justify-center p-8  min-h-screen">
      <h1 className="text-white text-3xl font-bold mb-8 mt-20 animate-bounce">
        What it will change in Your Life
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            emoji: "😊",
            text: "You will feel more emotionally stable & Balanced",
          },
          { emoji: "🏆", text: "You will achieve all your Goals in 2024" },
          {
            emoji: "👪",
            text: "Your relationship with your partner, family and friends will get better",
          },
          { emoji: "💸", text: "You will attract more money and abundance" },
          {
            emoji: "🔄",
            text: "You won't repeat the toxic patterns in your life anymore",
          },
          {
            emoji: "🚀",
            text: "You will STOP procrastinating and become an achiever with high self confidence",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-50 p-6 rounded-lg flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:bg-opacity-70"
          >
            <div className="text-5xl h-[80px] w-[80px] flex items-center justify-center rounded-xl bg-black bg-opacity-60 animate-pulse">
              {item.emoji}
            </div>
            <div className="text-white">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 bg-yellow-400 border-none outline-none text-white  py-4 rounded-full font-bold px-10 hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
        onClick={onClick}
      >
        Book Your Free Spot
        <br />
      </button>
    </div>
  );
};

export default ChangeInLife;
