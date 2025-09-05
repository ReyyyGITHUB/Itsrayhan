export default function MediaSocialScroll() {
  const socialMedia = [
    { name: 'Instagram', icon: '/assets/instagram.png' },
    { name: 'GitHub', icon: '/assets/github.png' },
    { name: 'Twitter', icon: '/assets/twitter.png' },
    { name: 'Telegram', icon: '/assets/telegram.png' },
    // Duplikasi untuk seamless scrolling
    { name: 'Instagram', icon: '/assets/instagram.png' },
    { name: 'GitHub', icon: '/assets/github.png' },
    { name: 'Twitter', icon: '/assets/twitter.png' },
    { name: 'Telegram', icon: '/assets/telegram.png' }
  ];

  return (
    <div className="flex flex-row w-full py-[32px] justify-center  overflow-hidden">
      <div className="flex flex-row gap-[64px] animate-scroll">
        {socialMedia.map((social, index) => (
          <div
            key={index}
            className="flex-shrink-0"
          >
            <img 
              src={social.icon} 
              alt={`${social.name} icon`}
              className="w-[162px] h-[42px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}