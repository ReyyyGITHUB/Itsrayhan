export default function MySocialMedia() {
  const socialMedia = [
    { 
      name: 'X (Twitter)', 
      icon: '/assets/x-header.png', 
      url: 'https://twitter.com/'
    },
    { 
      name: 'GitHub', 
      icon: '/assets/github-header.png', 
      url: 'https://github.com/'
    },
    { 
      name: 'Instagram', 
      icon: '/assets/instagram-header.png', 
      url: 'https://instagram.com/radityarayhannnn'
    }
  ];

  return (
    <div className="flex flex-col w-fit h-fit">
      <div className="listimg flex flex-row gap-[32px]">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
            aria-label={`Visit ${social.name}`}
          >
            <img 
              src={social.icon} 
              alt={`${social.name} icon`}
              className="w-8 h-8 object-contain"
            />  
          </a>
        ))}
      </div>
      <p className="font-figtree font-normal text-[20px] text-[#B0B0B0] text-right mt-4">
        My social media!
      </p>
    </div>
  );
}