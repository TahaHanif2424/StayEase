const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full flex justify-center px-2">
      <div className="flex gap-3 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("plans")}
          className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Plans
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Contact
        </button>
        <button
          onClick={() => scrollToSection("register")}
          className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
