export default function Footer() {
  return (
    <section id="footer" className="w-full bg-[#0D1B2A]">
      <div className="flex flex-col px-6 py-12 max-w-7xl mx-auto ">
        {/* Upper Section */}
        <div className="upper flex flex-col md:flex-row justify-between w-full gap-10 border-b border-[#9C9C9C] pb-8">
          {/* Left Section */}
          <div className="Left flex flex-col gap-4 max-w-sm text-left">
            {/* Logo */}
            <div className="img w-10 h-10">
              <img src="/assets/favicon.png" alt="Logo" className="w-full h-full object-contain" />
            </div>

            {/* Title */}
            <div className="Title font-figtree font-semibold text-white">
              <p className="text-base md:text-lg">Raditya Rayhan - Personal Website</p>
            </div>

            {/* Subtitle */}
            <div className="Subtitle font-figtree font-normal text-[#B0B0B0] text-xs md:text-sm leading-relaxed">
              Website ini dibuat sebagai wadah untuk memperkenalkan diri secara profesional maupun personal
              kepada orang lain, baik untuk keperluan karier, jejaring, maupun berbagi konten.
            </div>
          </div>

          {/* Right Section */}
          <div className="PagesContainer flex flex-wrap md:flex-nowrap gap-12 text-right">
            {/* Pages */}
            <div className="pages flex flex-col font-figtree text-white gap-3">
              <h2 className="Heading font-bold text-sm md:text-base">Pages</h2>
              <nav className="flex flex-col gap-2 text-xs md:text-sm text-[#B0B0B0]">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              </nav>
            </div>

            {/* Resource */}
            <div className="Resource flex flex-col font-figtree text-white gap-3">
              <h2 className="Heading font-bold text-sm md:text-base">Resource</h2>
              <nav className="flex flex-col gap-2 text-xs md:text-sm text-[#B0B0B0]">
                <a href="#docs" className="hover:text-white transition-colors">Docs</a>
                <a href="#tutorials" className="hover:text-white transition-colors">Tutorials</a>
                <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                <a href="#support" className="hover:text-white transition-colors">Support</a>
              </nav>
            </div>

            {/* Framework & Tools */}
            <div className="Resource flex flex-col font-figtree text-white gap-3">
              <h2 className="Heading font-bold text-sm md:text-base">Framework & Tools</h2>
              <nav className="flex flex-col gap-2 text-xs md:text-sm text-[#B0B0B0]">
                <a href="#brand" className="hover:text-white transition-colors">Title & Brand</a>
                <a href="#copyright" className="hover:text-white transition-colors">Copyright</a>
                <a href="#link" className="hover:text-white transition-colors">Link</a>
                <a href="#social" className="hover:text-white transition-colors">Social Media</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="Bottom flex flex-col md:flex-row justify-between items-center w-full gap-4 pt-6">
          <div className="copyright font-figtree">
            <p className="font-normal text-xs md:text-sm text-[#B0B0B0]">
              Terima kasih sudah mampir! © 2025 Raditya Rayhan – This website is made with ❤️
            </p>
          </div>

          <div className="Keamanan flex flex-wrap md:flex-row gap-6 font-figtree font-normal text-xs md:text-sm text-[#B0B0B0]">
            <a href="" className="hover:text-white">Privacy Policy</a>
            <a href="" className="hover:text-white">Terms & Conditions</a>
            <a href="" className="hover:text-white">Cookies Settings</a>
          </div>
        </div>
      </div>
    </section>
  );
}
