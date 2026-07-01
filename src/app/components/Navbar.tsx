'use client';

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-6 p-4 sm:px-8 bg-white border-b-4 border-black text-black fixed top-0 w-full z-50 shadow-[0_6px_0px_rgba(0,0,0,1)] transition-all">
      
      {/* Brand / Logo */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <a 
          href="#"
          className="text-lg sm:text-2xl font-black text-center text-black tracking-widest uppercase bg-[#A3E635] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer inline-block"
        >
          Portofolio
        </a>
      </div>

      {/* Navigation Links - Dibuat bisa digeser (Horizontal Scroll) pada layar kecil */}
      <ul className="flex justify-start sm:justify-center gap-2 sm:gap-4 text-[10px] sm:text-sm font-black text-black uppercase w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide snap-x">
        <li className="snap-start">
          <a 
            href="#about" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#FF90E8] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block whitespace-nowrap"
          >
            About
          </a>
        </li>
        <li className="snap-start">
          <a 
            href="#education" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#00F0FF] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block whitespace-nowrap"
          >
            Education
          </a>
        </li>
        <li className="snap-start">
          <a 
            href="#projects" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#FFC900] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block whitespace-nowrap"
          >
            Projects
          </a>
        </li>
        <li className="snap-start">
          <a 
            href="#certificates" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-[#A3E635] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block whitespace-nowrap"
          >
            Certificates
          </a>
        </li>
        <li className="snap-start">
          <a 
            href="#contact" 
            className="px-3 py-2 border-2 border-transparent hover:border-black hover:bg-gray-200 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-block whitespace-nowrap"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}