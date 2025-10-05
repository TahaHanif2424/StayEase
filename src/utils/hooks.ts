import { useEffect, useState, type RefObject } from "react";

/**
 * Custom hook for tracking scroll progress within a section
 */
export const useScrollProgress = (
  sectionRef: RefObject<HTMLDivElement | null>,
  multiplier: number = 0.5
) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrolled = windowHeight - rect.top;
          const progress = Math.max(
            0,
            Math.min(scrolled / (sectionHeight + windowHeight * multiplier), 1)
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef, multiplier]);

  return scrollProgress;
};

/**
 * Custom hook for checking if an element is visible in viewport
 */
export const useInViewport = (
  ref: RefObject<HTMLDivElement | null>,
  triggerPoint: number = 0.8
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * triggerPoint && rect.bottom >= 0) {
          setIsVisible(true);
        } else if (rect.top > windowHeight * triggerPoint || rect.bottom < 0) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, triggerPoint]);

  return isVisible;
};

/**
 * Custom hook for auto-rotation carousel
 */
export const useAutoRotate = (
  itemCount: number,
  interval: number = 4000,
  shouldRotate: boolean = true
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!shouldRotate) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, interval);

    return () => clearInterval(timer);
  }, [itemCount, interval, shouldRotate]);

  const rotateNext = () => setCurrentIndex((prev) => (prev + 1) % itemCount);
  const rotatePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  const rotateTo = (index: number) => setCurrentIndex(index);

  return { currentIndex, rotateNext, rotatePrev, rotateTo };
};
