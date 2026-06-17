"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        2000,
        "Project Coordinator",
        2000,
        "React & Next.js Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-xl text-cyan-400 font-medium mb-6"
    />
  );
}