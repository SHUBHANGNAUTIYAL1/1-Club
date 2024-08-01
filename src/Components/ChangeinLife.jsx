import React from "react";

const ChangeInLife = ({ onClick }) => {
  return (
    <div className="font-serif flex flex-col items-center justify-center p-8 min-h-screen">
      <h1 className="text-white text-3xl font-bold mb-8 mt-20 animate-bounce">
      Experience Meditation that 100% Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            emoji: "🔬",
            text: "Proven Techniques: Engage in meditation practices that have been scientifically proven to reduce stress, improve focus, and enhance overall well-being.",
          },
          {
            emoji: "🧘‍♂️",
            text: "Deep Relaxation: Experience a state of deep relaxation that rejuvenates your mind and body, providing immediate relief from stress and anxiety.",
          },
          {
            emoji: "💫",
            text: "Lasting Impact: Unlike typical feel-good meditations, our techniques offer lasting changes by addressing the root causes of your stress and anxiety.",
          },
          {
            emoji: "🔄",
            text: "Life Transformation: Witness how these practices can transform your life by improving your mental clarity, emotional stability, and overall happiness.",
          },
          {
            emoji: "😴",
            text: "Better Sleep: Achieve a more restful and restorative sleep by incorporating meditation into your nightly routine, helping you wake up refreshed.",
          },
          {
            emoji: "❤️",
            text: "Health Benefits: Boost your immune system, lower blood pressure, and improve heart health through regular meditation practices.",
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
        className="mt-8 bg-yellow-400 border-none outline-none text-white py-4 rounded-full font-bold px-10 hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
        onClick={onClick}
      >
        Book Your Free Spot
        <br />
      </button>
    </div>
  );
};

export default ChangeInLife;
