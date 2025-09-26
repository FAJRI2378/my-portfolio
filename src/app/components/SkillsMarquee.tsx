"use client"
import Marquee from "react-fast-marquee"

export default function SkillsMarquee() {
  const skills = [
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      whiteBg: true,
    },
    {
      name: "Laravel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      whiteBg: true, // 🔥 ditambahkan biar lebih jelas
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "React Native",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "GDevelop",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/GDevelop_Logo.png",
      whiteBg: true,
    },
  ]

  return (
    <div className="mt-20 text-center max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">
        Skills
      </h2>
      <Marquee gradient={false} speed={50}>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-700/50 px-4 py-3 rounded-lg shadow-md mx-4"
          >
            <div
              className={`w-12 h-12 mb-2 flex items-center justify-center ${
                skill.whiteBg ? "bg-white rounded-lg p-1" : ""
              }`}
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="max-w-full max-h-full"
              />
            </div>
            <span className="text-gray-200 text-sm">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
