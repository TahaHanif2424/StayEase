import { useState, useEffect } from "react";

interface BackgroundSlideshowProps {
  onImageChange?: (index: number) => void;
}

const BackgroundSlideshow = ({ onImageChange }: BackgroundSlideshowProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/1.png", "/3.png", "/4.png", "/2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        onImageChange?.(newIndex);
        return newIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [onImageChange]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            transform:
              index === currentImageIndex
                ? "scale(1.05) translateY(0)"
                : "scale(1) translateY(20px)",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
