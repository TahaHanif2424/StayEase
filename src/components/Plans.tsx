import { useRef, useState } from "react";
import BookingModal from "./BookingModal";
import SectionHeading from "./SectionHeading";
import { useScrollProgress, useAutoRotate } from "../utils/hooks";
import { SVG_ICONS, BREAKPOINTS } from "../utils/constants";

const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollProgress = useScrollProgress(sectionRef, 0.2);
  const { currentIndex, rotateNext, rotatePrev, rotateTo } = useAutoRotate(
    3,
    4000,
    BREAKPOINTS.isMobileOrTablet()
  );

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

  const getCardStyles = (index: number) => {
    const isMobile = BREAKPOINTS.isMobile();
    const isSmallTablet = BREAKPOINTS.isSmallTablet();
    const isTablet = BREAKPOINTS.isTablet();

    let translateX = 0;
    let scale = 1;
    let zIndex = 10;
    let opacity = 1;

    if (isMobile || isSmallTablet || isTablet) {
      const position = (index - currentIndex + plans.length) % plans.length;
      if (position === 0) {
        translateX = 0;
        scale = 1;
        zIndex = 10;
        opacity = 1;
      } else if (position === 1) {
        translateX = 200;
        scale = 0.7;
        zIndex = 8;
        opacity = 0.4;
      } else {
        translateX = -200;
        scale = 0.7;
        zIndex = 8;
        opacity = 0.4;
      }
    } else {
      // Desktop layout
      const transforms = [
        {
          translateX: scrollProgress * -350,
          scale: 0.75 + scrollProgress * 0.15,
          zIndex: 8,
          opacity: 0.3 + scrollProgress * 0.7,
        },
        { translateX: 0, scale: 1.01, zIndex: 10, opacity: 1 },
        {
          translateX: scrollProgress * 350,
          scale: 0.75 + scrollProgress * 0.15,
          zIndex: 8,
          opacity: 0.3 + scrollProgress * 0.7,
        },
      ];
      return transforms[index];
    }

    return { translateX, scale, zIndex, opacity };
  };

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
          />
        </div>

        {/* Cards Container with Expanding Animation */}
        <div className="relative flex items-start lg:items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] pt-4 lg:pt-0">
          {/* Mobile and Tablet Navigation Buttons */}
          <button
            onClick={rotatePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 lg:hidden"
            aria-label="Previous plan"
          >
            {SVG_ICONS.chevronLeft}
          </button>

          <button
            onClick={rotateNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 lg:hidden"
            aria-label="Next plan"
          >
            {SVG_ICONS.chevronRight}
          </button>

          {plans.map((plan, index) => {
            const { translateX, scale, zIndex, opacity } = getCardStyles(index);
            const isMobileOrTablet = BREAKPOINTS.isMobileOrTablet();

            return (
              <div
                key={plan.id}
                className={`absolute ${
                  isMobileOrTablet
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
                          {SVG_ICONS.checkmark}
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
                      className="w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-[#002650] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
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
                onClick={() => rotateTo(index)}
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
