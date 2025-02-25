import React from "react";
import { blogPosts } from "../data/Blog";
import { mainData } from "../data/Blog";

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col container mx-auto p-5 font-inter">
      <h1 className="text-[24px] font-[600] mb-[32px] mt-[80px]">Our recent blogs</h1>

      <div className="flex">
        {/* Sol Taraf: Blog Yazıları */}
        <div className="flex-1 flex flex-col space-y-4">
          {blogPosts.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 w-full h-[200px]">
              <img src={item.imageSrc} alt="" className="w-[320px] h-[200px] " />
              <div className="w-[248px] h-[188px]">
                <p className="text-[14px] font-[600] text-[#6941C6]">{item.date}</p>
                <h1 className=" mt-[12px]  text-[18px] font-[600]">{item.title}</h1>
                <p className="mt-[8px] text-[16px] text-[#667085]">{item.description}</p>
                <div className="mt-[24px] flex items-center space-x-4">
                  {item.tags.map((tag, index) => (
                    <p key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sağ Taraf: Büyük Resimler */}
        <div className="w-[592px] ml-4">
          {mainData.map((item) => (
            <div key={item.id} className="flex flex-col  mb-4">
              <img src={item.imageSrc} alt="" className="w-full h-[240px] object-cover" />
              <p className="text-[14px]  text-[#6941C6] text-left font-[600] mt-[20px]">{item.date}</p>
              <h1 className="text-[24px] font-[600] mt-[12px]">{item.title}</h1>
              <p className="text-[16px] text-[#667085] mt-[12px]"> {item.description}</p>
              <div className="mt-[24px] flex items-center space-x-4">
                  {item.tags.map((tag, index) => (
                    <p key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                      {tag}
                    </p>
                  ))}
                </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;