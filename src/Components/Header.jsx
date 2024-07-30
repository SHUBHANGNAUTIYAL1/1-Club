import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="relative w-full font-serif h-screen bg-[#f4f7f6] pb-16"> {/* Added padding bottom to avoid footer overlap */}
      <div className="text-center  py-8  mt-20">
        
        <h1 className="text-[40px] font-bold">
        Overcome   <span className="text-[#599587]">Stress and Anxiety</span> in 1Hr
        </h1>
        <p className="text-[24px] mt-2">
        Join and become like the Top 1% Successful People
        </p>
      </div>

      <div className="w-full flex px-[200px] gap-20  mt-10">
        <div className="w-[50%] relative  flex justify-center">
          <div className='w-[400px] h-[400px]  bg-[#c7f1e7] flex items-center justify-center rounded-full'>
            <div className='w-[360px] h-[360px] bg-[#9cf5e0] rounded-full flex items-center justify-center'>
                <div className='w-[320px] h-[320px] bg-[#49f5cd] rounded-full'>
                  <img src="u" alt="" />
                </div>

             </div>  

            
          
          </div>
          <div className="text-center absolute bg-white z-50 px-5 py-3 shadow-md rounded-lg top-28 left-6">
                <p className="text-lg text-white font-bold">250M+</p>
                <p className="text-white text-[12px]">IMPRESSIONS</p>
              </div>
              <div className="text-center absolute bg-white  z-50 px-5 py-3 shadow-md rounded-lg top-20 right-10">
                <p className="text-lg text-white font-bold">400K</p>
                <p className="text-white text-[12px]">FOLLOWERS</p>
              </div>
              <div className="text-center absolute bg-white  z-50 px-5 py-4 shadow-md rounded-lg bottom-0 left-26">
                <p className="text-xl text-blue-600 font-bold">Lydia Binil
                </p>
                <p className="text-black mt-4 text-[16px]">Success and Money Block Coach</p>
              </div>
        </div>
        <div className="w-[50%] flex flex-col">
            <div className="flex justify-center mt-4 space-x-4">
            <div className=" flex items-center gap-2 px-10 py-6">
                <FontAwesomeIcon icon={faClock} className="text-xl mr-2" />
                <div className="flex flex-col ">
                    <p className="text-xl font-bold">1hr</p>
                    <p className="text-gray-600">Workshop</p>
                </div>
            </div>
            
            <div className=" flex items-center gap-2 px-10 py-6">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-xl mr-2" />
                <div className="flex flex-col">
                    <p className="text-xl font-bold ">start at 11Am IST</p>
                    <p className="text-gray-600">on 4th Aug, 2024</p>
                </div>
            </div>
            </div>
            
            <div className="mt-6 bg-[#a4dacd] p-6 rounded-xl border-2 border-blue-500">
              <p className="text-[20px] ">
              Enhance your <span className='font-bold'> concentration and clarity </span>for better productivity and <span className='font-bold'>
              Achieve profound inner peace </span> and emotional well-being.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 justify-center">
                <button className="text-[20px] text-white font-bold py-4 px-20 rounded-full bg-yellow-300"> 
                        
                   Book Your Free Spot
                </button>
                <p className='font-bold'>90% seats booked</p>
            </div>

        </div>
      </div>

      

      
    </div>
  );
};

export default Header;
