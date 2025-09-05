import { useState, useEffect } from "react";

export default function Title() {
  const fullText =
    "is a Frontend Developer, He's turning ideas into sleek and interactive websites.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const typingSpeed = 80; // ketik
    const pauseDuration = 2000; // jeda sebelum backspace
    const backspaceSpeed = 40; // hapus

    const timer = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);

          // tampilkan suggestion setelah 1/3 teks
          if (currentIndex > fullText.length / 3) {
            setShowSuggestion(true);
          }
        } else {
          // pause sebelum mulai hapus
          setTimeout(() => {
            setIsTyping(false);
            setShowSuggestion(false);
          }, pauseDuration);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // reset ketik ulang
          setTimeout(() => setIsTyping(true), 800);
        }
      }
    }, isTyping ? typingSpeed : backspaceSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, fullText]);

  // sisa teks (suggestion)
  const remainingText = fullText.slice(currentIndex);

  return (
    <div className="Title flex justify-start w-full">
      <h1 className="font-figtree font-normal text-4xl md:text-6xl lg:text-[58px] text-white leading-tight text-left max-w-full min-h-[232px]">
        <span className="font-semibold bg-gradient-to-r from-[#6C5CE7] to-white bg-clip-text text-transparent">
          Raditya Rayhan
        </span>{" "}
        {displayText}
        {showSuggestion && isTyping && (
          <span className="text-gray-500/50 opacity-0 animate-fadeIn">
            {remainingText}
          </span>
        )}
        <span className="ml-1 inline-block w-[2px] h-8 bg-white animate-blink"></span>
      </h1>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.5;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
