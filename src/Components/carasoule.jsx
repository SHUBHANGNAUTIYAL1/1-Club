import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import human from "../assets/human.png"
import comma from "../assets/comma.png"
import '../App.css'

const Banners=[
  {
   content:'Although a bit on the pricier side, the breads deliver the quality. ',
   name:'Saravana',
   location:'Banglore',
   img:human
  },
  {
    content:'I was never a fan of bread made from wheat due to their bland taste, but the one with honey completely changed my mind !',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'The coconut milk bread has my heart ! I never knew my favourite ingredient could be used in breads.',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'If it’s healthy then the taste is usually compromised. But the bread from Mahimyfoods is nutritious and tastes great ! ',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'I never knew anything this tasty could be healthy!',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'As a bread lover and a gym rat, I restricted myself from consuming bread. But Mahimyfoods changed my perspective and now I can enjoy a slice of bread every once in a while without feeling guilty about it.',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'I used to completely avoid breads, but the wheat bread with honey has changed my perspective and now I can’t do without eating it at least thrice a week !',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'I have tried multiple nutritious bread brands, but Mahimyfoods seems to be my favourite. Their process of baking is transparent and extremely hygienic.',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'Given my busy work schedule, Mahimyfood breads have come to my rescue. They indeed pack a punch of nutrition in very loaf of bread. ',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'Indha wheat bread laam sweet ah ve irukaadhu, but ivangal oda wheat bread with honey romba nalla irukku. Saapta wheat bread nu eh solla maateenga !',
    name:'Saravana',
    location:'Banglore',
    img:human
   }
  
]

function Carousel() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1000) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }

    window.addEventListener('resize', handleResize);

    // Call handleResize once on initial render to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 20,
    cssEase: "linear",
    ltr: true,
    arrows: false
  };
    const settings2 = {
      dots: false,
      
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 20,
      cssEase: "linear",
      rtl: true,
      arrows: false
      
      
    };
  return (
    <div className="h-full  w-[99vw] px-2 ">
      <div className="slider-container h-full w-full z-50 gap-2   flex  flex-col items-center ">
        <Slider  {...settings} className="w-full md:w-[95%] flex justify-between  ">
          {
            Banners.map((banner,index)=>(

             <div className="p-5 ">
              <div className="  bg-[#a4dacd] h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2 border-green-800  rounded-xl" key={index}  >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <img src={banner.img} alt="" />
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">{banner.name}</h1>
                      <p className="gabarito text-[13px] text-[#B9B9B9]">{banner.location}</p>
                    </div>
                    <img src={comma} alt="" />
                  </div>
                </div>
            
          </div>
          </div>
          ))
         }
        </Slider>
        <Slider {...settings2} className="w-[90%]  justify-between hidden md:flex">
          {
            Banners.map((banner,index)=>(
              <div className="p-5">
              <div className="  bg-[#a4dacd]  justify-between h-[250px] p-5 md:p-10 flex flex-col gap-2 border-2 border-green-800 rounded-xl " key={index}  >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <img src={banner.img} alt="" />
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">{banner.name}</h1>
                      <p className="gabarito text-[13px] text-[#B9B9B9]">{banner.location}</p>
                    </div>
                    <img src={comma} alt="" />
                  </div>
                </div>
            
          </div>
          </div>
        
          ))
         }
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
