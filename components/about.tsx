"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
          I'm a passionate website developer with over 7 years of experience, specializing in WordPress and modern front-end technologies like Vue.js and Next.js. From building fully custom, animated websites to managing eCommerce platforms, I've led projects for clients across the UAE, USA, Switzerland, and Pakistan—both in-house and remotely. I’ve also played key roles in SEO, performance optimization, and digital marketing campaigns including Google and Meta Ads. Whether it's coding clean interfaces, optimizing for conversions, or leading a team to deliver results, I focus on creating experiences that are both visually striking and business-driven.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning the video editing.
      </p> */}
    </motion.section>
  );
}
