import React, { useRef, useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file with the animation styles
import heal from "../assets/heal.jpeg"
import Goal from "../assets/Goal.jpg"
import Creator from "../assets/creator.jpg"
import man from "../assets/man.jpeg"
import mind from "../assets/mind.jpg"
import self from "../assets/self.jpeg"

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
        { threshold: 0.1 } // Adjust this threshold if needed
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
  
    // Toggle class to reset animation
    useEffect(() => {
      if (isVisible) {
        itemRef.current.classList.add('animate');
      } else {
        itemRef.current.classList.remove('animate');
      }
    }, [isVisible]);
  
    return (
      <div
        ref={itemRef}
        className={`flex flex-col md:flex-row items-center ${reversed ? 'md:flex-row-reverse' : ''} mb-8 timeline-item`}
      >
        <div className={`md:w-1/2 p-4 border-2 border-green-800  ${reversed ? 'ml-4 rounded-r-xl' : 'mr-4 rounded-l-xl'}`}>
          <img src={image} alt={title} className="w-full h-auto rounded-md" />
        </div>
        <div className={`md:w-1/2 px-6 bg-[#a4dacd] rounded-xl py-10 ${reversed ? 'mr-4' : 'ml-4'}`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };

const Timeline = () => {
  return (
    <div className="bg-[#e3efec] font-serif ">
      <div className="flex w-full justify-center">
        <div className="text-center bg-[#a4dacd] rounded-b-xl px-4 py-2 border-b-2 border-r-2 border-l-2 border-green-900 w-[320px] mb-12">
          <h2 className="text-[20px] text-slate-800 font-semibold mb-4">What will you Learn in 1 hour</h2>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>
        
        <TimelineItem
          image={heal} // Replace with actual image URL
          title="Identifying and Healing Root Causes"
          description="Understand how to identify and address the root cause of all your problems and heal them."
        />
        <TimelineItem
          image={Goal} // Replace with actual image URL
          title="Setting and Achieving Goals"
          description="A step-by-step process for setting and achieving personal and professional goals, providing a blueprint for sustained success."
          reversed
        />
        <TimelineItem
          image={Creator} // Replace with actual image URL
          title="Becoming the Creator of Your Life"
          description="How to stop being a victim of your circumstances and become the creator of your life by raising your vibration."
        />
        <TimelineItem
          image={man} // Replace with actual image URL
          title="Fundamentals of Manifestation"
          description="The fundamentals of Manifestation using three important laws: Law of Attraction, Law of Vibration & Law of Assumption."
          reversed
        />
        <TimelineItem
          image={mind} // Replace with actual image URL
          title="Rewiring Subconscious Beliefs"
          description="How to rewire your subconscious beliefs with simple proven techniques that you can use every day."
        />
        <TimelineItem
          image={self} // Replace with actual image URL
          title="Self-Love and Self-Care"
          description="Practical steps to start loving and nurturing yourself. This will improve your self-esteem and self-confidence."
          reversed
        />
      </div>
    </div>
  );
};

export default Timeline;
