import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../assets/img/Frame 390.png";
import icon2 from "../assets/img/Path.png";
import icon3 from "../assets/img/Frame 391.png";
import { FaChevronRight } from "react-icons/fa";

const Service: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const slideCount = 3;
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const goToSlide = (slideNumber: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideNumber);
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
      setSelectedCard(newIndex); // Otomatik geçişte de kartı güncelle
    },
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
    <div className="mx-auto container p-5 flex flex-col items-center justify-center mt-[50px] font-inter">
      <div className="flex flex-col justify-center ">
        <p className="text-center text-[#7F56D9] text-[16px] font-semibold">
          Our Services
        </p>
        <h1 className="text-center text-[40px] font-semibold">
          Fostering a playful & engaging learning <br />
          environment
        </h1>
      </div>
      <Slider ref={sliderRef} {...settings} className="w-full mt-[40px]">
        <div
          className={`shadow-lg rounded-lg w-[373px] h-[243px] flex flex-col rounded-md p-5 cursor-pointer ${
            selectedCard === 0 ? "bg-[#7F56D9]" : "bg-white"
          }`}
          onClick={() => handleCardClick(0)}
        >
          <div className="flex items-center space-x-2">
            <img src={icon} alt="" className="w-12 h-12" />
            <h1
              className={`text-[24px] font-semibold ${
                selectedCard === 0 ? "text-white" : "text-gray-900"
              }`}
            >
              User Experience
            </h1>
          </div>
          <p
            className={`text-[16px] mt-[30px] ${
              selectedCard === 0 ? "text-white" : "text-gray-600"
            }`}
          >
            Lessons on design that cover the most recent developments.
          </p>
          <button
            className={`text-left text-[18px] mt-[22px] ${
              selectedCard === 0 ? "text-white" : "text-[#7F56D9]"
            }`}
          >
            Learn More <FaChevronRight className="inline-block text-sm" />
          </button>
        </div>

        <div
          className={`shadow-lg rounded-lg w-[373px] h-[243px] flex flex-col rounded-md p-5 cursor-pointer ${
            selectedCard === 1 ? "bg-[#7F56D9]" : "bg-white"
          }`}
          onClick={() => handleCardClick(1)}
        >
          <div className="flex items-center space-x-2">
            <img src={icon2} alt="" className="w-12 h-12" />
            <h1
              className={`text-[24px] font-semibold ${
                selectedCard === 1 ? "text-white" : "text-gray-900"
              }`}
            >
              Web development
            </h1>
          </div>
          <p
            className={`text-[16px] mt-[30px] ${
              selectedCard === 1 ? "text-white" : "text-gray-600"
            }`}
          >
            Classes in development that cover the most recent advancements in
            web.
          </p>
          <button
            className={`text-left text-[18px] mt-[22px] ${
              selectedCard === 1 ? "text-white" : "text-[#7F56D9]"
            }`}
          >
            Learn More <FaChevronRight className="inline-block text-sm" />
          </button>
        </div>

        <div
          className={`shadow-lg rounded-lg w-[373px] h-[243px] flex flex-col rounded-md p-5 cursor-pointer ${
            selectedCard === 2 ? "bg-[#7F56D9]" : "bg-white"
          }`}
          onClick={() => handleCardClick(2)}
        >
          <div className="flex items-center space-x-2">
            <img src={icon3} alt="" className="w-12 h-12" />
            <h1
              className={`text-[24px] font-semibold ${
                selectedCard === 2 ? "text-white" : "text-gray-900"
              }`}
            >
              User Experience
            </h1>
          </div>
          <p
            className={`text-[16px] mt-[30px] ${
              selectedCard === 2 ? "text-white" : "text-gray-600"
            }`}
          >
            Lessons on design that cover the most recent developments.
          </p>
          <button
            className={`text-left text-[18px] mt-[22px] ${
              selectedCard === 2 ? "text-white" : "text-[#7F56D9]"
            }`}
          >
            Learn More <FaChevronRight className="inline-block text-sm" />
          </button>
        </div>
      </Slider>
      <div className="flex justify-center mt-4">{dots}</div>
    </div>
  );
};

export default Service;