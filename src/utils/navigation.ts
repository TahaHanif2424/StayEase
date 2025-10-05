/**
 * Smoothly scrolls to a section by ID
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/**
 * Smoothly scrolls to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
