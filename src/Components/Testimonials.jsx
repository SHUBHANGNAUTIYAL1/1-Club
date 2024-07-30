import React from 'react'
import "../App.css"
import star from '../assets/star.png'
import Carasoule from './carasoule'


function Testimonials() {
  return (
    <div className="w-full font-serif  bg-[#e3efec] flex  justify-center items-center px-2 md:px-0 py-10 md:py-20">
    <div className="w-full   flex flex-col justify-center items-center gap-6 md:gap-16">
       <div className='bg-black flex items-center gap-4 pl-2 pr-8 rounded-full py-2'>
         <div className='flex p-2 justify-center items-center rounded-full bg-[#C4F72C]'>
            <img src={star} alt="" />
         </div>
         <p className=' text-white text-[14px] md:text-[22px] '>Rated 4.5 Above/5  by 2 Lakh Clients</p>
       </div>
       <h1 className=' text-center text-[32px] text-[#599587] md:text-[54px] font-semibold '>Words of praise from our Clients</h1>
       <div >
        <Carasoule/>

       </div>

    </div>
    </div>
  )
}

export default Testimonials