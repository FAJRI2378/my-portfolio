'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 p-4 sm:px-8 bg-white dark:bg-gray-800 text-black dark:text-white shadow">
      <h1 className="text-xl font-bold w-full text-center sm:w-auto sm:text-left">Portofolio</h1>
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
        <li><Link href="/">Beranda</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#social-media">Social Media</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#sertifikat">Sertifikat</a></li>
      </ul>
    </nav>
  );
}
