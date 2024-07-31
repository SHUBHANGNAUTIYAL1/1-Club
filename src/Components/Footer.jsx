import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full   shadow-md py-4 bg-[#cbf7ec]" >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <div className='flex  items-center gap-2'>
          <p className=" text-[20px] md:text-[30px] font-bold ">Free</p>
          <p className=" text-[16px] md:text-[24px] font-bold  line-through">$50</p>
          </div>
          <p className=" text-[14px] md:text-[16px] text-gray-600">Deadline <span className="font-bold">July 30, 2024</span></p>
        </div>
        <button className=" text-white font-bold bg-yellow-400  py-3 px-5 md:px-16 text-[16px] md:text-[24px]  rounded-full " > Book Your Free Spot</button>
      </div>
    </footer>
  );
};

export default Footer;
