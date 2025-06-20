'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-4 sm:px-6 md:px-8 py-8 bg-gradient-to-br from-gray-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white">

        {/* Hero Section */}
        <div className="text-center animate-fade-in-down">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <Typewriter
              words={['Halo, Saya Arman Fajri 👋', 'Welcome to my Portfolio!']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Saya adalah seorang pelajar dari SMKN 21 Jakarta.
          </p>
        </div>

        {/* About */}
        <div id="about" className="mt-20 max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
          <img
            src="/fajri.jpg"
            alt="Foto Arman Fajri"
            className="mx-auto w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover mb-4 shadow-lg"
          />
          <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <Typewriter
              words={[
                'Halo! Nama saya Arman Tri Fajri, seorang pelajar dari SMK Negeri 21 Jakarta yang mengambil jurusan RPL. Saya tinggal di Sunter Jaya, dan memiliki minat besar dalam pengembangan perangkat lunak dan teknologi web. Saya bercita-cita menjadi developer profesional.'
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* Social Media */}
        <div id="social-media" className="mt-20 text-center animate-fade-in-down">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Social Media</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Kamu bisa menemukan saya di beberapa platform berikut:
          </p>
          <div className="flex justify-center gap-10 text-2xl sm:text-3xl">
            <a href="https://instagram.com/armn_" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:scale-110 transition">
              <FaGithub />
            </a>
          </div>
        </div>

       <div id="projects" className="mt-20 text-center">
  <h2 className="text-3xl font-semibold mb-8">Last Projects</h2>
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "GameStore App",
        desc: "Aplikasi web untuk menjual dan membeli game digital berbasis Next.js dan Laravel.",
        link: "https://github.com/username/gamestore",
        image: "/gamestore.jpg"
      },
      {
        title: "TodoList Mobile",
        desc: "Aplikasi mobile menggunakan React Native untuk mengelola aktivitas harian.",
        link: "https://github.com/username/todolist-mobile",
        image: "/todolist.jpg"
      },
      {
        title: "Portfolio Website",
        desc: "Website portofolio pribadi ini dibuat menggunakan Next.js dan Tailwind CSS.",
        link: "https://github.com/username/portfolio",
        image: "/portfolio.jpg"
      }
    ].map((project, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-left transition-transform duration-300 hover:scale-105"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Lihat Proyek →
        </a>
      </div>
    ))}
  </div>
</div>


        {/* Sertifikat */}
        <div id="sertifikat" className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Sertifikat</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {[
              { src: "/sertifikat1.jpg", desc: "Sertifikat Pelatihan Web Development dari Dicoding" },
              { src: "/sertifikat2.jpg", desc: "Sertifikat Frontend Next.js dari Program X" },
              { src: "/sertifikat3.jpg", desc: "Sertifikat Desain UI/UX Dasar dari CodePolitan" }
            ].map((sertif, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
                <img src={sertif.src} alt={`Sertifikat ${idx + 1}`} className="w-full h-56 object-cover rounded-md mb-4" />
                <p className="text-gray-700 dark:text-gray-300">{sertif.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
