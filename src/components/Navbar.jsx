export default function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between items-center bg-[#141414] px-[121px] py-[34px]">
      <div
        className="Title font-figtree font-extrabold text-transparent text-[24px] bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#ffffff] cursor-pointer 
  hover:scale-105 hover:opacity-90 transition-all duration-300"
      >
        Raditya Rayhan
      </div>

      <div className="ContainerLink flex flex-row gap-[12px]">
        <div className="HomeLink flex flex-row gap-[12px]">
          <a
            href="#home"
            className="text-[20px] font-figtree text-white hover:text-[#B0B0B0] transition-colors duration-200"
          >
            Home
          </a>
          <span className="text-[20px] font-figtree text-[#B0B0B0]">/</span>
        </div>
        <div className="AboutLink flex flex-row gap-[12px]">
          <a
            href="#about"
            className="text-[20px] font-figtree text-[#B0B0B0] hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <span className="text-[20px] font-figtree text-white">/</span>
        </div>
        <div className="SkillsLink flex flex-row gap-[12px]">
          <a
            href="#skills"
            className="text-[20px] font-figtree text-[#B0B0B0] hover:text-white transition-colors duration-200"
          >
            Skills
          </a>
          <span className="text-[20px] font-figtree text-white">/</span>
        </div>
        <div className="ProfileLink flex flex-row gap-[12px]">
          <a
            href="#footer"
            className="text-[20px] font-figtree text-[#B0B0B0] hover:text-white transition-colors duration-200"
          >
            Footer
          </a>
        </div>
      </div>
    </nav>
  );
}
