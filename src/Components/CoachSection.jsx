import React from 'react';
import coach from "../assets/coach.jpg"

const CoachSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 md:px-[200px] md:py-16 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img 
          src={coach} 
          alt="Gayathri Shivaram"
          className="rounded-lg border-4 border-yellow-500 shadow-lg max-w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Know your Coach</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Lydia Binil</h1>
        <p className="text-gray-700 mt-4">
        Lydia Binil has been in the Personal Development Industry for the last 10+ years 
          and is a certified Healing and Manifestation Coach. She has impacted over 2 Lakh+ people 
          and personally coached 30,000+ people to live a holistic life by helping them heal their 
          Traumas, Rewire their Subconscious beliefs and Live their Dream life with Proven Manifestation techniques.
        </p>
        <p className="text-gray-700 mt-4">
          She has worked with and learned from the best in the world, to name a few – Jack Canfield, 
          Tony Robbins, Marrisa Peer, Dr. John DeMartini, Brian Tracy, Nick Vujic, Blair Singer, Robin Sharma etc.
        </p>
        <p className="text-gray-700 mt-4">
          She is very passionate about helping people unlock their potential and live a life of abundance 
          and is on a mission to help 10 Million people become their best version.
        </p>
        <div className="mt-6">
          <button className="bg-yellow-500 text-lg px-10 text-white py-3 rounded-full font-bold shadow-lg hover:bg-yellow-600 transition duration-300">
            Book Your Free Spot<br />
            <span className="text-sm">Limited Seats Left</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
