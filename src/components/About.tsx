import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const [card3Visible, setCard3Visible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;

        // Calculate scroll progress for the line animation
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrolled = windowHeight - rect.top;
          const progress = Math.max(0, Math.min(scrolled / (sectionHeight + windowHeight * 0.5), 1));
          setScrollProgress(progress);
        } else if (rect.top > windowHeight) {
          setScrollProgress(0);
        } else if (rect.bottom < 0) {
          setScrollProgress(1);
        }
      }

      // Check each card individually (with reverse animation on scroll up)
      const checkCard = (ref: React.RefObject<HTMLDivElement>, setter: (val: boolean) => void) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            setter(true);
          } else if (rect.top > windowHeight * 0.8 || rect.bottom < 0) {
            setter(false);
          }
        }
      };

      checkCard(card1Ref, setCard1Visible);
      checkCard(card2Ref, setCard2Visible);
      checkCard(card3Ref, setCard3Visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-white py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#002650]/10 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#002650]/20 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            scrollProgress > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
            About Us
            <div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#002650] to-[#004080] transform origin-left transition-all duration-1000"
              style={{ transform: `scaleX(${scrollProgress})` }}
            ></div>
          </h2>
          <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto">
            Transforming the way you find your perfect living space
          </p>
        </div>

        {/* Story Section with Connecting Line */}
        <div className="relative flex items-center justify-center">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#002650]/10 transform -translate-x-1/2 hidden md:block overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-[#002650] via-[#003060] to-[#004080] transition-all duration-1000 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          {/* Content Cards */}
          <div className="space-y-20 w-full">
            {/* Card 1 - Our Mission */}
            <div
              ref={card1Ref}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 ${
                card1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="w-full md:w-[500px] bg-gradient-to-br from-white to-[#002650]/5 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#002650]/10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002650] to-[#003870] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At StayEase, we're on a mission to revolutionize the hostel and apartment search experience.
                  We believe that finding your ideal living space should be simple, transparent, and stress-free.
                  Our platform connects students, professionals, and travelers with quality accommodations that fit their lifestyle and budget.
                </p>
              </div>
              <div className="hidden md:block w-14 h-14 bg-gradient-to-br from-[#002650] to-[#003870] rounded-full border-4 border-white shadow-xl z-20"></div>
              <div className="hidden md:block w-[500px]"></div>
            </div>

            {/* Card 2 - Our Vision */}
            <div
              ref={card2Ref}
              className={`flex flex-col md:flex-row-reverse items-center justify-center gap-8 transition-all duration-1000 ${
                card2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="w-full md:w-[500px] bg-gradient-to-br from-white to-[#002650]/5 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#002650]/10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002650] to-[#003870] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We envision a future where everyone has access to safe, comfortable, and affordable housing options.
                  Through innovative technology and exceptional customer service, we're building a community where landlords
                  and tenants connect seamlessly, creating positive living experiences for all.
                </p>
              </div>
              <div className="hidden md:block w-14 h-14 bg-gradient-to-br from-[#002650] to-[#003870] rounded-full border-4 border-white shadow-xl z-20"></div>
              <div className="hidden md:block w-[500px]"></div>
            </div>

            {/* Card 3 - Why Choose Us */}
            <div
              ref={card3Ref}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 ${
                card3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="w-full md:w-[500px] bg-gradient-to-br from-white to-[#002650]/5 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#002650]/10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002650] to-[#003870] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  With verified listings, transparent pricing, and dedicated support, StayEase stands apart from the competition.
                  Our advanced search filters, virtual tours, and instant booking features make finding and securing your next home
                  effortless. Join thousands of satisfied users who've found their perfect space with us.
                </p>
              </div>
              <div className="hidden md:block w-14 h-14 bg-gradient-to-br from-[#002650] to-[#003870] rounded-full border-4 border-white shadow-xl z-20"></div>
              <div className="hidden md:block w-[500px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
