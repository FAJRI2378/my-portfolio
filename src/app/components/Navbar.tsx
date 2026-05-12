'use client';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 p-4 sm:px-8
      bg-[#0f172a]/90 backdrop-blur-md text-white shadow-lg border-b border-white/10 fixed top-0 w-full z-50 transition-all">
      
      <h1 className="text-xl font-bold w-full text-center sm:w-auto sm:text-left text-white tracking-wide">
        Portofolio
      </h1>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-300 font-medium">
        <li>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-cyan-400 transition-colors duration-200">
            Education
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-200">
            Projects
          </a>
        </li>
        <li>
          <a href="#certificates" className="hover:text-cyan-400 transition-colors duration-200">
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}