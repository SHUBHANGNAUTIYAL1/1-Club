// src/components/WorkshopCard.js
import React from 'react';
import med from '../assets/med-removebg-preview.png'

const Workshop = () => {
  return (
   <div className='flex flex-col  font-serif  items-center   bg-[#e3efec] '>
   
    <div className=" rounded-b-xl text-[16px] font-bold text-slate-800 bg-[#a4dacd] min-w-[300px] max-w-[350px] p-4  flex flex-col items-center justify-center">
     <h1>Heal and Manifest Workshop</h1>
     <p>3 hours online</p>
    </div>
    <div className="w-[50%] mt-6 font-bold flex-col text-slate-800 flex justify-center py-10 text-[32px] text-center">
        <h1>Awaken Your Inner Strength</h1>
        <h1 className="text-[#599587]"> Heal Your Past and Manifest Your Best Life</h1>
    </div>
    <div className='flex w-[80%] gap-10 mt-10 '>
        <div className="w-[50%] flex justify-end">
        <img className="w-[80%] h-[90%]"  src={med} alt="" />
        </div>
        <div className='w-[50%]'>
        <h3 className="text-[30px] font-bold mb-4">Why attend this workshop</h3>
        <ul className="space-y-4">
          <li className="flex items-center bg-[#a4dacd] px-4 py-2 rounded-xl">
            <span className=" w-6 h-6 mr-2 text-white px-2 py-2 rounded-full bg-[#0e5444] flex items-center justify-center">&#10003;</span>
            <span className="text-lg">You will learn <span className="font-bold">Techniques and Practices</span> to Heal Deep-Rooted Childhood Trauma</span>
          </li>
          <li className="flex items-center bg-[#a4dacd] px-4 py-2 rounded-xl ">
            <span className=" w-6 h-6 mr-2 text-white px-2 py-2 rounded-full bg-[#0e5444] flex items-center justify-center">&#10003;</span>
            <span className="text-lg">Learn <span className="font-bold">Strategies and Techniques</span> to reprogram your subconscious Beliefs</span>
          </li>
          <li className="flex items-center bg-[#a4dacd] px-4 py-2 rounded-xl">
            <span className=" w-6 h-6 mr-2 text-white px-2 py-2 rounded-full bg-[#0e5444] flex items-center justify-center">&#10003;</span>
            <span className="text-lg">Manifest your dream life by making <span className="font-bold">2024 your best year</span></span>
          </li>
          <li className="flex items-center bg-[#a4dacd] px-4 py-2 rounded-xl">
            <span className=" w-6 h-6 mr-2 text-white px-2 py-2 rounded-full bg-[#0e5444] flex items-center justify-center">&#10003;</span>
            <span className="text-lg">Remove Money blocks and <span className="font-bold">attract wealth</span></span>
          </li>
          <li className="flex items-center bg-[#a4dacd] px-4 py-2 rounded-xl">
            <span className=" w-6 h-6 mr-2 text-white px-2 py-2 rounded-full bg-[#0e5444] flex items-center justify-center">&#10003;</span>
            <span className="text-lg">Get <span className="font-bold">Rid of Anxious thoughts</span> and Overthinking in Relationships</span>
          </li>
          <li className="flex items-center bg-[#a4dacd] px-4 py-2 rounded-xl">
            <span className=" w-6 h-6 mr-2 text-white px-2 py-2 rounded-full bg-[#0e5444] flex items-center justify-center">&#10003;</span>
            <span className="text-lg">Stop Procrastinating and become an <span className="font-bold">Action Taker</span></span>
          </li>
        </ul>
        <div className="w-full flex justify-center mt-4">
            <div className='flex items-center justify-center rounded-full bg-yellow-400  px-6 py-4 mb-20'>
             <h1 className='font-bold'>join now for Rs.99</h1>
            </div>
        </div>
        </div>
    </div>
   </div>
  );
};

export default Workshop;
