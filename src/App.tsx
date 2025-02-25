
import Brand from "./components/Brand"
import Courses from "./components/Courses"

import Hero from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Service from "./components/Services"
const App:React.FC=()=>{
  return(
    <div>
   <Navbar/>
   <Hero/>
   <Brand/>
   <Service/>
   <Courses/>
 
    </div>

  )
}
export default App