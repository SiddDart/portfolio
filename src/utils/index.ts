import { FaHtml5, FaCss3Alt, FaReact, FaVuejs } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel,  SiMysql, SiPostgresql, SiMongodb, SiPrisma, SiSequelize, SiDocker, SiPostman, SiExpress } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";


// Define the skills object
export const skills = {
  frontend: [
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3Alt, name: 'CSS3' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: FaReact, name: 'React' },
    { Icon: FaVuejs, name: 'Vue.js' },
  ],
  backend: [
    { Icon:  SiExpress, name: 'Express' },
    { Icon: SiLaravel, name: 'Laravel' },
    { Icon: FaGolang, name: 'Go' },
    
  ],
  databases: [
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiMongodb, name: 'MongoDB' },
  ],
  tools: [
  
    { Icon: SiPrisma, name: 'Prisma' },
    { Icon: SiSequelize, name: 'Sequelize' },
    { Icon: SiPostman, name: 'Postman' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: VscVscode, name: 'VS Code' },
  ],
};

// Define the Experience type
interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tasks: string[];
}


// Define the experiences array
const experiences: Experience[] = [
  {
    date: "Mar, 2023 - August, 2024",
    title: "Frontend Engineer/ Bug Master",
    company: "Payd, Nairobi",
    description: "Focused on creating seamless user experiences and robust front-end solutions.",
    tasks: [
      "Collaborated on UI/UX design & development for Payd platform",
      "Contributed to frontend architecture, tech selection, & scalability planning",
      "Ensured seamless integration with backend leads",
      "Assigned tasks and managed distribution effectively",
      "Took on 'dev on duty' role for continuous support",
    ],
  },
  {
    date: "Nov, 2023 - March, 2024",
    title: "Frontend Developer Intern",
    company: "Payd, Nairobi",
    description: "Gained valuable experience in frontend development and collaboration.",
    tasks: [
      "Collaborated with UX/UI developers on frontend development",
      "Created a user-friendly platform with efficient design",
      "Ensured seamless integration with frontend and backend leads",
      "Assigned tasks and managed distribution effectively",
      "Took on 'dev on duty' role for continuous support",
    ],
  },
];

export { experiences }; 

//projects data
export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string;
  demoLink: string;
}

export const projects: Project[] = [
  {
    title: "Poet Landing Page",
    description: "A responsive landing page for a Poet with slider animation, highlighting details about the poet.",
    image: "/images/poet_blog.png",
    tech: "HTML, Tailwind CSS",
    demoLink: "https://revolutionaryspitter.netlify.app/"
  },
  {
    title: "Artist Landing Page",
    description: "A responsive landing page for a music artist, highlighting artist details. Inspired by Figma designs.",
    image: "/images/artist_blog.png",
    tech: "HTML, CSS",
    demoLink: "https://cardiacpoet.netlify.app/"
  },
  {
    title: "Mfanyikazi Abroad",
    description: "Final year project, monitoring Kenyan job seekers in Middle East countries and providing assistance.",
    image: "/images/mfanyikazi.png",
    tech: "React, Tailwind CSS, Express, MySQL",
    demoLink: "https://mfanyikazi--abroad.vercel.app/"
  },
  {
    title: "Car Reservation App",
    description: "Car reservations UI inspired by figma design print. Users can reserve cars and view available cars.",
    image: "/images/car-rent.png",
    tech: "React, Tailwind CSS, Bootstrap",
    demoLink: "https://aspect-car-rental.vercel.app/"
  }
]

