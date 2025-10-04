import { useEffect, useRef, useState } from "react";
import BookingModal from "./BookingModal";
import SectionHeading from "./SectionHeading";

const Plans = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background Gradient Shapes
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div> */}

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <SectionHeading
            title="Our Plans"
            subtitle="Choose the perfect plan that fits your lifestyle and budget"
            progress={scrollProgress}
          />
        </div>

        {/* Cards Container with Expanding Animation */}
        <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
          {plans.map((plan, index) => {
            // Responsive animation values
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

            if (isMobile) {
              // Mobile: Smaller cards with tighter animation
              if (index === 0) {
                translateX = scrollProgress * -110; // Reduced from -350
                scale = 0.65 + scrollProgress * 0.1; // Smaller base scale
                zIndex = 8;
                opacity = scrollProgress;
              } else if (index === 1) {
                translateX = 0;
                scale = 0.85; // Smaller center card
                zIndex = 10;
                opacity = 1;
              } else if (index === 2) {
                translateX = scrollProgress * 110; // Reduced from 350
                scale = 0.65 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              }
            } else if (isSmallTablet) {
              // Small Tablet: Medium-sized cards
              if (index === 0) {
                translateX = scrollProgress * -180;
                scale = 0.7 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              } else if (index === 1) {
                translateX = 0;
                scale = 0.95;
                zIndex = 10;
                opacity = 1;
              } else if (index === 2) {
                translateX = scrollProgress * 180;
                scale = 0.7 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              }
            } else if (isTablet) {
              // Tablet: Reduced movement
              if (index === 0) {
                translateX = scrollProgress * -250;
                scale = 0.8 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              } else if (index === 1) {
                translateX = 0;
                scale = 1.01;
                zIndex = 10;
                opacity = 1;
              } else if (index === 2) {
                translateX = scrollProgress * 250;
                scale = 0.8 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              }
            } else {
              // Desktop: Full animation
              if (index === 0) {
                translateX = scrollProgress * -350;
                scale = 0.75 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              } else if (index === 1) {
                translateX = 0;
                scale = 1.01;
                zIndex = 10;
                opacity = 1;
              } else if (index === 2) {
                translateX = scrollProgress * 350;
                scale = 0.75 + scrollProgress * 0.1;
                zIndex = 8;
                opacity = scrollProgress;
              }
            }

            return (
              <div
                key={plan.id}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <div className="w-56 sm:w-72 md:w-80 lg:w-80 bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
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
                  <div className="p-6 sm:p-8">
                    <ul className="space-y-3 sm:space-y-4">
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
