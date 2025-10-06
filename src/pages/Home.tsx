import { useState, useEffect } from "react";
import BackgroundSlideshow from "../components/BackgroundSlideshow";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Plans from "../components/Plans";
import Contact from "../components/Contact";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image 3 (/3.png) is at index 1 in the array ["/1.png", "/3.png", "/4.png", "/2.png"]
  const isImage2Active = currentImageIndex === 1;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <BackgroundSlideshow onImageChange={setCurrentImageIndex} />

        {/* Content Grid */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* Centered Logo and Navbar */}
          <div className="grid grid-rows-[auto_auto] items-start justify-items-center w-full px-4 sm:px-6 pt-6 sm:pt-8 md:pt-6 gap-2 md:gap-2">
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
          </div>

          {/* Text Content - Left Aligned */}
          <div
            className={`text-left transition-all duration-1000 delay-200 mt-16 sm:mt-8 md:mt-10 lg:mt-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-3xl ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl transition-all duration-1000 delay-300 bg-blue-200/15 backdrop-blur-sm px-4 py-3 rounded-lg inline-block ${
                isLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } ${isImage2Active ? "text-black" : "text-white"}`}
            >
              Find Your Perfect Accommodation <span className="text-blue-900  px-2 py-1 rounded">With Us</span>
            </h1>

            <div
              className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 drop-shadow-lg leading-relaxed transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              } ${isImage2Active ? "text-black/95" : "text-white/95"}`}
            >
              <p className="mb-3 font-light">
                Heading to <span className="font-semibold text-blue-900 bg-blue-200/15 px-2 py-1 rounded">Islamabad</span> for your entrance test? We've got your back.
              </p>
              <p className="mb-3 font-light" style={{ animationDelay: '3s' }}>
                <span className="font-semibold text-blue-900 bg-blue-200/15 px-2 py-1 rounded">StayEase</span> makes finding a safe, comfy, and affordable place super easy. From verified hostels to cozy apartments near your test center.
              </p>
              <p className="mb-3 font-light">
                We help you settle in fast, stay stress-free, and focus on what really matters.
              </p>
              <p className={`mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${isImage2Active ? "text-black" : "text-blue-100"}`}>
                Because stay feels easy with <span className="font-bold text-blue-900 bg-blue-200/15 px-2 py-1 rounded">StayEase</span>.
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
