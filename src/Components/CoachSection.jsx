import React from 'react';
import coach from "../assets/coach.jpg"

const CoachSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 md:px-[200px] md:py-16 shadow-lg">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img 
          src=""
          
          className="rounded-lg border-4 border-yellow-500 shadow-lg max-w-full  w-[350px] h-[350px]"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Know your Coach</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Lydia Binil</h1>
        <p className="text-gray-700 mt-4">
        Lydia Binil has been a pivotal figure in the personal development industry for over a decade. As a certified Business Success & Money Block Coach, she has healed trauma and transformed beliefs for success, guiding over 10k+ people to unlock their full potential. 

        </p>
        <p className="text-gray-700 mt-4">
        Lydia specialises in empowering freelancers, coaches, small business owners, and influencers to achieve their highest potential. Her mission is to help individuals break free from limiting beliefs and lead abundant lives through proven techniques. Join her for a transformative meditation session and start your journey towards personal and professional growth.
        </p>
        <p className="text-gray-700 mt-4">
          She is very passionate about helping people unlock their potential and live a life of abundance 
          and is on a mission to help 10 Million people become their best version.
        </p>
        <div className="mt-6">
          <button className="bg-yellow-500 text-md md:text-lg  px-10 text-white py-3 rounded-full font-bold mb-10 shadow-lg hover:bg-yellow-600 transition duration-300">
            Book Your Free Spot<br />
            <span className="text-sm">Limited Seats Left</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
