import { useState, useEffect } from "react";
import BackgroundSlideshow from "../components/BackgroundSlideshow";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Plans from "../components/Plans";
import Contact from "../components/Contact";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <BackgroundSlideshow />

        {/* Content Grid */}
        <div className="absolute inset-0 z-10 flex flex-col">
          <div className="grid grid-rows-[auto_auto_1fr] items-start justify-items-center w-full px-4 sm:px-6 pt-6 sm:pt-8 md:pt-6 gap-2 md:gap-2">
            {/* Logo */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <img
                src="/STAY_EASE.png"
                alt="StayEase Logo"
                className="h-24 sm:h-32 md:h-40 lg:h-46 drop-shadow-2xl"
              />
            </div>

            {/* Navbar */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <Navbar />
            </div>

            {/* Text Content */}
            <div
              className={`text-center transition-all duration-1000 delay-200 mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
                Find Your Perfect Hostel & Apartment
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 drop-shadow-md max-w-3xl mx-auto">
                Discover comfortable and affordable living spaces tailored to
                your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Plans Section */}
      <Plans />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home;
