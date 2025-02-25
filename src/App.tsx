
import Brand from "./components/Brand"
import Comments from "./components/Comments"
import Courses from "./components/Courses"

import Hero from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Service from "./components/Services"
import Tutors from "./components/Tutors"
const App:React.FC=()=>{
  return(
    <div>
   <Navbar/>
   <Hero/>
   <Brand/>
   <Service/>
   <Courses/>
   <Tutors/>
   <Comments/>
 
    </div>

  )
}
export default App