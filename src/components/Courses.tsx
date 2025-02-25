import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coursesData } from "../data/Course";

const Courses: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const slideCount = coursesData.length; // Slayt sayısını dinamik olarak belirle

  useEffect(() => {
    console.log("sliderRef.current:", sliderRef.current); // Slider referansının ne zaman dolduğunu kontrol et
  }, [sliderRef.current]);

  const goToSlide = (slideNumber: number) => {
    console.log("goToSlide çağrıldı, slideNumber:", slideNumber); // Fonksiyonun çağrıldığını ve doğru değer aldığını kontrol et
    if (sliderRef.current) {
      console.log("slickGoTo çağrılıyor, slideNumber:", slideNumber); // slickGoTo'nun çağrıldığını ve doğru değer aldığını kontrol et
      sliderRef.current.slickGoTo(slideNumber);
    } else {
      console.log("sliderRef.current hala null!"); // Referansın neden null olduğunu anlamaya çalış
    }
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setCurrentSlide(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dots = Array.from({ length: slideCount }, (_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`h-3 w-3 rounded-full mx-1 ${
        index === currentSlide ? "bg-[#7F56D9] w-[32px]" : "bg-gray-300 w-3"
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ));

  return (
    <div className="container flex flex-col p-5 mx-auto font-inter mt-[80px]">
      <p className="text-[16px] text-[#6941C6] font-[600]">Explore Programs</p>
      <h1 className="text-[36px] font-semibold mt-[12px]">Our Most Popular classes</h1>
      <p className="text-[20px] text-[#667085] mt-[20px]">
        Let's join our famous class, the knowledge provided will definitely be useful for you.
      </p>
      <Slider ref={sliderRef} {...settings} className="mt-[40px] ">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className={` space-x-3 p-5 rounded-lg shadow-lg w-[336px] h-[553px] bg-white flex flex-col justify-center ${
              selectedCard === index ? "" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img src={course.image} alt={course.title} className="max-w-full h-auto" />
            <p className="text-[14px] text-[#6941C6] text-left mt-[30px]">
              {course.design}
            </p>
            <div className="flex items-center justify-between  mt-[12px] w-[336px]">
              <h1 className="text-[24px] text-center">{course.title}</h1>
              <img src={course.icon} alt="" />
            </div>
            <p className="line-clamp-1 w-full text-[16px] text-[#667085] text-left mt-[12px] w-[336px]">
              {course.description}
            </p>
            <div className="flex items-center space-x-5 mt-[12px] w-[55px] h-[17px]">
              <p className="text-[14px]">{course.rating}</p>
              <p className="text-[14px] text-[#969696]">({course.numbers})</p>
            </div>
            <div className="flex items-center justify-between mt-[32px] w-[336px]">
              <div className="flex items-center justify-center  space-x-3">
                <img src={course.avatar} alt="" />
                <div className="flex flex-col">
                  <h1 className="text-[14px]">{course.name}</h1>
                  <p className="text-[14px] text-[#667085]">{course.desc}</p>
                </div>
              </div>
              <p className="text-[26px]  text-[#7F56D9] font-[800]">{course.price}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-4">{dots}</div>
      <div className="flex items-center justify-center">
      <button className=" p-2  rounded-lg font-semibold w-[173px] mt-[40px] text-[14px] border-[1px] border-[#D0D5DD]">Explore  All Programs</button>
      </div>
     
    </div>
  );
};

export default Courses;