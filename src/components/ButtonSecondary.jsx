export default function ButtonSecondary() {
  return (
    <a href="#skills" className="flex items-center px-[32px] py-[18px] border border-[#A29BFE] rounded-[12px] gap-[8px] text-white font-figtree hover:bg-[#a29bfe] hover:shadow-lg hover:scale-[1.03] 
        active:scale-95 active:bg-[#5a0a8a]
        transition-all duration-300 ease-out">
      <span>View Skills</span>
      <img src="/assets/fire.png" alt="Fire icon" className="w-4 h-4" />
    </a>
  );
}

