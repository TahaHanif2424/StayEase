import { useState, useEffect } from "react";

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/1.png", "/3.png", "/4.png", "/2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
