'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 p-4 sm:px-8 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border-b border-white/10 shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold w-full text-center sm:w-auto sm:text-left text-black dark:text-white">
        Portofolio
      </h1>
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-black dark:text-white">
        <li>
          <Link href="/" className="hover:text-blue-500 transition-colors duration-200">
            Beranda
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#social-media" className="hover:text-blue-500 transition-colors duration-200">
            Social Media
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500 transition-colors duration-200">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
