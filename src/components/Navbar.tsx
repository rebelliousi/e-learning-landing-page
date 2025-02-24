import { FaChevronDown, FaSearch } from "react-icons/fa";
import logo from "../assets/img/Ellipse 1.png"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white flex container items-center p-5  mx-auto justify-between font-inter">
      <div className="">
        <a href="" className="flex items-center space-x-3">
        <img src={logo} alt="" />
        <span className="font-bold text-[20px]">Ed-Circle.</span>
        </a>
        
      </div>

      <div className="flex relative items-center justify-center">
        <input
          type="text"
          placeholder="Want to learn?"
          className=" border border-[#D0DD5DD] rounded-lg py-2  px-4 w-80 focus:outline-none focus:border-[#D0DD5DD] pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-[45%] text-gray-500 " />
        <button className="flex text-[#7f56d9] font-semibold items-center text-[15px] absolute right-1 border-none rounded-md p-2 bg-[#f9f5ff]">
          Explore <FaChevronDown className="ml-2 text-sm cursor-pointer" />
        </button>
      </div>

      <div className="space-x-8  text-md" >
        <a href=" ">Program</a>
        <a href="">Enterprise</a>
        <a href="">Universities</a>
      </div>

      <div className="space-x-5">
        <button className="text-md">Sign in</button>
        <button className="text-white bg-[#7f56d9] p-2 rounded-lg">Create free account</button>
      </div>
    </nav>
  );
};
export default Navbar;
