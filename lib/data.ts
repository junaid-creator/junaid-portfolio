import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact,FaAndroid } from "react-icons/fa";
import GulfwayImage from "../app/assets/Gulfway.png";
import ARDImage from "../app/assets/ARD.png";
import EWcargoImage from "../app/assets/EWcargo.png";
import GwAutoImage from "../app/assets/GWauto.png";
import GwDeliveryImage from "../app/assets/gwDelivery.png";
import GwMarketingImage from "../app/assets/GwMarketing.png";
import GwotImage from "../app/assets/gwot.png";
import GwTTImage from "../app/assets/gwtt.png";
import PetologyImage from "../app/assets/Petology.png";
// import creatria from "@/public/creatria.webp";
// import tbtImg from "@/public/tbt.png";
// import rmsImg from "@/public/rms.png";
// import qmsImg from "@/public/qms.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Developer",
    location: "Gulfway Marketing - Dubai",
    description:
      "Design and develop responsive web and mobile applications using React, Next.js, and React Native",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "UI / UX Developer",
    location: "eLife America - Sri Lanka",
    description:
      "Collaborated with designers and developers to build responsive, user-friendly interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Feb - 2023 Sep",
  },
  {
    title: "Front End Developer",
    location: "Cristal Code - Sri Lanka",
    description:
      "Built and optimized cross-platform mobile applications with React Native, ensuring smooth performance, engaging user interfaces, and seamless integration with backend.",
    icon: React.createElement(FaAndroid),
    date: "2022 Jan - 2023 Sep",
  },

] as const;

export const projectsData = [
  {
    title: "Creatria",
    description:
    "Cross-platform app built with React Native, TypeScript, and GraphQL. Focused on frontend UI and smooth user experience.",
  
    tags: ["React Native", "TypeScript", "GraphQL", "Tailwind","Node JS"],
     imageUrl: GulfwayImage,
    projectUrl : "https://gulfwaygroup.ae/"
    
  },
  {
    title: "Text Based Ticketing System",
    description:
    "Web app for creating support tickets via SMS with auto-generated ticket IDs.",


    tags: ["Vue JS", "Nunjucks", "Node JS", "Mongo DB", "Sails JS"],
    imageUrl: ARDImage,
    projectUrl: "https://ardinvestments.com/"
  },
  {
    title: "Rider Management System ",
    description:
    "Rider Management System for onboarding, licenses, assignments, and asset tracking.",  
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: EWcargoImage,
    projectUrl:"https://ewcargo.ae/"
  },
  {
    title: "Queue Management System ",
    description:
    "Queue system with smart tokens and RMS integration to improve flow and cut wait times.",
    
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: GwAutoImage,
    projectUrl:"https://gwauto.ae/"

  },
  {
    title: "Queue Management System ",
    description:
    "Queue system with smart tokens and RMS integration to improve flow and cut wait times.",
    
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: GwDeliveryImage,
    projectUrl:"https://gwdelivery.ae/"

  },
  {
    title: "Queue Management System ",
    description:
    "Queue system with smart tokens and RMS integration to improve flow and cut wait times.",
    
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: GwMarketingImage,
    projectUrl:"https://gwmarketing.ae/"

  },
  {
    title: "Queue Management System ",
    description:
    "Queue system with smart tokens and RMS integration to improve flow and cut wait times.",
    
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: GwotImage,
    projectUrl:"https://gwot.ae/"

  },
  {
    title: "Queue Management System ",
    description:
    "Queue system with smart tokens and RMS integration to improve flow and cut wait times.",
    
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: GwTTImage,
    projectUrl:"https://gwtt.ae/"

  },
  {
    title: "Queue Management System ",
    description:
    "Queue system with smart tokens and RMS integration to improve flow and cut wait times.",
    
    tags: ["React", "Next.js", "node js", "Tailwind", "axios"],
    imageUrl: PetologyImage,
    projectUrl:"https://petology.ae/"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
