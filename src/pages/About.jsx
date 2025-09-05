import { useEffect, useState, useRef } from "react";
import CardInfo from "../components/CardInfo";
import DownloadButton from "../components/DownloadButton";
import TitleImage from "../components/TitleImage";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when About section enters viewport
            setTimeout(() => {
              setIsVisible(true);
            }, 200);
          } else {
            // Reset animation when About section leaves viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before fully visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <main 
      ref={aboutRef}
      className="min-h-screen w-full bg-[#252525]" id="about"
    >
      <div className="flex flex-col items-center justify-center text-center px-[121px] py-[56px]">
        {/* Title Section */}
        <header 
          className={`mb-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <TitleImage />
        </header>
        
        {/* Content Section */}
        <section className="flex flex-row items-start justify-start w-full">
          {/* Card Info Container */}
          <div 
            className={`flex-1 w-full transition-all duration-1200 ease-out delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
            role="complementary" 
            aria-label="Profile information"
          >
            <CardInfo />
          </div>
          
          {/* Download Button Container */}
          <aside 
            className={`flex justify-center items-center transition-all duration-1200 ease-out delay-500 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-95'
            }`}
            role="complementary" 
            aria-label="Download options"
          >
            <DownloadButton />
          </aside>
        </section>
      </div>
    </main>
  );
}