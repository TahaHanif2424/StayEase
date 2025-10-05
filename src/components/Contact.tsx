import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;

        // Trigger animation when section is in view, reverse when out of view
        if (
          rect.top <= windowHeight * 0.75 &&
          rect.bottom >= windowHeight * 0.25
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }

        // Calculate scroll progress for heading animation
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrolled = windowHeight - rect.top;
          const progress = Math.max(
            0,
            Math.min(scrolled / (sectionHeight + windowHeight * 0.5), 1)
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#002650] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden flex items-center"
    >
      {/* Background Shapes */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/5 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/10 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div
          className={`mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <SectionHeading
            title="Get In Touch"
            subtitle="Have questions? We'd love to hear from you"
            progress={scrollProgress}
            isDark={true}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {/* Contact Information */}
          <div
            className={`flex flex-col gap-3 sm:gap-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-3xl shadow-xl border border-white/20 flex-1 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col justify-around">
                {/* Address */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#002650] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-tight">
                      123 StayEase Avenue, Downtown District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#002650] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#002650] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      info@stayease.com
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      support@stayease.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#002650] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Follow Us
              </h3>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#002650] rounded-xl flex items-center justify-center hover:bg-[#003870] transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* <a
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#002650] rounded-xl flex items-center justify-center hover:bg-[#003870] transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.instagram.com/stay_ease_?igsh=MTJ4NnFtczF3Y2xqbg=="
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#002650] rounded-xl flex items-center justify-center hover:bg-[#003870] transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#002650] rounded-xl flex items-center justify-center hover:bg-[#003870] transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-white p-4 sm:p-5 md:p-6 rounded-3xl shadow-xl border border-white/20 transition-all duration-1000 delay-400 hover:shadow-2xl ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Information</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-[#002650] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
