import { useEffect, useRef, useState } from "react";
import BookingModal from "./BookingModal";
import SectionHeading from "./SectionHeading";

const Plans = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;

        // Calculate scroll progress based on how much of the section has been scrolled through
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          // Progress from 0 (section just entering view) to 1 (section almost scrolled past)
          const progress = Math.max(
            0,
            Math.min((windowHeight - rect.top) / sectionHeight, 1)
          );
          setScrollProgress(progress);
        } else if (rect.top > windowHeight) {
          setScrollProgress(0);
        } else if (rect.bottom < 0) {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate for small screens and tablets
  useEffect(() => {
    const isMobileOrTablet = typeof window !== "undefined" && window.innerWidth < 1024;

    if (isMobileOrTablet) {
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % plans.length);
      }, 4000);

      return () => {
        if (autoRotateRef.current) {
          clearInterval(autoRotateRef.current);
        }
      };
    }
  }, []);

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
    // Reset auto-rotate timer
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % plans.length);
      }, 4000);
    }
  };

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
    // Reset auto-rotate timer
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % plans.length);
      }, 4000);
    }
  };

  const plans = [
    {
      id: 1,
      title: "Basic Plan",
      image: "/1.png",
      price: "$299/month",
      features: [
        "Shared Room",
        "Wi-Fi Included",
        "Common Kitchen",
        "Basic Amenities",
      ],
    },
    {
      id: 2,
      title: "Premium Plan",
      image: "/2.png",
      price: "$599/month",
      features: [
        "Private Room",
        "High-Speed Wi-Fi",
        "Personal Kitchen",
        "Premium Amenities",
        "Gym Access",
      ],
    },
    {
      id: 3,
      title: "Luxury Plan",
      image: "/3.png",
      price: "$999/month",
      features: [
        "Studio Apartment",
        "Ultra-Fast Wi-Fi",
        "Full Kitchen",
        "Luxury Amenities",
        "Pool & Gym",
        "Concierge Service",
      ],
    },
  ];

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="min-h-screen max-h-[770px]:min-h-[120vh] bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 lg:py-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <SectionHeading
            title="Our Plans"
            subtitle="Choose the perfect plan that fits your lifestyle and budget"
            progress={scrollProgress}
          />
        </div>

        {/* Cards Container with Expanding Animation */}
        <div className="relative flex items-start lg:items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] pt-4 lg:pt-0">
          {/* Mobile and Tablet Navigation Buttons */}
          <button
            onClick={rotateLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 lg:hidden"
            aria-label="Previous plan"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={rotateRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 lg:hidden"
            aria-label="Next plan"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {plans.map((plan, index) => {
            const isMobile =
              typeof window !== "undefined" && window.innerWidth < 640;
            const isSmallTablet =
              typeof window !== "undefined" &&
              window.innerWidth >= 640 &&
              window.innerWidth < 768;
            const isTablet =
              typeof window !== "undefined" &&
              window.innerWidth >= 768 &&
              window.innerWidth < 1024;

            let translateX = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (isMobile || isSmallTablet || isTablet) {
              const position =
                (index - currentIndex + plans.length) % plans.length;

              if (position === 0) {
                // Center card
                translateX = 0;
                scale = 1;
                zIndex = 10;
                opacity = 1;
              } else if (position === 1) {
                // Right card (partially visible)
                translateX = 200;
                scale = 0.7;
                zIndex = 8;
                opacity = 0.4;
              } else if (position === 2) {
                // Left card (partially visible)
                translateX = -200;
                scale = 0.7;
                zIndex = 8;
                opacity = 0.4;
              }
            } else {
              // Desktop: Full animation
              if (index === 0) {
                translateX = scrollProgress * -350;
                scale = 0.75 + scrollProgress * 0.15;
                zIndex = 8;
                opacity = 0.3 + scrollProgress * 0.7;
              } else if (index === 1) {
                translateX = 0;
                scale = 1.01;
                zIndex = 10;
                opacity = 1;
              } else if (index === 2) {
                translateX = scrollProgress * 350;
                scale = 0.75 + scrollProgress * 0.15;
                zIndex = 8;
                opacity = 0.3 + scrollProgress * 0.7;
              }
            }

            return (
              <div
                key={plan.id}
                className={`absolute ${
                  isMobile || isSmallTablet || isTablet
                    ? "transition-all duration-500 ease-in-out"
                    : "transition-all duration-700 ease-out"
                }`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <div className="w-56 sm:w-72 md:w-80 lg:w-80 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-xl sm:text-2xl font-semibold text-white">
                        {plan.price}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <ul className="space-y-3 sm:space-y-4 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 sm:gap-3 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        setSelectedPlan(plan.title);
                        setIsModalOpen(true);
                      }}
                      className="w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-[#002650] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile and Tablet Indicator Dots */}
          <div className="absolute -bottom-48 sm:-bottom-56 left-1/2 -translate-x-1/2 flex gap-2 z-20 lg:hidden">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  // Reset auto-rotate timer
                  if (autoRotateRef.current) {
                    clearInterval(autoRotateRef.current);
                    autoRotateRef.current = setInterval(() => {
                      setCurrentIndex((prev) => (prev + 1) % plans.length);
                    }, 4000);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#002650] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </section>
  );
};

export default Plans;
