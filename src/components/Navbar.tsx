import { scrollToSection, scrollToTop } from "../utils/navigation";

const NAV_ITEMS = [
  { label: "Home", action: scrollToTop },
  { label: "About", action: () => scrollToSection("about") },
  { label: "Plans", action: () => scrollToSection("plans") },
  { label: "Contact", action: () => scrollToSection("contact") },
  { label: "Register", action: () => scrollToSection("register") },
];

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center px-2">
      <div className="flex gap-3 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap justify-center">
        {NAV_ITEMS.map(({ label, action }) => (
          <button
            key={label}
            onClick={action}
            className="text-[#002650] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
