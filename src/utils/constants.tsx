/**
 * Common CSS class strings for consistency across components
 */
export const COMMON_CLASSES = {
  // Input styles
  input: "w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300",

  // Button styles
  primaryButton: "w-full py-3 sm:py-4 bg-[#002650] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 transform hover:scale-105 shadow-lg",

  // Card styles
  card: "bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#002650]/10",

  // Icon container styles
  iconContainer: "bg-gradient-to-br from-[#002650] to-[#003870] rounded-2xl flex items-center justify-center",
} as const;

/**
 * SVG icon components for reuse
 */
export const SVG_ICONS = {
  chevronLeft: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>,
  chevronRight: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>,
  checkmark: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
  close: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
} as const;

/**
 * Breakpoint detection utilities
 */
export const BREAKPOINTS = {
  isMobile: () => typeof window !== "undefined" && window.innerWidth < 640,
  isSmallTablet: () => typeof window !== "undefined" && window.innerWidth >= 640 && window.innerWidth < 768,
  isTablet: () => typeof window !== "undefined" && window.innerWidth >= 768 && window.innerWidth < 1024,
  isDesktop: () => typeof window !== "undefined" && window.innerWidth >= 1024,
  isMobileOrTablet: () => typeof window !== "undefined" && window.innerWidth < 1024,
} as const;
