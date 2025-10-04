import { useState, useEffect } from 'react';
import BackgroundSlideshow from '../components/BackgroundSlideshow';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundSlideshow />

      {/* Logo Container */}
      <div
        className={`absolute top-0 left-0 right-0 z-10 flex justify-center pt-12 md:pt-12 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <img
          src="/STAY_EASE.png"
          alt="StayEase Logo"
          className="h-30 md:h-46 drop-shadow-2xl"
        />
      </div>

      {/* Content Container */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center px-6">
          <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-lg">
            Find Your Perfect Hostel & Apartment
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-md">
            Discover comfortable and affordable living spaces tailored to your needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
