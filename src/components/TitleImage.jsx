export default function TitleAbout() {
  return (
    <div className="container flex flex-row text-left gap-[50px] items-start">
      <div className="Text flex flex-col flex-1">
        <div className="Title font-figtree font-bold text-[48px] text-white">
          <h1>
            Meet <span className="text-[#A259FF]">Rayhan</span>, The{" "}
            <span className="font-bold italic">Frontend Developer</span> ✨
          </h1>
        </div>
        <div className="Subtitle flex flex-col font-figtree text-[24px] text-[#B0B0B0] text-left gap-[16px] mt-6">
          <p>
            Hey there! 👋 I'm Raditya Rayhan, a Frontend Developer who loves
            turning boring screens into fun, interactive experiences. I enjoy
            mixing clean code with creative design, kinda like making art but
            with React.js and Tailwindcss
          </p>
          <p>
            When I'm not coding, you'll probably find me exploring new tech
            stuff, playing some online games, or just chilling with some music
            🎧
          </p>
        </div>
      </div>

      <div className="CardPicture flex-shrink-0">
        <img src="/assets/CardPicture.png" alt="Raditya Rayhan Profile Card" className="w-auto h-auto object-contain" />
      </div>
    </div>
  );
}