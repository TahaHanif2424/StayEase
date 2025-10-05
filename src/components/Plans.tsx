import { useEffect, useRef, useState } from "react";

const Plans = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
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
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your lifestyle and budget
          </p>
        </div>

        {/* Cards Container with Expanding Animation */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {plans.map((plan, index) => {
            let translateX = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (index === 0) {
              // Left card
              translateX = scrollProgress * -350; // Move left
              scale = 0.75 + scrollProgress * 0.1;
              zIndex = 8;
              opacity = scrollProgress;
            } else if (index === 1) {
              // Center card (always visible, larger)
              translateX = 0;
              scale = 1.01;
              zIndex = 10;
              opacity = 1;
            } else if (index === 2) {
              // Right card
              translateX = scrollProgress * 350; // Move right
              scale = 0.75 + scrollProgress * 0.1;
              zIndex = 8;
              opacity = scrollProgress;
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
                <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-2xl font-semibold text-white">
                        {plan.price}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <svg
                            className="w-6 h-6 text-green-500 flex-shrink-0"
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
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full mt-8 py-4 bg-[#002650] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
