import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://i0.wp.com/caniaphotography.com/wp-content/uploads/2022/06/east-fairfield-vermont-farm-engagement-session-rain-6.jpg?fit=1920%2C1280&ssl=1",
    title: "Valentine's Week special offer",
    subtitle: "Get discounts on twinning Outfits",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "New Season Arrivals",
    subtitle: "Check out all the trends",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Collection",
    subtitle: "Discover fresh styles",
  },
 
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }} // ✅ Correct placement of style prop
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
            <h2 className="text-4xl font-bold">{slides[currentIndex].title}</h2>
            <p className="text-lg">{slides[currentIndex].subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full"
      >
        <ChevronLeft size={32} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full"
      >
        <ChevronRight size={32} className="text-white" />
      </button>
    </div>
  );
};

export default Hero;
