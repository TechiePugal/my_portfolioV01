import { PersonalInfo, SocialLink, Education, Experience, Project, SkillCategory } from '../types';
import Pugal from "../img/about/pugal.jpg"
import KEC from "../img/education/boun_transparent.png"
import SPC from "../img/education/spc.png"
import SCHL from "../img/education/sch.png"
import SUPER from "../img/experience/super_logo1.png"
import TCC from "../img/experience/tcc.jpg"
import WEB from "../img/experience/cb.png"

export const personalInfo: PersonalInfo = {
  name: "TechiePugal",
  title: "Software Architect & Full-Stack Developer",
  description: "Crafting digital experiences through innovative technology solutions. Specializing in AI/ML, IoT development, and scalable cloud architectures that transform ideas into reality.",
  email: "pugalpugalee333@gmail.com",
  phone: "+91 9876543210",
  location: "Erode, Tamil Nadu",
  image: Pugal
};

export const socialLinks: SocialLink[] = [
  { name: "Email", url: "mailto:pugalpugalee333@gmail.com", icon: "Mail" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/techiepugal-in-090135272", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/TechiePugal", icon: "Github" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/pugalpugalee333", icon: "Code" },
  { name: "LeetCode", url: "https://leetcode.com/u/pugalpugalee333/", icon: "Terminal" }
];

export const education: Education[] = [
  {
    id: "kec",
    institution: "Kongu Engineering College",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    duration: "2022 – 2025",
    location: "Erode, Tamil Nadu",
    gpa: "7.22 / 10.00",
    logo: KEC,
    coursework: ["Machine Learning", "Data Structures & Algorithms", "Cloud Computing", "Computer Organization", "Software Engineering Fundamentals"]
  },
  {
    id: "spc",
    institution: "Sakthi Polytechnic College",
    degree: "Diploma",
    field: "Electrical and Electronics Engineering",
    duration: "2019 – 2022",
    location: "Erode, Tamil Nadu",
    gpa: "85%",
    logo: SPC,
    coursework: ["Circuits Theory", "PLC Programming", "Power Electronics", "PCB Design"]
  },
  {
    id: "djhss",
    institution: "Diamond Jubilee Higher Secondary School",
    degree: "SSLC",
    field: "Secondary School Leaving Certificate",
    duration: "2018 – 2019",
    location: "Erode, Tamil Nadu",
    gpa: "65%",
    logo: SCHL,
    achievements: ["Valedictorian Award for Best Athlete & Champion of the Year (2019)"]
  }
];

export const experience: Experience[] = [
  {
    id: "super-group",
    company: "Super Group of Companies",
    position: "Software Architect – Product and IT Development",
    duration: "Mar 2025 – Present",
    location: "Coimbatore, Tamil Nadu",
    description: "Leading software architecture and product engineering initiatives, designing scalable enterprise solutions and driving innovation through cutting-edge technology implementations.",
    highlights: [
      "Architected microservices infrastructure serving 100K+ daily users",
      "Led cross-functional teams in developing AI-powered business intelligence platforms",
      "Implemented DevOps pipelines reducing deployment time by 75%",
      "Designed cloud-native solutions with 99.9% uptime reliability"
    ],
    logo: SUPER
  },
  {
    id: "tcc",
    company: "The Cloud Company (TBI@KEC – Deloitte Recognized)",
    position: "Full-Stack Developer Intern",
    duration: "Sept 2024 – Feb 2025",
    location: "Perundurai, Tamil Nadu",
    description: "Developed cloud-native applications and contributed to government-sector digital transformation projects using modern technology stacks.",
    highlights: [
      "Built responsive web applications using React, Django, and PostgreSQL",
      "Collaborated on government digital initiatives impacting 50K+ citizens",
      "Implemented real-time data visualization dashboards",
      "Optimized application performance achieving 40% faster load times"
    ],
    logo: TCC
  },
  {
    id: "codebind",
    company: "CodeBind Technologies",
    position: "Web Developer Intern",
    duration: "May 2023 – June 2023",
    location: "Coimbatore, Tamil Nadu",
    description: "Gained foundational experience in web development, building client websites and learning industry best practices.",
    highlights: [
      "Developed 10+ responsive websites for diverse clients",
      "Mastered modern web development frameworks and tools",
      "Collaborated with design teams to implement pixel-perfect UIs",
      "Learned agile development methodologies and version control"
    ],
    logo: WEB
  }
];

export const projects: Project[] = [
  {
    id: "people-counter",
    title: "AI-Powered People Counter",
    description: "Advanced computer vision system using YOLO object detection for real-time people counting with 95% accuracy. Features crowd density analysis, heat mapping, and automated reporting for smart building management.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Computer Vision", "Real-time Processing"],
    githubUrl: "https://github.com/PUGALENTHIG/face-counter-ml",
    demoUrl: "#"
  },
  {
    id: "anpr",
    title: "Smart ANPR System",
    description: "Intelligent Automatic Number Plate Recognition system with OCR capabilities, supporting multiple languages and formats. Includes vehicle tracking, database integration, and real-time alerts for security applications.",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OCR", "Deep Learning", "OpenCV", "PostgreSQL", "REST API"],
    githubUrl: "https://github.com/PUGALENTHIG/ANPR",
    demoUrl: "#"
  },
  {
    id: "iot-ecosystem",
    title: "Smart IoT Ecosystem",
    description: "Comprehensive IoT platform with voice control, mobile app integration, and ML-powered automation. Features predictive maintenance, energy optimization, and seamless device orchestration.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Arduino", "Raspberry Pi", "React Native", "Firebase", "Machine Learning", "Voice Recognition"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "blockchain-platform",
    title: "DeFi Trading Platform",
    description: "Decentralized finance platform with automated market making, yield farming, and cross-chain compatibility. Features advanced security protocols and real-time analytics dashboard.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "Smart Contracts", "DeFi Protocols"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "ai-assistant",
    title: "Enterprise AI Assistant",
    description: "Multi-modal AI assistant with natural language processing, document analysis, and workflow automation. Integrates with enterprise systems for intelligent task management and decision support.",
    image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Transformers", "LangChain", "FastAPI", "Vector DB", "Multi-modal AI"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "quantum-simulator",
    title: "Quantum Algorithm Simulator",
    description: "Advanced quantum computing simulator with visual circuit designer and algorithm optimization. Supports major quantum algorithms and provides educational resources for quantum computing concepts.",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Qiskit", "NumPy", "Quantum Computing", "Algorithm Design", "Visualization"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "⚡", level: 95 },
      { name: "Python", icon: "🐍", level: 92 },
      { name: "TypeScript", icon: "🔷", level: 90 },
      { name: "Java", icon: "☕", level: 85 },
      { name: "C++", icon: "⚙️", level: 80 },
      { name: "Rust", icon: "🦀", level: 75 }
    ]
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: "⚛️", level: 95 },
      { name: "Next.js", icon: "▲", level: 90 },
      { name: "Vue.js", icon: "💚", level: 85 },
      { name: "TailwindCSS", icon: "🎨", level: 98 },
      { name: "Three.js", icon: "🎮", level: 80 },
      { name: "React Native", icon: "📱", level: 88 }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "💚", level: 90 },
      { name: "Django", icon: "🎯", level: 88 },
      { name: "FastAPI", icon: "🚀", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 90 },
      { name: "MongoDB", icon: "🍃", level: 88 },
      { name: "Redis", icon: "🔴", level: 82 }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "☁️", level: 88 },
      { name: "Docker", icon: "🐳", level: 92 },
      { name: "Kubernetes", icon: "⚙️", level: 85 },
      { name: "Terraform", icon: "🏗️", level: 80 },
      { name: "CI/CD", icon: "🔄", level: 90 },
      { name: "Microservices", icon: "🔗", level: 88 }
    ]
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow", icon: "🧠", level: 88 },
      { name: "PyTorch", icon: "🔥", level: 85 },
      { name: "OpenCV", icon: "👁️", level: 90 },
      { name: "Scikit-learn", icon: "🤖", level: 88 },
      { name: "Pandas", icon: "🐼", level: 92 },
      { name: "LangChain", icon: "🔗", level: 82 }
    ]
  },
  {
    category: "Emerging Technologies",
    skills: [
      { name: "Blockchain", icon: "⛓️", level: 80 },
      { name: "Web3", icon: "🌐", level: 78 },
      { name: "IoT", icon: "📡", level: 90 },
      { name: "Quantum Computing", icon: "⚛️", level: 70 },
      { name: "AR/VR", icon: "🥽", level: 75 },
      { name: "Edge Computing", icon: "📱", level: 82 }
    ]
  }
];