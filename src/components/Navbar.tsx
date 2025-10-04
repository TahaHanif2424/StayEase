const Navbar = () => {
  return (
    <nav className="w-full flex justify-center">
      <div className="flex gap-8 md:gap-12">
        <button
          onClick={() => window.location.hash = '#home'}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Home
        </button>
        <button
          onClick={() => window.location.hash = '#about'}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          About
        </button>
        <button
          onClick={() => window.location.hash = '#contact'}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Contact
        </button>
        <button
          onClick={() => window.location.hash = '#plans'}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Plans
        </button>
        <button
          onClick={() => window.location.hash = '#register'}
          className="text-black text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
