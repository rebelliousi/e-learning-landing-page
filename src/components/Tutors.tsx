import courses from "../data/Tutors"
const Tutors:React.FC=()=>{
    return(
        <div  className="container mx-auto flex flex-col justify-center items-center font-inter mt-[80px]" >
            <div className="w-[768px] flex flex-col justify-center">
            <p className="text-[16px] text-[#6941C6] text-center font-semibold">Tutors</p> 
         <h1  className="text-[36px] text-center font-semibold mt-[12px] ">Meet the Heroes</h1>  
         <p className="text-center text-[20px] text-center text-[#667085] mt-[20px]">On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.</p>

            </div>
            <div className="grid grid-cols-4 gap-6 mt-[40px]">
                {courses.map((course)=>(
                    <div key={course.id} className="border-1 bg-gray-100 space-x-4 w-[276px] h-[340px] bg-[#F9FAFB] flex flex-col items-center justify-center">
                      <img src={course.image} alt="" /> 
                      <div className=" w-[228px] flex flex-col items-center justify-center">
                      <h1 className=" w-[228px] h-[28px] text-[18px]  font-[500] mt-[20px] text-center">{course.name}</h1> 
                      <p className="w-[228px] h-[48px] text-center text-[16px] text-[#6941C6]">{course.major}</p>
                      <p className=" w-[228px] h-[72px] text-center mt-[8px] text-[16px] text-[#667085]">{course.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-center mt-[16px] space-x-3">
                      <img src={course.icon} alt="" />
                      <img src={course.icon2} alt="" />

                      </div>
                    </div>
                ))}

            </div>
         
        </div>
    )
}
export default Tutors