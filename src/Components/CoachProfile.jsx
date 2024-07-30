import React from 'react';
import my from "../assets/my.jpg";

const stats = [
  { number: '16', label: 'Years Of Experience In Training And Coaching', icon: '🌟' },
  { number: '50M', label: 'Entrepreneurs Reached In The Last 6 Years', icon: '👥' },
  { number: '500+', label: 'Seminars And Workshops Conducted In The Last 6 Years', icon: '📅' },
  { number: '500K', label: 'Social Media Following', icon: '📱' },
  { number: '100K', label: 'Paid Customers', icon: '💰' },
  { number: '18K+', label: 'Live Entrepreneurs Community', icon: '👔' },
  { number: '2000+', label: 'Coaching Clients', icon: '🧑‍🏫' },
  { number: '190+', label: 'Industries Worked With', icon: '🏢' },
  { number: '30+', label: 'In-House Business Coaches', icon: '👨‍🏫' },
  { number: '5', label: 'Trained In More Than Five Countries', icon: '🌍' }
];

const CoachProfile = () => {
  return (
    <div className="min-h-screen text-white font-serif flex flex-col items-center">
      <h2 className="text-4xl font-semibold mt-8 animate-bounce">Meet Your Coach</h2>
      <div className="mt-4 flex flex-col items-center">
        <img src={my} alt="Coach" className="w-[200px] h-[200px] rounded-full transition-transform duration-500 transform hover:scale-105" />
        <h3 className="text-2xl font-bold text-white mt-4 animate-pulse">Shubhang Nautiyal</h3>
        <p className="text-gray-300">Asia’s Leading Business Success Coach</p>
      </div>
      <div className="grid grid-cols-2 text-white md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 px-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-black bg-opacity-50 shadow-md rounded-lg p-4 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:bg-opacity-70">
            <div className='flex justify-around w-full items-center'>
              <div className="text-3xl font-bold ">{stat.number}</div>
              <div className="text-orange-500 text-2xl mt-2 flex justify-center h-[40px] w-[40px] bg-black rounded-lg items-center animate-pulse">{stat.icon}</div>
            </div>
            <div className="text-white mt-4">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachProfile;
