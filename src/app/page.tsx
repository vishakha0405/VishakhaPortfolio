"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import TypingText from "./typingtext";

export default function Home() {
  return (
    <main className="px-4 md:px-6 text-center overflow-x-hidden">

      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-4 py-10">

  {/* Left Side */}
  <div className="max-w-xl text-center md:text-left w-full">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
  Vishakha Batham
  </h1>
  <div className="mb-6 text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold">
  <TypingText />
</div>
<div className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold mb-8">
  Frontend Developer • Project Coordinator
</div>
  
<div className="flex flex-wrap gap-4 justify-center md:justify-start">

  <a
    href="https://github.com/vishakha0405"
    target="_blank"
    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
  >
    <FaGithub />
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/vishakha-batham-17876827a/"
    target="_blank"
    className="flex items-center gap-2 px-5 py-3 rounded-lg border hover:border-blue-500"
  >
    <FaLinkedin />
    LinkedIn
  </a>

  <a
    href="/Resume.pdf"
    target="_blank"
    className="flex items-center gap-2 px-5 py-3 rounded-lg border hover:border-blue-500"
  >
    <HiDocumentText />
    Resume
  </a>

</div>

</div>

  
  
{/* Right Side */}
<div className="relative mx-auto w-fit">

  {/* Badges */}
  <div className="hidden md:block absolute top-10 -left-16 px-4 py-2 rounded-full border border-cyan-400 bg-black z-20">
    ⚛ React
  </div>

  <div className="hidden md:block absolute top-12 -right-14 px-4 py-2 rounded-full border border-cyan-400 bg-black z-20">
    ▲ Next.js
  </div>

  <div className="hidden md:block absolute top-40 -left-20 px-4 py-2 rounded-full border border-cyan-400 bg-black z-20">
    🔷 TypeScript
  </div>

  <div className="hidden md:block absolute top-60 -right-16 px-4 py-2 rounded-full border border-cyan-400 bg-black z-20">
    🔥 Git
  </div>

  <div className="hidden md:block absolute bottom-32 -left-16 px-4 py-2 rounded-full border border-cyan-400 bg-black z-20">
    🎨 UI/UX
  </div>

  <div className="hidden md:block absolute bottom-10 -right-14 px-4 py-2 rounded-full border border-cyan-400 bg-black z-20">
    💨 Tailwind
  </div>

  <div className="w-[300px] sm:w-[350px] md:w-[450px]">
    <Image
      src="/pfp.png"
      alt="Vishakha"
      width={350}
      height={450}
      priority
      className="w-full h-auto rounded-3xl border border-blue-500 relative z-10 hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(59,130,246,0.5)]"
    />
  </div>

</div>

</section>
    
      {/* About Section */}
<section
  id="about"
  className="py-24 max-w-6xl mx-auto"
>
  <h2 className="text-3xl md:text-5xl font-bold mb-14 flex items-center justify-center gap-2">
  <span>👋</span>
  <span>About Me</span>
  </h2>

  <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-14 px-2">
    Computer Science graduate passionate about building modern web applications,
    creating responsive user interfaces, and helping teams stay organized through
    effective project coordination and collaboration.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Frontend Card */}
    <div className="border border-gray-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

      <h3 className="text-2xl font-bold mb-4">
        💻 Frontend Developer
      </h3>

      <p className="text-gray-400 mb-4">
        Building responsive and user-friendly web applications
        using React, Next.js, TypeScript and Tailwind CSS.
      </p>

      <ul className="text-left text-gray-300 space-y-2">
        <li>✓ React & Next.js Development</li>
        <li>✓ Responsive UI Design</li>
        <li>✓ TypeScript & JavaScript</li>
        <li>✓ Tailwind CSS Styling</li>
      </ul>

    </div>

    {/* Coordinator Card */}
    <div className="border border-gray-700 rounded-2xl p-8 hover:border-purple-400 hover:-translate-y-2 transition-all duration-300">

      <h3 className="text-2xl font-bold mb-4">
        📋 Project Coordinator
      </h3>

      <p className="text-gray-400 mb-4">
        Skilled in planning, documentation, communication
        and coordinating tasks across teams.
      </p>

      <ul className="text-left text-gray-300 space-y-2">
        <li>✓ Requirement Gathering</li>
        <li>✓ Team Collaboration</li>
        <li>✓ Project Documentation</li>
        <li>✓ Task Management</li>
      </ul>

    </div>

  </div>

  {/* Stats Cards */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

    <div className="border rounded-xl p-6 hover:border-cyan-400 transition">
      <h3 className="text-3xl font-bold text-cyan-400">
        5+
      </h3>
      <p className="text-gray-400">
        Projects
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:border-blue-400 transition">
      <h3 className="text-3xl font-bold text-blue-400">
        10+
      </h3>
      <p className="text-gray-400">
        Technologies
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:border-purple-400 transition">
      <h3 className="text-3xl font-bold text-purple-400">
        3
      </h3>
      <p className="text-gray-400">
        Months Internship
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:border-pink-400 transition">
      <h3 className="text-3xl font-bold text-pink-400">
        B.Tech
      </h3>
      <p className="text-gray-400">
        CSE Graduate
      </p>
    </div>

  </div>

</section>
 {/* Skilss Section */}
<section
  id="skills"
  className="mt-24 max-w-6xl mx-auto text-center"
>
  <h2 className="text-3xl md:text-5xl font-bold mb-12">
  Skills
</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">

  {[
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Git",
    "JavaScript",
    "HTML",
    "CSS",
    "UI/UX",
    "Project Management",
  ].map((skill) => (
    <div
      key={skill}
      className="border rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
    >
      {skill}
    </div>
  ))}

</div>
</section>

      {/* Projects Section */}
<section
  id="projects"
  className="mt-32 text-center max-w-7xl mx-auto"
>
  <h2 className="text-3xl  md:text-5xl font-bold mb-12">
  🚀 Projects
</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Labify */}
    <div
  className="border border-gray-700 rounded-xl overflow-hidden
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
  hover:-translate-y-2
  transition-all duration-300"
>
      <Image
  src="/labify.jpg"
  alt="Labify"
  width={600}
  height={300}
  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
/>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          Labify
        </h3>

        <p className="text-gray-400 mb-4">
          Healthcare lab test booking platform allowing users
          to search labs, compare packages and book tests online.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">

  <span className="text-xs border px-3 py-1 rounded-full">
    Next.js
  </span>

  <span className="text-xs border px-3 py-1 rounded-full">
    TypeScript
  </span>

  <span className="text-xs border px-3 py-1 rounded-full">
    Tailwind CSS
  </span>

</div>

        <div className="flex justify-center gap-4">
          <a
            href="https://labifypro.vercel.app/"
            target="_blank"
            className="underline"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/vishakha0405/Labify-web-application"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Guest List */}
   <div
  className="border border-gray-700 rounded-xl overflow-hidden
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
  hover:-translate-y-2
  transition-all duration-300"
>
   
   
      <Image
        src="/guestlist.jpg"
        alt="Guest List App"
        width={600}
        height={300}
        className="w-full h-48 object-cover hover:scale-110 transition duration-500"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          Guest List App
        </h3>

        <p className="text-gray-400 mb-4">
          Guest management application with CRUD operations,
          add, edit and delete functionality.
        </p>

        <a
          href="https://github.com/vishakha0405/Guest-list-app"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* Shopping List */}
  <div
  className="border border-gray-700 rounded-xl overflow-hidden
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
  hover:-translate-y-2
  transition-all duration-300"
>
      <Image
        src="/shopping.png"
        alt="Shopping List"
        width={600}
        height={300}
        className="w-full h-48 object-cover hover:scale-110 transition duration-500"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          Shopping List App
        </h3>

        <p className="text-gray-400 mb-4">
          Smart shopping list application with categories,
          voice support and local storage.
        </p>

        <a
          href="https://github.com/vishakha0405"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </div>

  </div>
</section>
{/* Experience Section */}
<section
  id="experience"
  className="mt-32 max-w-6xl mx-auto text-center"
>
<h2 className="text-3xl md:text-5xl font-bold mb-12">
  💼 Experience
</h2>

  <div className="border rounded-2xl p-6 md:p-8 text-left hover:border-cyan-400 transition-all duration-300">

    <h3 className="text-2xl font-bold">
      Full Stack Developer Intern
    </h3>

    <p className="text-blue-400 mb-2">
      RamCode | Feb 2026 – Apr 2026
    </p>

    <ul className="space-y-3 text-gray-300 mt-4">
      <li>✓ Developed responsive web application features using modern technologies.</li>
      <li>✓ Built user-friendly interfaces and improved user experience.</li>
      <li>✓ Worked with databases and backend integration.</li>
      <li>✓ Collaborated using Git and GitHub version control.</li>
      <li>✓ Participated in testing, debugging and deployment activities.</li>
    </ul>

  </div>

</section>
{/* Education Section */}
<section
  id="education"
  className="mt-32 max-w-6xl mx-auto text-center"
>
   <h2 className="text-3xl md:text-5xl font-bold mb-12">
  🎓 Education
</h2>

  <div className="border rounded-2xl p-6 md:p-8">

    <h3 className="text-2xl font-bold">
      B.Tech in Computer Science Engineering
    </h3>

    <p className="text-blue-400">
      Parul University
    </p>

    <p className="text-gray-400 mt-3">
      Graduated in 2026
    </p>

  

  </div>

</section>
      {/* Contact Section */}
      <section
        id="contact"
        className="mt-32 mb-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="mb-3">
          📧 vishakhabatham54@gmail.com
        </p>

        <p className="mb-6">
          📍 Ratlam, Madhya Pradesh, India
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/vishakha0405"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vishakha-batham-17876827a/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="py-10 text-gray-400">
        Designed & Built by Vishakha Batham ❤️
      </footer>

    </main>
  );
}