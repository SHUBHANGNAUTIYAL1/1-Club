import React, { useState, useEffect } from "react";

const Footer = ({ onClick }) => {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60); // 12 hours in seconds
  const filled = localStorage.getItem("Filled");
  const handleSubmit=()=>{
  if(filled)
    window.location.href="https://docs.google.com/document/d/10eNhJmtaEznsqm-65QHxbj3B8DepOT1EYofZtZz1XWo/edit#heading=h.sm9gundt5rep";
  else
  onClick();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full shadow-md py-4 bg-[#cbf7ec]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-[20px] md:text-[30px] font-bold">Free</p>
            <p className="text-[16px] md:text-[24px] font-bold line-through">
              $50
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] text-gray-600">
            Offer ends in{" "}
            <span className="font-bold">{formatTime(timeLeft)}</span>
          </p>
          
        </div>
        <button
          className="text-white font-bold bg-yellow-400 py-3 px-5 md:px-16 text-[16px] md:text-[24px] rounded-full"
          onClick={handleSubmit}
        >
          Book Your Free Spot
        </button>
      </div>
    </footer>
  );
};

export default Footer;
