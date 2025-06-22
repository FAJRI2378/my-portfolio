'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 p-4 sm:px-8
      bg-[#0f172a]/90 backdrop-blur-md text-white shadow-lg border-b border-white/20 fixed top-0 w-full z-50">
      
      <h1 className="text-xl font-bold w-full text-center sm:w-auto sm:text-left text-white">
        Portofolio
      </h1>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-white">
        <li>
          <Link href="/" className="hover:text-cyan-400 transition-colors duration-200">
            Beranda
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#social-media" className="hover:text-cyan-400 transition-colors duration-200">
            Social Media
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-200">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
