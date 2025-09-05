export default function CardInfo() {
  return (
    <div className="flex flex-row gap-8 max-w-4xl flex-wrap justify-start">
      {/* Education */}
      <div className="card flex flex-col p-6 rounded-[12px] border-b border-transparent
        hover:border-[#C0C0C0] hover:bg-[#222222] hover:scale-[1.02] hover:shadow-sm
        transition-all duration-300 ease-out min-w-[280px] max-w-[320px] flex-1">
        <h1 className="font-figtree font-bold text-[24px] text-white mb-2">
          Education 🎓
        </h1>
        <p className="font-figtree font-normal text-[20px] text-[#B0B0B0] leading-relaxed">
          Student at SMKN 8 Semarang
        </p>
      </div>

      {/* Hobbies */}
      <div className="card flex flex-col p-6 rounded-[12px] border-b border-transparent
        hover:border-[#C0C0C0] hover:bg-[#222222] hover:scale-[1.02] hover:shadow-sm
        transition-all duration-300 ease-out min-w-[280px] max-w-[320px] flex-1">
        <h1 className="font-figtree font-bold text-[24px] text-white mb-2">
          Hobbies 🎮
        </h1>
        <p className="font-figtree font-normal text-[20px] text-[#B0B0B0] leading-relaxed">
          Gaming, exploring tech, and swimming
        </p>
      </div>

      {/* Focus */}
      <div className="card flex flex-col p-6 rounded-[12px] border-b border-transparent
        hover:border-[#C0C0C0] hover:bg-[#222222] hover:scale-[1.02] hover:shadow-sm
        transition-all duration-300 ease-out min-w-[280px] max-w-[320px] flex-1">
        <h1 className="font-figtree font-bold text-[24px] text-white mb-2">
          Focus 💻
        </h1>
        <p className="font-figtree font-normal text-[20px] text-[#B0B0B0] leading-relaxed">
          Frontend Developer (React & Tailwind)
        </p>
      </div>
    </div>
  );
}
