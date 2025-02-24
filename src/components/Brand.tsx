import duolingo from "../assets/img/Vector.png"
import codecov from "../assets/img/Codecov (logo — Black).png"
import userTesting from "../assets/img/UserTesting (logo — Black).png"
import magicLeap from "../assets/img/Vector (1).png"
const Brand:React.FC=()=>{
    return(
        
        <div className="container gap-5 space-x-16 font-inter w-[1127px] h-[70px] flex grid grid-cols-5 mx-auto p-5 mt-[130px] items-center justify-center z-2 ml-10">
          <div className="items-center">
            <h1 className="text-[30px] text-[#7F56D9] font-bold">250+</h1>
            <p className="text-[25px]">Collaboration</p>

          </div>
          <img src={duolingo} alt="" />
          <img src={codecov} alt="" />
          <img src={userTesting} alt="" />
          <img src={magicLeap} alt="" />
        </div>
    )
}
export default Brand