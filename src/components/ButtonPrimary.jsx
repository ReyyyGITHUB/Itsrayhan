export default function ButtonPrimary() {
  return (
    <a
      href="#about"
      className="flex items-center px-[32px] py-[18px] bg-[#6C5CE7] rounded-[12px] gap-[8px] text-white font-figtree
        hover:bg-[#7b1fb8] hover:shadow-lg hover:scale-[1.03] 
        active:scale-95 active:bg-[#5a0a8a]
        transition-all duration-300 ease-out"
    >
      <span>Get Started</span>
      <img src="/assets/arrow-icon.png" alt="Arrow icon" />
    </a>
  );
}
