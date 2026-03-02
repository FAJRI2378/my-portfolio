'use client';

import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { 
  FaInstagram, FaLinkedin, FaGithub, FaItchIo, 
  FaWhatsapp, FaChevronRight, FaCamera 
} from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

// Komponen Pendukung
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import SkillsMarquee from './components/SkillsMarquee';

const PROJECTS = [
  { 
    title: 'PT Kamandanu Jaya Samudera', 
    type: 'Project PKL / Internship',
    desc: 'Website profil perusahaan profesional untuk crewing agency. Fokus pada performa, SEO, dan UI modern.', 
    link: 'https://ptkamandanujayasamudera.com', 
    image: '/kamandanu.png', 
    tags: ['Next.js', 'Tailwind CSS', 'Company Profile'],
    isHighlight: true 
  },
  { 
    title: 'GameStore App', 
    type: 'Web Application',
    desc: 'Platform e-commerce katalog game digital yang dibangun menggunakan framework Laravel.', 
    link: 'https://github.com/FAJRI2378/gamestore', 
    image: '/gamestore.png',
    tags: ['Laravel', 'MySQL', 'Blade']
  },
  { 
    title: 'Rasania Mobile', 
    type: 'Mobile Development',
    desc: 'Aplikasi resep makanan Nusantara berbasis React Native dengan fitur pencarian interaktif.', 
    link: 'https://github.com/FAJRI2378/Resepku', 
    image: '/rasaniaa.png',
    tags: ['React Native', 'Expo', 'API']
  },
  { 
    title: 'Game Pairs', 
    type: 'Mini Game',
    desc: 'Permainan kartu asah otak (Memory Match) dengan logika JavaScript murni.', 
    link: 'https://fajri2378.itch.io/pairs', 
    image: '/pairs.png',
    tags: ['Game Logic', 'HTML5 Canvas']
  },
  { 
    title: 'Sokoban Classic', 
    type: 'Puzzle Game',
    desc: 'Implementasi game puzzle klasik Sokoban. Fokus pada algoritma penyelesaian level.', 
    link: 'https://fajri2378.itch.io/sokoban', 
    image: '/sokoban.png',
    tags: ['Logic', 'Game Design']
  },
  { 
    title: 'Bookstore Native', 
    type: 'Backend Basic',
    desc: 'Sistem manajemen database buku sederhana menggunakan PHP Native dan MySQL.', 
    link: 'https://github.com/FAJRI2378/book2', 
    image: '/bookstore.png',
    tags: ['PHP Native', 'CRUD']
  }
];

const PHOTOS = ['/p1.jpg', '/p2.jpg', '/p3.jpg'];

const SOCIALS = [
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/armntrifjri', color: 'hover:text-pink-500' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/arman-tri-fajri-2846a7334', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/FAJRI2378', color: 'hover:text-white' },
  { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/6287872594546', color: 'hover:text-green-500' },
  { name: 'Vercel', icon: <SiVercel />, href: 'https://vercel.com/fajri2378s-projects', color: 'hover:text-gray-300' }
];

export default function Home() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-blue-500/30">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 px-4 sm:px-8 pt-32 pb-20 max-w-7xl mx-auto space-y-32">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-wider animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Projects
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            <Typewriter
              words={['Halo, Saya Arman Tri Fajri', 'Front End Developer Intern', 'SMK Negeri 21 Jakarta']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed">
            Berfokus pada pembuatan antarmuka web yang bersih, responsif, dan memberikan pengalaman pengguna yang luar biasa.
          </p>
        </section>

        {/* --- ABOUT SECTION --- */}
       {/* --- ABOUT SECTION --- */}
<section id="about" className="grid md:grid-cols-2 gap-12 items-center py-10">
  {/* Sisi Kiri: Foto dengan Efek Glow */}
  <div className="relative flex justify-center md:justify-end pr-0 md:pr-10">
    {/* Efek Glow di belakang foto */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 blur-[80px] rounded-full"></div>
    
    {/* Frame Foto */}
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
        <Image
          src="/fajri.jpg" 
          alt="Arman Tri Fajri"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
      </div>
    </div>
  </div>

  {/* Sisi Kanan: Teks About */}
  <div className="space-y-6 text-left">
    <div className="flex items-center gap-3">
      <div className="w-10 h-1 bg-blue-500 rounded-full"></div>
      <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
    </div>
    
    <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
      <p>
        Halo! Nama saya <span className="text-white font-bold tracking-wide">Arman Tri Fajri</span>, pelajar dari <span className="text-white">SMK Negeri 21 Jakarta</span> jurusan RPL.
      </p>
      <p>
        Saya memiliki minat besar dalam pengembangan teknologi web dan mobile. Cita-cita saya adalah menjadi seorang <span className="text-blue-400 font-semibold">Front End Developer</span> profesional.
      </p>
    </div>

    {/* Info Tambahan Singkat */}
    <div className="pt-4 flex gap-6">
      <div className="flex flex-col">
        <span className="text-white font-bold">Location</span>
        <span className="text-sm text-slate-500">Jakarta, Indonesia</span>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold">Education</span>
        <span className="text-sm text-slate-500">SMKN 21 Jakarta</span>
      </div>
    </div>
  </div>
</section>
        {/* --- SKILLS --- */}
        <SkillsMarquee />

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 max-w-lg mx-auto">Kumpulan karya mulai dari proyek industri (PKL) hingga aplikasi personal.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <article 
                key={index} 
                className={`group relative bg-slate-900/50 border ${project.isHighlight ? 'border-blue-500/40' : 'border-white/5'} rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-900/80 shadow-xl`}
              >
                {project.isHighlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg z-20">
                    PROJECT PKL
                  </div>
                )}
                <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl bg-slate-800 border border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { (e.target as any).src = "https://placehold.co/600x400/0f172a/white?text=Preview"; }}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/5 text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-bold text-white pt-2 group-hover:gap-3 transition-all">
                    VIEW PROJECT <FaChevronRight size={10} className="text-blue-500" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- PHOTOGRAPHY SECTION (DI SINI!) --- */}
        <section id="photography" className="space-y-12 py-16 px-6 sm:px-12 rounded-[3rem] bg-white/[0.02] border border-white/5">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-4">
              <FaCamera className="text-blue-500" size={28} />
              Photography
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">
              "Menangkap momen melalui lensa adalah cara saya mengasah kreativitas di luar baris kode."
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((src, idx) => (
              <div key={idx} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={src}
                  alt={`Hasil foto Arman ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => { (e.target as any).src = "https://placehold.co/800x1000/0f172a/white?text=Foto+Karya+Arman"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm font-medium tracking-wide">Captured by Arman</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT & SOCIALS --- */}
        <section id="contact" className="relative p-8 sm:p-16 rounded-[2.5rem] text-center border border-white/10 bg-gradient-to-b from-slate-900/50 to-transparent backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Mulai Kolaborasi?</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {SOCIALS.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" className="group flex flex-col items-center gap-3">
                <div className={`text-3xl p-4 rounded-2xl bg-slate-800/50 border border-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:-translate-y-2 transition-all duration-300 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">{item.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}