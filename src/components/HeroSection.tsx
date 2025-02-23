import image from "../assets/img/girl.png"
const Hero: React.FC = () => {
  return (
    <div className="container p-5 mx-auto flex items-center justify-center font-inter">
      <div className="grid grid-cols-2 gap-5 items-center ">
        <div className="w-[573px]  h-[420px]">
          <h1 className="text-[70px] font-[700] leading-tight">
            Up Your <span className="text-[#7F56D9]">Skills </span> <br /> To <span className="text-[#7F56D9]">Advance</span>  Your <br /> <span className="text-[#7F56D9]">Career</span> Path
          </h1>
          <div className="w-[487px] h-[58px] mt-[20px]">
            <p className="text-[16px] text-[#646464]">
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
          </div>
          <div className="mt-[36px] space-x-5 flex items-center">
            <button className=" w-[157px] h-[60px] text-[18px] text-white bg-[#7F56D9] p-5 rounded-lg">Get Started</button>
            <button className="text-[#7F56D9] text-[18px] p-5 bg-[#f4ebff] rounded-lg w-[165px] h-[60px]">Get free trial</button>
          </div>
        </div>

        <div>
            <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
