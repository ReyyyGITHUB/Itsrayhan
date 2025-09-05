import Card from "../components/Card";

export default function Skills() {
  return (
    <section
      id="skills"
      className="Home min-h-screen w-full bg-[#141414]"
    >
      <div className="flex flex-col items-center text-center px-6 py-12">
        {/* Title */}
        <div className="Title flex flex-col mt-16">
          <h1 className="font-bold font-figtree text-4xl md:text-5xl text-white mb-4">
            Skills & Superpowers🔥
          </h1>
          <p className="font-normal font-figtree text-lg md:text-2xl text-[#B0B0B0]">
            These are the languages, frameworks, and tools I use every day.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">
          <Card
            imageSrc="/assets/react.png"
            imageAlt="React Logo"
            title="React"
            description="A JavaScript library for building dynamic and interactive user interfaces."
          />
          <Card
            imageSrc="/assets/figma.png"
            imageAlt="Figma Logo"
            title="Figma"
            description="My favorite tool for designing UIs and prototypes. It helps me turn ideas into visuals before coding them."
          />
          <Card
            imageSrc="/assets/laravel.png"
            imageAlt="Laravel Logo"
            title="Laravel"
            description="A PHP framework that helps me build clean, secure, and scalable web applications with ease."
          />
          <Card
            imageSrc="/assets/php.png"
            imageAlt="PHP Logo"
            title="PHP"
            description="A server-side programming language for building dynamic websites."
          />
          <Card
            imageSrc="/assets/python.png"
            imageAlt="Python Logo"
            title="Python"
            description="Python is a beginner-friendly yet super powerful programming language."
          />
          <Card
            imageSrc="/assets/sql.png"
            imageAlt="SQL Logo"
            title="SQL"
            description="SQL is a simple yet powerful language for managing and analyzing data in databases."
          />
        </div>
      </div>
    </section>
  );
}
