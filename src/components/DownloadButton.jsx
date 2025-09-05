export default function DownloadButton() {
  return (
    <div className="ButtonContainer">
      <button
        className="flex flex-row gap-2 px-5 py-2.5 justify-center items-center 
        bg-[#6A0DAD] rounded-[12px] shadow-md 
        hover:bg-[#7b1fb8] hover:shadow-lg hover:scale-[1.03] 
        active:scale-95 active:bg-[#5a0a8a]
        transition-all duration-300 ease-out"
      >
        <span className="font-figtree font-normal text-[18px] text-white">
          Download image
        </span>
        <div className="imageContainer w-5 h-5 flex items-center justify-center">
          <img
            src="/assets/downlaod-icon.png"
            alt="download"
            className="w-full h-full object-contain"
          />
        </div>
      </button>
    </div>
  );
}
