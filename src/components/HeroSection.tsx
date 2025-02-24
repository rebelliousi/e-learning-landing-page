import image from "../assets/img/girl.png";
import Card from "./Card";
import icon from "../assets/img/Online Education.png";
import icon2 from "../assets/img/Progress circle.png";
import icon3 from  "../assets/img/Board.png"
import icon4 from "../assets/img/Group 518.png"
import icon5 from "../assets/img/Briefcase.png"
import icon6 from "../assets/img/Layer 2.png"
import circle from "../assets/img/Group 498.png"
import circle2 from "../assets/img/Group 499.png"

const Hero: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10  container p-5  mx-auto flex items-center justify-center font-inter mt-10 relative">
      <div className="absolute top-1/3 transform -translate-y-1/2 -translate-x-[30px] left-0 ">
              <img src={circle} alt="" />

            </div>
          
            
        <div className="w-[573px]  h-[420px] ">
          <h1 className="text-[70px] font-[700] leading-tight">
            Up Your <span className="text-[#7F56D9]">Skills </span> <br /> To{" "}
            <span className="text-[#7F56D9]">Advance</span> Your <br />{" "}
            <span className="text-[#7F56D9]">Career</span> Path
          </h1>
          <div className="w-[487px] h-[58px] mt-[20px]">
            <p className="text-[16px] text-[#646464]">
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
          </div>
          <div className="mt-[36px] space-x-5 flex items-center">
            <button className=" w-[157px] h-[60px] text-[18px] text-white bg-[#7F56D9] p-5 rounded-lg">
              Get Started
            </button>
            <button className="text-[#7F56D9] text-[18px] p-5 bg-[#f4ebff] rounded-lg w-[165px] h-[60px]">
              Get free trial
            </button>
          </div>
          <div className="flex grid grid-cols-3 mt-[50px] items-center justify-center space-x-4">
            <div className="flex space-x-2 items-center justify-center">
              <img src={icon4} alt="" />
              <p className="text-[16px] text-[#1D2939B2]">Public speaking</p>

            </div>
            <div className="flex items-center justify-center space-x-2">
              <img src={icon5} alt="" />
              <p className="text=[16px] text-[#1D2939B2]">Career oriented</p>

            </div>
            <div className="flex items-center justify-center space-x-2 ">
              <img src={icon6} alt="" />
              <p className="text-[16px] text-[#1D2939B2]">Creative Thinking</p>
            </div>
            <div>
            


            </div>

          </div>
        </div>

        <div className="pl-[143px] pt-[140px] relative ">
      
         
          <div className="absolute  top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[495px]  h-[495px] rounded-full bg-[#7F56D9] z-[-1]  overflow-hidden flex items-center justify-center pt-[68px] ">
            <img src={image} alt=" " className="relative z-10" />
            
          </div>
          <div className="absolute top-1/3 right-0 transform -translate-y-[10px] translate-x-[50px] z-[-2] ">
          <img src={circle2} alt="" />
          </div>
          

          <Card className=" w-[214px] h-[90px] border-[1px] border-[#7F56D9] space-x-7 flex grid-cols-2 items-center justify-center absolute top-1/4 left-16 shadow-md transform -translate-x-1/2 -translate-y-1/2 w-48 h-24 z-20 bg-[#f5f5f4]">
            <div className="w-[48px] h-[48px] bg-[#7F56D9] flex items-center justify-center rounded-lg">
              <img src={icon} alt="" />
            </div>
            <div className="">
              <h1 className="text-[25px] font-semibold">2K+</h1>
              <p className="text-sm text-gray-400">Video courses</p>
            </div>
          </Card>

          <Card className="flex flex-col justify-center items-center absolute w-[144px] h-[189px] border-[1px] border-[#7F56D9] right-0 bottom-1/4 transform -translate-y-1/2 -translate-1/2 bg-[#f5f5f4]">
            <div>
              <img src={icon2} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center mt-[24px]">
              <h1 className="text-[25px] font-semibold">5K+</h1>
              <p className="text-sm text-gray-400">Online courses</p>
            </div>
          </Card>

          <Card className="absolute bg-[#f5f5f4] grid grid-cols-2 border-[1px]  border-[#7F56D9] w-[164px] h-[85px] top-1/1 transform translate-y-1/2  right-0">
            <div className="w-[48px] h-[48px] rounded-lg bg-[#7F56D9] flex items-center justify-center ">
              <img src={icon3} alt="" />

            </div>
            <div>
              <p className="text-sm text-gray-400">Tutors</p>
              <h1 className="text-[25px] font-semibold" >250+</h1>
            </div>

          </Card>
         
        </div>
      </div>
    </div>
  );
};
export default Hero;
