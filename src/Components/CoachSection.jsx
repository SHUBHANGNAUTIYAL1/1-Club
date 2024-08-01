import React from "react";
import coachh from "../assets/coachh.jpg";

const CoachSection = ({ onClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 md:px-[200px] md:py-16 shadow-lg">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src={coachh}
          className="rounded-lg border-4 border-yellow-500 shadow-lg max-w-full  w-[400px] h-[400px]"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        Meet Lydia Binil
        </h2>
        <h1 className="text-xl md:text-3xl font-semibold text-gray-900 mt-2">
        Your Guide to Freedom and Success
        </h1>
        <p className="text-gray-700 mt-4">
        Imagine waking up every day feeling free, focused, and in flow. This is the life Lydia Binil is passionate about helping others achieve. Lydia is a powerhouse of transformation, blending scientific knowledge, behavioral expertise, and personal experience. Her journey began as a Biotechnologist and evolved with an MBA in Human Behaviour, ultimately leading her to become a Subconscious Rewiring Practitioner. Over the past 8 years, she has guided more than 8,000 ambitious professionals and entrepreneurs to reach their goals with ease.
        </p>
        <p className="text-gray-700 mt-4">
        Lydia’s credentials are impressive. She is an award-winning Certified MAP Practitioner, renowned international speaker, and best-selling author of "Mumpreneur on Fire." Her unique approach combines cutting-edge subconscious rewiring techniques with practical strategies, making her guidance both powerful and relatable. Lydia's personal triumph over childhood trauma fuels her mission to help 1 million people live lives of freedom and flow.
        </p>
        <p className="text-gray-700 mt-4">
        Join Lydia on a transformative journey to break free from limitations and step into a life of abundance and fulfillment. Discover the extraordinary power of subconscious rewiring and unlock your highest potential with Lydia Binil.
        </p>
        <div className="mt-6 flex justify-center items-center">
          <button
            className="bg-yellow-500 text-md md:text-lg  px-10 text-white py-3 rounded-full font-bold mb-10 shadow-lg hover:bg-yellow-600 transition duration-300"
            onClick={onClick}
          >
            Book Your Free Spot
            <br />
            <span className="text-sm">Limited Seats Left</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
