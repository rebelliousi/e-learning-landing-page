import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../assets/img/Ellipse 158.png";
import { CommentData } from "../data/Comments";
import { useState, useRef } from "react";

const Comments: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);  // Correctly typed useRef
  const slideCount = CommentData.length; //Dynamically calculate based on CommentData
  

  const goToSlide = (slideNumber: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideNumber);
    }
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
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
    <div className=" mt-[80px] flex flex-col items-center justify-center bg-[#F9FAFB] p-5 font-inter ">
      <div className="flex items-center justify-center space-x-3 mt-[96px]">
        <img src={icon} alt="" />
        <h1 className="text-[20px] font-[800]">Ed-Circle</h1>
      </div>
      <Slider {...settings} ref={sliderRef} className="w-full">
        {CommentData.map((item) => (
          <div
            key={item.id}
            className="w-[1216px] flex flex-col items-center justify-center"
          >
            <h1 className="mt-[66px] text-[48px] text-center font-[500]">
              {item.comments}
            </h1>
            <div className="flex items-center justify-center mt-[30px]">
              <img src={item.image} alt="" className="text-center" />
            </div>

            <h1 className="text-[18px] text-center mt-[16px]">
              {item.personName}
            </h1>
            <p className="text-[#667085] text-[16px] text-center mt-[4px]">
              {item.wherefrom}
            </p>
          </div>
        ))}
      </Slider>
      <div className="mt-[40px]">{dots}</div>
    </div>
  );
};
export default Comments;