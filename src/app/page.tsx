"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaChevronRight,
  FaCamera,
  FaClock,
  FaGraduationCap,
  FaAward,
  FaSpotify,
  FaComments,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";

// Supporting Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import SkillsMarquee from "./components/SkillsMarquee";

const PROJECTS = [
  {
    title: "Kamandanu Jaya Logistik",
    type: "Ongoing Project",
    desc: "Professional company profile website for Logistics. Focused on performance, SEO, and modern UI. Currently in intensive development.",
    link: "#",
    image: "/logistic.png",
    tags: ["TypeScript"],
    isHighlight: false,
    isDevelopment: true,
  },
  {
    title: "PT Kamandanu Jaya Samudera",
    type: "Internship Project",
    desc: "Professional company profile website for a crewing agency. Focused on performance, SEO, and modern UI.",
    link: "https://ptkamandanujayasamudera.com",
    image: "/kamandanu.png",
    tags: ["Next.js", "Tailwind CSS", "Company Profile"],
    isHighlight: true,
  },
  {
    title: "GameStore App",
    type: "Web Application",
    desc: "E-commerce digital game catalog platform built using the Laravel framework.",
    link: "https://github.com/FAJRI2378/gamestore",
    image: "/gamestore.png",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Rasania Mobile",
    type: "Mobile Development",
    desc: "Indonesian food recipe application based on React Native with an interactive search feature.",
    link: "https://github.com/FAJRI2378/Resepku",
    image: "/rasaniaa.png",
    tags: ["React Native", "Expo", "API"],
  },
  {
    title: "Game Pairs",
    type: "Mini Game",
    desc: "Brain-teaser card game (Memory Match) built with pure JavaScript logic.",
    link: "https://fajri2378.itch.io/pairs",
    image: "/pairs.png",
    tags: ["Gdevelop 5"],
  },
  {
    title: "Sokoban Classic",
    type: "Puzzle Game",
    desc: "Implementation of the classic Sokoban puzzle game. Focused on level completion algorithms.",
    link: "https://fajri2378.itch.io/sokoban",
    image: "/sokoban.png",
    tags: ["Gdevelop 5"],
  },
  {
    title: "Bookstore Native",
    type: "Backend Basic",
    desc: "Simple book database management system using Native PHP and MySQL.",
    link: "https://github.com/FAJRI2378/book2",
    image: "/bookstore.png",
    tags: ["PHP Native", "CRUD"],
  },
  {
    title: "Project Dicoding",
    type: "Front End Basic",
    desc: "Web project for the final Dicoding mission to earn a passing certificate.",
    link: "https://github.com/FAJRI2378/dicoding-project",
    image: "/Dicoding.png",
    tags: ["HTML"],
  },
];

const EDUCATION = [
  {
    year: "2023 - 2026",
    school: "SMK Negeri 21 Jakarta",
    major: "Software Engineering (RPL)",
  },
  { year: "2020 - 2023", school: "SMP Negeri 221 Jakarta", major: "" },
  { year: "2014 - 2020", school: "SDN Sunter Agung 03 Pagi", major: "" },
];

const CERTIFICATES = [
  { title: "3rd Place Purwa", issuer: "Paskibra", image: "/Sertifikat1.png" },
  { title: "3rd Place Madya", issuer: "Paskibra", image: "/sertifikat2.png" },
  { title: "1st Place Purwa", issuer: "Paskibra", image: "/sertifikat3.png" },
  { title: "3rd Place Mula", issuer: "Paskibra", image: "/sertifikat4.png" },
  {
    title: "Certificate of Completion: Basic Web Programming",
    issuer: "Dicoding",
    image: "/sertifikat6.png",
    link: "https://www.dicoding.com/certificates/0LZ05Q2M3X65",
  },
  {
    title: "Certificate of Completion: Basic Web Programming",
    issuer: "USK",
    image: "/usk-preview.png",
  },
];

const PHOTOS = ["/p1.jpg", "/p2.jpg", "/p3.jpg"];

const SOCIALS = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/armntrifjri",
    color: "bg-pink-400",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/arman-tri-fajri-2846a7334",
    color: "bg-blue-400",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/FAJRI2378",
    color: "bg-gray-300",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/6287872594546",
    color: "bg-green-400",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    href: "https://vercel.com/fajri2378s-projects",
    color: "bg-white",
  },
  {
    name: "Spotify",
    icon: <FaSpotify />,
    href: "https://open.spotify.com/playlist/6JLfBvd6G8GVJw1LYENT8R",
    color: "bg-green-500",
  },
  {
    name: "Ngl",
    icon: <FaComments />,
    href: "https://ngl.link/armntrifjrii",
    color: "bg-yellow-400",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f0f0f0] min-h-screen text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
      {/* Keeping the particles wrapper to blend with neubrutalism */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-difference">
        <ParticlesBackground />
      </div>

      <Navbar />

      <main className="relative z-10 px-4 sm:px-8 pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col items-center text-center space-y-6 sm:space-y-8 mt-4 sm:mt-10">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 border-4 border-black bg-[#A3E635] text-black text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 bg-black"></span>
            </span>
            Available for Projects
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-black leading-[1.2] sm:leading-[1.1] uppercase min-h-[80px] sm:min-h-[auto]">
            <Typewriter
              words={[
                "Hello, I am Arman Tri Fajri",
                "Front End Developer Intern",
                "SMK Negeri 21 Jakarta",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="max-w-2xl text-black font-bold text-base sm:text-xl leading-relaxed border-b-4 border-black pb-4 px-2">
            Focused on creating clean, responsive web interfaces and delivering exceptional user experiences.
          </p>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section
          id="about"
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-6 sm:py-10"
        >
          <div className="relative flex justify-center md:justify-end md:pr-10">
            {/* Brutalist style photo */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] bg-white overflow-hidden transform hover:-rotate-3 transition-transform duration-300">
              <Image
                src="/fajri.jpg"
                alt="Arman Tri Fajri"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://placehold.co/400x400/000000/FFF?text=Arman";
                }}
              />
            </div>
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight border-b-4 border-black inline-block pb-2">
              About Me
            </h2>

            <div className="space-y-4 text-black text-base sm:text-lg font-medium leading-relaxed bg-[#FFC900] p-5 sm:p-8 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <p>
                Hello! My name is{" "}
                <span className="font-black uppercase text-lg sm:text-xl bg-white px-2 border-2 border-black inline-block mt-1 sm:mt-0">
                  Arman Tri Fajri
                </span>
                , a student at <strong>SMK Negeri 21 Jakarta</strong> majoring in
                Software Engineering. I live in Sunter Jaya.
              </p>
              <p>
                I have a great interest in software development, web, and mobile technologies. My goal is to become a professional{" "}
                <span className="font-black bg-[#A3E635] px-2 border-2 border-black inline-block mt-1">
                  Front End Developer
                </span>
                .
              </p>
              <div className="mt-4 pt-4 border-t-4 border-black flex flex-col">
                <span className="font-black uppercase text-sm sm:text-base">Location</span>
                <span className="font-bold text-sm sm:text-base">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section
          id="skills"
          className="space-y-6 sm:space-y-8 py-8 sm:py-10 bg-[#FF90E8] border-y-4 border-black -mx-4 sm:-mx-8 px-4 sm:px-8 shadow-[0_6px_0px_rgba(0,0,0,1)] sm:shadow-[0_8px_0px_rgba(0,0,0,1)]"
        >
          <div className="text-center py-4 sm:py-6">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
              Tech Stack
            </h2>
          </div>
          <div className="border-4 border-black bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-8 sm:mb-10 overflow-hidden py-4">
            <SkillsMarquee />
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="education" className="space-y-8 sm:space-y-10 py-6 sm:py-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight flex items-center gap-3 sm:gap-4 bg-white border-4 border-black px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <FaGraduationCap /> Education
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#00F0FF] border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div>
                  <h3 className="font-black text-black text-xl sm:text-2xl uppercase">
                    {edu.school}
                  </h3>
                  {edu.major && (
                    <p className="text-black font-bold text-sm sm:text-lg mt-1 sm:mt-2 bg-white inline-block px-2 border-2 border-black">
                      {edu.major}
                    </p>
                  )}
                </div>
                <div className="mt-4 sm:mt-0 w-full sm:w-auto text-right sm:text-left">
                  <span className="text-black font-black text-sm sm:text-lg bg-[#FFC900] px-3 sm:px-4 py-1 sm:py-2 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] whitespace-nowrap inline-block">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="space-y-8 sm:space-y-12 py-6 sm:py-10">
          <div className="text-center space-y-4 px-2">
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight inline-block border-b-4 border-black pb-2">
              Featured Projects
            </h2>
            <p className="text-black font-bold text-sm sm:text-base max-w-lg mx-auto bg-white border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              A collection of works ranging from industrial projects (internships) to personal applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <article
                key={index}
                className="group relative bg-white border-4 border-black p-5 sm:p-6 transition-all duration-300 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col"
              >
                {project.isHighlight && (
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 sm:px-4 py-1 sm:py-2 bg-[#FFC900] border-4 border-black text-black text-[10px] sm:text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20">
                    INTERNSHIP PROJECT
                  </div>
                )}
                {project.isDevelopment && (
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 px-3 sm:px-4 py-1 sm:py-2 bg-[#FF4F00] text-white border-4 border-black text-[10px] sm:text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2">
                    <FaClock className="animate-spin-slow" /> IN PROGRESS
                  </div>
                )}

                <div
                  className={`relative h-40 sm:h-48 w-full mb-4 sm:mb-6 overflow-hidden border-4 border-black bg-gray-200 ${
                    project.isDevelopment ? "grayscale" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://placehold.co/600x400/000/FFF?text=${project.isDevelopment ? "Developing..." : "Preview"}`;
                    }}
                  />
                </div>

                <div className="space-y-3 sm:space-y-4 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-black text-black uppercase leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-black font-medium text-sm sm:text-base leading-relaxed line-clamp-3 border-l-4 border-black pl-3 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-2 py-1 bg-[#A3E635] border-2 border-black font-bold uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 sm:pt-6 mt-auto">
                    {project.isDevelopment ? (
                      <div className="block w-full text-center py-2 sm:py-3 bg-gray-300 border-4 border-black text-black text-sm sm:text-base font-black uppercase cursor-not-allowed">
                        COMING SOON
                      </div>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-2 sm:py-3 bg-[#FF90E8] border-4 border-black text-black text-sm sm:text-base font-black uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all flex justify-center items-center gap-2"
                      >
                        VIEW PROJECT <FaChevronRight size={12} className="sm:text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- CERTIFICATES SECTION --- */}
        <section id="certificates" className="space-y-8 sm:space-y-12 py-6 sm:py-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight flex items-center justify-center gap-3 sm:gap-4">
              <FaAward /> Certificates
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((cert, idx) => (
              <div
                key={idx}
                className="group relative bg-[#00F0FF] border-4 border-black p-3 sm:p-4 transition-all duration-300 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                <div className="relative aspect-[4/3] w-full mb-3 sm:mb-4 overflow-hidden border-4 border-black bg-white">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://placehold.co/600x450/000/FFF?text=Certificate";
                    }}
                  />
                  <a
                    href={cert.link || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black text-black bg-[#A3E635] border-4 border-black px-3 sm:px-4 py-2 uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                      View Details
                    </span>
                  </a>
                </div>
                <div className="text-left bg-white border-4 border-black p-3 space-y-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-base sm:text-lg font-black text-black uppercase">
                    {cert.issuer}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-black border-t-2 border-dashed border-black pt-2">
                    {cert.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PHOTOGRAPHY SECTION --- */}
        <section
          id="photography"
          className="space-y-8 sm:space-y-12 py-10 sm:py-16 px-4 sm:px-12 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)]"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase flex items-center justify-center gap-3 sm:gap-4">
              <FaCamera /> Photography
            </h2>
            <p className="text-black font-bold max-w-xl mx-auto bg-[#FFC900] border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase text-xs sm:text-sm">
              “Capturing moments through the lens is my way of honing creativity outside lines of code.”
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((src, idx) => (
              <div
                key={idx}
                className="group relative border-4 border-black bg-[#F472B6] p-2 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
              >
                <div className="w-full border-4 border-black overflow-hidden bg-white relative">
                  <Image
                    src={src}
                    alt={`Arman's photography ${idx + 1}`}
                    width={800}
                    height={1000}
                    className="w-full h-auto max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://placehold.co/800x1000/000/FFF?text=Photo";
                    }}
                  />
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white border-4 border-black px-3 py-1 sm:px-4 sm:py-2 font-black uppercase text-[10px] sm:text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Captured by Arman
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT & SOCIALS --- */}
        <section
          id="contact"
          className="relative p-6 sm:p-16 text-center border-4 border-black bg-[#FF90E8] shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] mt-12 sm:mt-20"
        >
          <h2 className="text-3xl sm:text-6xl font-black text-black uppercase mb-8 sm:mb-12 bg-white inline-block px-4 sm:px-6 py-2 sm:py-3 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            Let's Collaborate?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
            {SOCIALS.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 sm:gap-4 w-[28%] sm:w-auto"
              >
                <div
                  className={`text-3xl sm:text-4xl p-4 sm:p-5 border-4 border-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all ${item.color}`}
                >
                  {item.icon}
                </div>
                <span className="font-black uppercase tracking-widest text-black bg-white px-2 py-1 border-2 border-black text-[10px] sm:text-base text-center w-full sm:w-auto overflow-hidden text-ellipsis">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        /* Utility class untuk menyembunyikan scrollbar di Navbar Mobile */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}