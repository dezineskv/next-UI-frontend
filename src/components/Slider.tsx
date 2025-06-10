// components/Slider.tsx
import React, { useState } from "react";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Slider Content */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 object-cover transition-transform duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
