const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full flex justify-center">
      <div className="flex gap-8 md:gap-12">
        <button
<<<<<<< HEAD
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[#002650] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
=======
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
>>>>>>> parent of 3051158 (Merge branch 'main' of https://github.com/TahaHanif2424/StayEase)
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
<<<<<<< HEAD
          className="text-[#002650] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
=======
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
>>>>>>> parent of 3051158 (Merge branch 'main' of https://github.com/TahaHanif2424/StayEase)
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("plans")}
<<<<<<< HEAD
          className="text-[#002650] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
=======
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
>>>>>>> parent of 3051158 (Merge branch 'main' of https://github.com/TahaHanif2424/StayEase)
        >
          Plans
        </button>
        <button
          onClick={() => scrollToSection("contact")}
<<<<<<< HEAD
          className="text-[#002650] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
=======
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
>>>>>>> parent of 3051158 (Merge branch 'main' of https://github.com/TahaHanif2424/StayEase)
        >
          Contact
        </button>
        <button
          onClick={() => scrollToSection("register")}
<<<<<<< HEAD
          className="text-[#002650] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
=======
          className="text-[#002650] text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
>>>>>>> parent of 3051158 (Merge branch 'main' of https://github.com/TahaHanif2424/StayEase)
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
