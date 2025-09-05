import { useEffect, useRef, useState } from "react";

export default function Card({ 
  imageSrc = "/assets/react.png", 
  imageAlt = "Technology icon",
  title = "Laravel", 
  description = "A PHP framework that helps me build clean, secure, and scalable web applications with ease. 🚀" 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`Card max-w-sm mx-auto flex flex-col text-center 
        rounded-[32px] border border-[#434343] bg-[#1A1A1A] p-8 
        transition-all duration-700 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        hover:scale-105 hover:shadow-lg hover:border-[#666]`}
    >
      {/* Image Section */}
      <div className="flex justify-center items-center mb-6">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col font-figtree text-white">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </article>
  );
}
