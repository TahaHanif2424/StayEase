const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="w-full flex justify-center">
      <div className="flex gap-8 md:gap-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Contact
        </button>
        <button
          onClick={() => scrollToSection('plans')}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Plans
        </button>
        <button
          onClick={() => scrollToSection('register')}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
