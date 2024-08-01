import React, { useRef, useEffect, useState } from "react";
import "../App.css"; // Import the CSS file with the animation styles
import res from "../assets/res.jpg";
import med from "../assets/med.jpeg"
import Creator from "../assets/creator.jpg";
import man from "../assets/man.jpeg";
import mind from "../assets/mind.jpg";
import over from "../assets/over.jpeg";


const TimelineItem = ({ image, title, description, reversed }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      itemRef.current.classList.add("animate");
    } else {
      itemRef.current.classList.remove("animate");
    }
  }, [isVisible]);

  return (
    <div
      ref={itemRef}
      className={`flex flex-col md:flex-row items-center ${
        reversed ? "md:flex-row-reverse" : ""
      } mb-8 timeline-item`}
    >
      <div
        className={`w-full md:w-1/2 p-4 md:border-2 md:border-green-800 ${
          reversed ? "md:ml-4 rounded-r-xl" : "md:mr-4 rounded-l-xl"
        }`}
      >
        <img src={image} alt={title} className="w-full h-auto rounded-md" />
      </div>
      <div
        className={`w-full md:w-1/2 px-6 bg-[#a4dacd] rounded-xl py-10 ${
          reversed ? "md:mr-4" : "md:ml-4"
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="bg-[#e3efec] font-serif">
      <div className="flex w-full justify-center">
        <div className="text-center mb-20 mt-20 px-4 md:mx-0">
          <h2 className="text-[32px] md:text-[40px] text-slate-800 font-semibold mb-4">
            What will you Learn in 1 hour
          </h2>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>

        <TimelineItem
          image={med}
          title="Effective Meditation Techniques"
          description="Learn meditation methods that go beyond feel-good practices, offering real and lasting benefits."
        />
        <TimelineItem
          image={mind}
          title="Subconscious Rewiring"
          description="Discover how to identify and reprogram limiting beliefs and negative thought patterns that hold you back."
          reversed
        />
        <TimelineItem
          image={Creator}
          title="Stress and Anxiety Management"
          description="Gain strategies to effectively manage and overcome stress, anxiety, overwhelm, overthinking, and burnout."
        />
        <TimelineItem
          image={man}
          title="Mindfulness Practices"
          description="Integrate mindfulness into your daily routine to enhance focus, clarity, and emotional well-being."
          reversed
        />
        <TimelineItem
          image={over}
          title="Overcoming Overwhelm"
          description="Learn practical steps to reduce feelings of overwhelm and handle multiple responsibilities with ease."
        />
        <TimelineItem
          image={res}
          title="Building Resilience"
          description="Develop mental and emotional resilience to navigate challenges and maintain a positive outlook."
          reversed
        />
      </div>
    </div>
  );
};

export default Timeline;
