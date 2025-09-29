'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { FaInstagram, FaLinkedin, FaGithub, FaItchIo, FaSpotify, FaWhatsapp } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import SkillsMarquee from './components/SkillsMarquee';

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 min-h-screen px-4 sm:px-6 md:px-8 pt-32 pb-8 text-gray-200 font-sans">
        {/* Hero */}
        <div className="text-center animate-fade-in-down shadow-xl rounded-xl p-10 bg-slate-800/80 max-w-2xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
          >
            <Typewriter
              words={['Halo, Saya Arman Tri Fajri 👋', 'WELCOME TO MY PORTFOLIO!']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Pelajar SMK Negeri 21 Jakarta — RPL (Rekayasa Perangkat Lunak)
          </p>
        </div>

        {/* About */}
        <div id="about" className="mt-20 max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">About Me</h2>
          <Image
            src="/fajri.jpg"
            alt="Foto Arman Fajri"
            width={160}
            height={160}
            className="mx-auto w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="text-base sm:text-lg text-gray-300 border p-6 rounded-2xl bg-slate-800/80 shadow-xl">
            Halo! Nama saya <b>Arman Tri Fajri</b>, pelajar dari <b>SMK Negeri 21 Jakarta</b> jurusan RPL. 
            Saya tinggal di Sunter Jaya dan memiliki minat besar dalam pengembangan perangkat lunak, teknologi web, serta mobile. 
            Cita-cita saya adalah menjadi seorang <b>Front End Developer</b>.
          </div>
        </div>

        {/* Skills */}
        <SkillsMarquee />

        {/* Education */}
        <div id="education" className="mt-20 text-center p-6 max-w-4xl mx-auto bg-slate-800/60 rounded-xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">Education</h2>
          <ul className="space-y-4 text-left text-gray-300">
            <li>
              <b>2023 – 2026</b> <br />
              SMK Negeri 21 Jakarta — RPL (Rekayasa Perangkat Lunak)
            </li>
            <li>
              <b>2020 – 2023</b> <br />
              SMP Negeri 221 Jakarta
            </li>
            <li>
              <b>2014 – 2020</b> <br />
              SDN Sunter Agung 03 Pagi
            </li>
          </ul>
        </div>

       {/* Projects */}
<div id="projects" className="mt-20 text-center p-6 max-w-7xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight text-gray-100">Projects</h2>
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
    {[
      { title: 'GameStore App', desc: 'Aplikasi web jual-beli game berbasis Laravel.', link: 'https://github.com/FAJRI2378/gamestore', image: '/gamestore.png' },
      { title: 'Rasania (Mobile)', desc: 'Aplikasi resep makanan dengan React Native.', link: 'https://github.com/FAJRI2378/Resepku', image: '/rasaniaa.png' },
      { title: 'Game Pairs', desc: 'Game sederhana dengan GDevelop.', link: 'https://fajri2378.itch.io/pairs', image: '/pairs.png' },
      { title: 'Sokoban', desc: 'Game Sokoban klasik dengan GDevelop.', link: 'https://fajri2378.itch.io/sokoban', image: '/sokoban.png' },
      { title: 'Platformer', desc: 'Game Platformer dengan GDevelop.', link: 'https://fajri2378.itch.io/game-platform', image: '/platform.png' },
    ].map((project, index) => (
      <div
        key={index}
        className="bg-slate-800/70 border border-white/10 text-gray-200 rounded-2xl p-6 text-left transition-transform duration-300 hover:scale-[1.03] shadow-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[300px] object-contain rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.desc}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Lihat Proyek →
        </a>
      </div>
    ))}
  </div>
</div>


        {/* Certificates */}
<div id="certificates" className="mt-20 text-center p-6 max-w-6xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">
    Certificates
  </h2>
  <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 px-4">
    Beberapa sertifikat yang saya dapatkan selama sekolah:
  </p>

  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
    {[
      { title: 'Paskibra', image: '/sertifikat1.png' },
      { title: 'Paskibra', image: '/sertifikat2.png' },
      { title: 'Paskibra', image: '/sertifikat3.png' },
      { title: 'Paskibra', image: '/sertifikat4.png' },
      { 
        title: 'Dicoding', 
        image: '/sertifikat6.png', 
        url: 'https://www.dicoding.com/certificates/0LZ05Q2M3X65' // ganti link asli
      },
    ].map((cert, idx) => (
      <div
        key={idx}
        className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-slate-800/60 p-4"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-auto max-h-[400px] object-contain rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-100">{cert.title}</h3>

        {/* Tampilkan link hanya kalau ada url */}
        {cert.url && (
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline block mt-1"
          >
            Lihat Sertifikat
          </a>
        )}
      </div>
    ))}
  </div>
</div>



       {/* Photography */}
<div id="photography" className="mt-20 text-center p-6 rounded-xl max-w-6xl mx-auto bg-slate-800/60 shadow-lg backdrop-blur-md">
  <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">Photography</h2>
  <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 px-4">
    Selain ngoding, saya juga punya hobi fotografi. Berikut hasil jepretan saya:
  </p>
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
    {['/p1.jpg', '/p2.jpg', '/p3.jpg'].map((src, idx) => (
      <div
        key={idx}
        className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
      >
        <img
          src={src}
          alt={`Foto karya ${idx + 1}`}
          className="w-full h-auto max-h-[400px] object-contain rounded-lg"
        />
      </div>
    ))}
  </div>
</div>


        {/* Social Media */}
        <div id="social-media" className="mt-20 text-center p-6 rounded-xl max-w-4xl mx-auto bg-slate-800/60 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">Contact & Social Media</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-4">
            Kamu bisa terhubung dengan saya lewat platform berikut:
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-2xl sm:text-3xl">
            {[
              { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/armntrifjri', color: 'text-pink-500' },
              { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/arman-tri-fajri-2846a7334', color: 'text-blue-600' },
              { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/FAJRI2378', color: 'text-white' },
              { name: 'Itch.io', icon: <FaItchIo />, href: 'https://itch.io/profile/fajri2378', color: 'text-red-600' },
              { name: 'Vercel', icon: <SiVercel />, href: 'https://vercel.com/fajri2378s-projects', color: 'text-white' },
              { name: 'NGL', icon: <RiQuestionAnswerFill />, href: 'https://ngl.link/armntrifjrii', color: 'text-purple-500' },
              { name: 'Spotify', icon: <FaSpotify />, href: 'https://open.spotify.com/playlist/6JLfBvd6G8GVJw1LYENT8R', color: 'text-green-500' },
              { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/6287872594546', color: 'text-green-500' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
              >
                <div className={`${item.color} text-3xl`}>{item.icon}</div>
                <p className="text-sm text-gray-300">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
