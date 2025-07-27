import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact,FaAndroid } from "react-icons/fa";
import { FaWordpress } from 'react-icons/fa'; 
import { FaNetworkWired } from 'react-icons/fa';
import GulfwayImage from "../app/assets/Gulfway.png";
import ARDImage from "../app/assets/ARD.png";
import EWcargoImage from "../app/assets/EWcargo.png";
import GwAutoImage from "../app/assets/GWauto.png";
import GwDeliveryImage from "../app/assets/gwDelivery.png";
import GwMarketingImage from "../app/assets/GwMarketing.png";
import GwotImage from "../app/assets/gwot.png";
import GwTTImage from "../app/assets/gwtt.png";
import PetologyImage from "../app/assets/Petology.png";
import NovaGenetoxImage from "../app/assets/NovaGenetox.png";
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
    title: "Wordpress Developer",
    location: "Gulfway Marketing - Dubai",
    description:
      "Create fully customized, animated WordPress websites with responsive design, strong security, and also handled digital marketing to boost visibility and brand growth.",
    icon: React.createElement(FaWordpress),
    date: "2023 Dec - Present",
  },
  {
    title: "Team Lead",
    location: "Hails & Gadgets - Pakistan",
    description:
      "Led IT team to 20–30 daily sales in a month, built stylish vaping stores with advanced features, and improved SEO for better visibility and user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Feb - 2023 Oct",
  },
  {
    title: "Frontend Developer",
    location: "BEWHY - Switzerland(Remote)",
    description:
      "Built pixel-perfect HMS frontend modules in Vue.js & Sass, streamlined dev with Docker & Bitbucket, and crafted a responsive WordPress version of HMS for all devices.",
    icon: React.createElement(FaAndroid),
    date: "2021 Nov - 2023 Jan",
  },
  {
    title: "Website Developer",
    location: "Nova Genetox - USA(Remote)",
    description:
      "Developed stylish WordPress websites for Nova genetox and their clients, primarily using Divi and Elementor to deliver visually appealing and user-friendly designs.",
    icon: React.createElement(FaAndroid),
    date: "2021 April - 2021 Oct",
  },
  {
    title: "Website Developer",
    location: "Zillion-e-Learning - Pakistan",
    description:
      "Designed SEO-friendly sites with smooth checkouts, led timely project delivery, created visuals, guided team, and worked on Zillion LMS using LearnDash.",
    icon: React.createElement(FaAndroid),
    date: "2020 Jan - 2021 March",
  },
  {
    title: "Technical Associate",
    location: "Highrise Technologies - Pakistan",
    description:
      "Provided tech support, worked with IBM security tools, VMware, RHEL, and Cisco switches. Managed group accounts, access rights, security policies, and network backups.",
    icon: React.createElement(FaNetworkWired),
    date: "2021 Jan - 2019 Dec",
  },

] as const;

export const projectsData = [
  {
    title: "Gulf Way Group",
    description:
    "Gulf Way is a rising UAE brand with 5+ years of success in logistics, retail, oil, media, marketing & auto industries, building a strong presence and driving growth across all emirates.",
  
    tags: [],
     imageUrl: GulfwayImage,
    projectUrl : "https://gulfwaygroup.ae/"
    
  },
  {
    title: "ARD Investments",
    description:
    "ARD Investments fuels growth by strategically investing in real estate, logistics, IT, and mobility—shaping industries and delivering sustainable value across the UAE and beyond.",
    tags: [],
    imageUrl: ARDImage,
    projectUrl: "https://ardinvestments.com/"
  },
  {
    title: "Emirates Way Cargo",
    description:
    "Emirates Way offers fast, secure moving and transport across the UAE—residential, office, furniture, heavy/light trucks, refrigerated goods, motorcycles, raw materials, and animal feed.",  
    tags: [],
    imageUrl: EWcargoImage,
    projectUrl:"https://ewcargo.ae/"
  },
  {
    title: "GW Auto",
    description:
    "Trusted bike and vehicle service offering expert repairs and maintenance for all brands. Skilled techs ensure quality, reliability, and affordability to keep you road-ready.",
    
    tags: [],
    imageUrl: GwAutoImage,
    projectUrl:"https://gwauto.ae/"

  },
  {
    title: "GW Delivery",
    description:
    "Gulf Way Delivery Services offers reliable, secure, and timely delivery across the UAE. With a professional fleet, we provide tailored solutions for businesses, ensuring seamless logistics and customer satisfaction.",
    
    tags: [],
    imageUrl: GwDeliveryImage,
    projectUrl:"https://gwdelivery.ae/"

  },
  {
    title: "GW Marketing",
    description:
    "Gulf Way Marketing inspires bold ideas, innovates with tech, and drives growth. We create sleek websites, apps, AI tools, and custom software to empower your business.",
    
    tags: [],
    imageUrl: GwMarketingImage,
    projectUrl:"https://gwmarketing.ae/"

  },
  {
    title: "GW Oil Trading",
    description:
    "Gulf Way Oil Trading, part of Gulf Way Group, is a top UAE lubricant supplier offering high-quality synthetic engine oils. ISO-certified, committed to quality and customer satisfaction.",
    
    tags: [],
    imageUrl: GwotImage,
    projectUrl:"https://gwot.ae/"

  },
  {
    title: "GW Travel & Tourism",
    description:
    "Gulf Way Travel offers Hajj & Umrah, ticketing, airport transfers, UAE tours, insurance & more—complete travel solutions for a smooth, memorable journey with expert care.",
    
    tags: [],
    imageUrl: GwTTImage,
    projectUrl:"https://gwtt.ae/"

  },
  {
    title: "Petology",
    description:
    "At Petology, we treat your pets like family—offering personalized, compassionate care to ensure they get the best treatment with love, trust, and professional attention.",
    
    tags: [],
    imageUrl: PetologyImage,
    projectUrl:"https://petology.ae/"

  },
  {
    title: "Nova Geneox",
    description:
    "Nova Genetox offers pain management, women’s health, hereditary disease management, and cancer genomics testing, delivering personalized, advanced healthcare solutions.",
  
    tags: [],
     imageUrl: NovaGenetoxImage,
    projectUrl : "https://novadxlabs.com/"
    
  },
] as const;

export const skillsData = [
  "Wordpress",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
] as const;
