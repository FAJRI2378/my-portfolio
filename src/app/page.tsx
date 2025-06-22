'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { FaInstagram, FaLinkedin, FaGithub, FaItchIo, FaSpotify } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />

     <main className="relative z-10 min-h-screen px-4 sm:px-6 md:px-8 pt-32 pb-8 bg-black/90 text-gray-200 font-sans">

        {/* Hero Section */}
        <div className="text-center animate-fade-in-down shadow-xl rounded-xl p-10 bg-slate-800/80 max-w-2xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
          >
            <Typewriter
              words={['Halo, Saya Arman Tri Fajri 👋', 'WELCOME TO MY PORTOFOLIO!']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Saya adalah seorang pelajar dari SMKN 21 Jakarta.
          </p>
        </div>

        {/* About */}
        <div id="about" className="mt-20 max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">
            About Me
          </h2>
          <img
            src="/fajri.jpg"
            alt="Foto Arman Fajri"
            className="mx-auto w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="text-base sm:text-lg text-gray-300 border p-6 rounded-2xl bg-slate-800/80 transition-transform duration-300 hover:scale-[1.02] shadow-xl">
            <Typewriter
              words={['Halo! Nama saya Arman Tri Fajri, seorang pelajar dari SMK Negeri 21 Jakarta yang mengambil jurusan RPL. Saya tinggal di Sunter Jaya, dan memiliki minat besar dalam pengembangan perangkat lunak dan teknologi web. Saya bercita-cita menjadi developer profesional.']}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* Social Media */}
        <div id="social-media" className="mt-20 text-center shadow-xl rounded-xl p-6 bg-transparent max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">Social Media</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-4">
            Kamu bisa menemukan saya di beberapa platform berikut:
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-2xl sm:text-3xl">
            {[
              { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/armntrifjri?utm_source=qr&igsh=dDNqbHBobnI2bnJk', color: 'text-pink-500' },
              { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/arman-tri-fajri-2846a7334', color: 'text-blue-600' },
              { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/FAJRI2378', color: 'text-white' },
              { name: 'Itch.io', icon: <FaItchIo />, href: 'https://itch.io/profile/fajri2378', color: 'text-red-600' },
              { name: 'Vercel', icon: <SiVercel />, href: 'https://vercel.com/fajri2378s-projects', color: 'text-white' },
              { name: 'Kirim Pesan (NGL)', icon: <RiQuestionAnswerFill />, href: 'https://ngl.link/armntrifjrii', color: 'text-purple-500' },
              { name: 'Playlist 10/10', icon: <FaSpotify />, href: 'https://open.spotify.com/playlist/6JLfBvd6G8GVJw1LYENT8R', color: 'text-green-500' },
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

        {/* Projects */}
        <div id="projects" className="mt-20 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-6 rounded-xl max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight text-gray-100">Last Projects</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {[
              { title: 'GameStore App', desc: 'Aplikasi web untuk menjual dan membeli game digital berbasis Laravel.', link: 'https://github.com/FAJRI2378/gamestore', image: '/gamestore.png' },
              { title: 'Rasania (Mobile)', desc: 'Aplikasi mobile menggunakan React Native untuk melihat resep resep makanan.', link: 'https://github.com/FAJRI2378/Resepku', image: '/rasaniaa.png' },
              { title: 'Game Pairs', desc: 'Menggunakan GDevelop untuk membuat game Pairs', link: 'https://fajri2378.itch.io/pairs', image: '/pairs.png' },
              { title: 'Sokoban', desc: 'Menggunakan GDevelop untuk membuat game Sokoban (tidak bisa dimainkan di hp)', link: 'https://fajri2378.itch.io/sokoban', image: '/sokoban.png' },
              { title: 'Platform', desc: 'Menggunakan GDevelop untuk membuat game Platform (tidak bisa dimainkan di hp)', link: 'https://fajri2378.itch.io/game-platform', image: '/platform.png' },
            ].map((project, index) => {
              const isRasania = project.title.includes('Rasania');
              return (
                <div
                  key={index}
                  className="bg-slate-800/70 border border-white/10 text-gray-200 rounded-2xl p-6 text-left transition-transform duration-300 hover:scale-[1.03] shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {isRasania ? (
                    <div className="flex justify-center">
                      <div className="bg-black rounded-[2rem] p-2 w-[250px] h-[520px] shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-[1.5rem]"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105 shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
                    />
                  )}
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
              );
            })}
          </div>
        </div>

        {/* Photography */}
        <div id="photography" className="mt-20 text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] p-6 rounded-xl max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-100">Photography</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 px-4">
            Selain membuat web, saya juga memiliki hobi fotografi. Berikut adalah beberapa hasil foto yang saya ambil:
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
            {['/p1.jpg', '/p2.jpg', '/p3.jpg'].map((src, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Foto hasil karya ${idx + 1}`}
                  className={`w-full object-cover ${idx === 1 ? 'h-120' : 'h-64'}`}
                />
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
