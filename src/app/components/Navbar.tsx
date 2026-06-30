'use client';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 p-4 sm:px-8 bg-white border-b-4 border-black text-black fixed top-0 w-full z-50 shadow-[0_6px_0px_rgba(0,0,0,1)] transition-all">
      
      {/* Brand / Logo */}
      <a 
        href="#"
        className="text-xl sm:text-2xl font-black w-full text-center sm:w-auto sm:text-left text-black tracking-widest uppercase bg-[#A3E635] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
      >
        Portofolio
      </a>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-black text-black uppercase">
        <li>
          <a 
            href="#about" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#FF90E8] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#00F0FF] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block"
          >
            Education
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#FFC900] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#certificates" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#A3E635] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block"
          >
            Certificates
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-gray-200 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}