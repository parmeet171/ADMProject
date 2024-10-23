import React, { useEffect, useState } from "react";
import { StuCard } from "../components";
import btechImg from "../assets/btechImg.jpeg"
import bsc1 from "../assets/bsc1.jpeg"
import be from "../assets/be.jpeg"
import bba from "../assets/bba.jpeg"
import mca from "../assets/mca.jpeg"
import mtech from "../assets/mtech.jpeg"
import msc from "../assets/msc.jpeg"
import mba from "../assets/mba.jpeg"
import me from "../assets/me.jpeg"


const data1 = [
  {
    "id": 1,
    "img": "https://www.srceducation.in/wp-content/uploads/2019/08/BCA.jpg",
    "title": "Bachelor of Computer Applications",
    "desc": "BCA (Bachelor of Computer Applications) is a three-year undergraduate program focused on computer science, programming, and IT skills, preparing students for careers in the tech industry."
  },
  {
    "id": 2,
    "img": btechImg,
    "title": "Bachelor of Technology in Information Technology",
    "desc": "B.Tech (Bachelor of Technology) is a four-year undergraduate program focused on engineering and technology. It offers specializations like Computer Science, Information Technology, Electronics, and more, equipping students with technical and practical skills for careers in engineering, software development, and the tech industry."
  },
  {
    "id": 3,
    "img": bsc1,
    "title": "Bachelor of Science in Computer Science",
    "desc": "B.Sc (Bachelor of Science in Computer Science) is a three-year undergraduate program focused on the theoretical and practical aspects of computing. It covers areas like programming, algorithms, data structures, and software development, preparing students for careers in software engineering, data analysis, and IT services."
  },
  {
    "id": 4,
    "img": be,
    "title": "Bachelor of Engineering in Computer Science and Engineering",
    "desc": "B.E (Bachelor of Engineering in Computer Science and Engineering) is a four-year undergraduate program that combines principles of computer science and engineering. It covers topics such as software development, algorithms, hardware design, and systems architecture, preparing students for careers in software engineering, systems analysis, and technology innovation."
  },
  {
    "id": 5,
    "img": bba,
    "title": "Bachelor of Business Administration in Information Systems",
    "desc": "BBA (Bachelor of Business Administration in Information Systems) is a three-year undergraduate program that blends business management principles with information technology. It focuses on the application of IT solutions in business environments, covering topics like systems analysis, project management, and data management, preparing students for careers in IT management, business analysis, and consulting."
  },
  {
    "id": 6,
    "img": bsc1,
    "title": "Bachelor of Science in Information Technology",
    "desc": "B.Sc (Bachelor of Science in Information Technology) is a three-year undergraduate program focused on the study of information systems, databases, networking, and programming. It equips students with the technical skills needed for careers in IT support, systems management, software development, and network administration."
  },
]

const data2 = [
  {
    "id": 1,
    "img": mca,
    "title": "Master of Computer Applications",
    "desc": "MCA (Master of Computer Applications) is a three-year postgraduate program designed to provide advanced knowledge and skills in computer applications and software development. The curriculum covers areas such as programming, database management, software engineering, and networking, preparing graduates for careers as software developers, system analysts, and IT project managers."
  },
  {
    "id": 2,
    "img": mtech,
    "title": "Master of Technology in Information Technology",
    "desc": "M.Tech (Master of Technology) is a two-year postgraduate program that focuses on advanced technical and engineering skills in various fields, including computer science and information technology. The curriculum emphasizes research, specialized knowledge, and practical applications, preparing graduates for roles in software development, technology research, and academic positions in engineering."
  },
  {
    "id": 3,
    "img": msc,
    "title": "Master of Science in Computer Science",
    "desc": "M.Sc (Master of Science in Computer Science) is a two-year postgraduate program that provides in-depth knowledge of advanced computing concepts, algorithms, and software development. The curriculum includes subjects such as artificial intelligence, machine learning, data mining, and software engineering, preparing graduates for careers in research, software development, data analysis, and academic roles."
  },
  {
    "id": 4,
    "img": mba,
    "title": "Master of Business Administration in Information Systems",
    "desc": "MBA (Master of Business Administration in Information Systems) is a two-year postgraduate program that combines business management principles with information technology. The curriculum focuses on strategic management, IT project management, and data analytics, preparing graduates for leadership roles in IT management, business analysis, and technology consulting."
  },
  {
    "id": 5,
    "img": me,
    "title": "Master of Engineering in Computer Science and Engineering",
    "desc": "M.E (Master of Engineering in Computer Science and Engineering) is a two-year postgraduate program that emphasizes advanced engineering principles and technologies in the field of computer science. The curriculum covers areas such as software engineering, machine learning, and computer networks, preparing graduates for specialized roles in research, development, and engineering management within the tech industry."
  },
  {
    "id": 6,
    "img": msc,
    "title": "Master of Science in Information Technology",
    "desc": "M.Sc (Master of Science in Information Technology) is a two-year postgraduate program that focuses on advanced concepts in information systems, data management, and IT infrastructure. The curriculum includes topics such as network security, database management, and cloud computing, preparing graduates for careers in IT consultancy, systems analysis, and information management."
  },
]

const StudentHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
        <h1>Our Courses</h1>
      </div>
      <div className="text-2xl text-left mb-5 text-[#1d3f88]">
        <h1>Graduation Courses</h1>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {
          data1.map((item, index) => {
            return (
              <StuCard key={index} {...item} />
            )
          })
        }
      </div>
      <div className="text-2xl text-left my-8 text-[#1d3f88]">
        <h1>Post-Graduation Courses</h1>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {
          data2.map((item, index) => {
            return (
              <StuCard key={index} {...item} />
            )
          })
        }
      </div>
    </div>
  );
};

export default StudentHome;
