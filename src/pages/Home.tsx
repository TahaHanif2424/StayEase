import { useState, useEffect } from 'react';
import BackgroundSlideshow from '../components/BackgroundSlideshow';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundSlideshow />

      {/* Content Grid */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="grid grid-rows-[auto_auto_1fr] gap-8 md:gap-12 items-center justify-items-center w-full px-6">
          {/* Logo */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <img
              src="/STAY_EASE.png"
              alt="StayEase Logo"
              className="h-30 md:h-46 drop-shadow-2xl"
            />
          </div>

          {/* Navbar */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <Navbar />
          </div>

          {/* Text Content */}
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-lg">
              Find Your Perfect Hostel & Apartment
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-md">
              Discover comfortable and affordable living spaces tailored to your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
