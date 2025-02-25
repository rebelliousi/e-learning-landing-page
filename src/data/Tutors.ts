// data.ts
import avatar from "../assets/img/Avatar (1).png"
import icon from "../assets/img/Vector.png"
import icon2 from "../assets/img/Vector (1).png"
interface Course {
    image: string;
    name: string;
    major: string;
    description: string;
    icon: string;
    icon2:string;
    id:number
  }
  
  const courses: Course[] = [
    {
      image: avatar,
      name: "Theresa Webb",
      major: "Application Support Analyst Lead",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      icon: icon,
      icon2:icon2,
      id:1
    },
    {
      image: avatar,
      name: "Theresa Webb",
      major: "Application Support Analyst Lead",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      icon: icon,
      icon2:icon2,
      id:2
    },
    {
      image: avatar,
      name: "Theresa Webb",
      major: "Application Support Analyst Lead",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      icon: icon,
      icon2:icon2,
      id:3
    },
    {

      image: avatar,
      name: "Theresa Webb",
      major: "Application Support Analyst Lead",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      icon: icon,
      icon2:icon2,
      id:4
    },
  ];
  
  export default courses;