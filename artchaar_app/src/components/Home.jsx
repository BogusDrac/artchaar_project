import React, { useState, useEffect } from 'react';
import { Ambulance, ClipboardPen, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Explicit image imports with console logging
import chillies1 from "../assets/images/chillies1.jpg";
import chillies2 from "../assets/images/chillies2.jpg";
import chillies3 from "../assets/images/chillies3.jpg";
import combo1 from "../assets/images/combo1.jpg";
import garlic1 from "../assets/images/garlic1.jpg";
import garlic2 from "../assets/images/garlic2.jpg";
import mango1 from "../assets/images/mango1.jpg";
import mango2 from "../assets/images/mango2.jpg";
import mango3 from "../assets/images/mango3.jpg";

// Log imported images to console
console.log('Imported Images:', {
  chillies1, chillies2, chillies3, 
  combo1, 
  garlic1, garlic2, 
  mango1, mango2, mango3
});

const productImages = [
  chillies1, chillies2, chillies3, 
  combo1, 
  garlic1, garlic2, 
  mango1, mango2, mango3
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E0] to-[#FFE5B4] overflow-hidden">
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none" 
          className="text-white/10 fill-current"
        >
          <path d="M0,0 C720,60 1440,0 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-red-900 mb-4">
            Mama's Archaar
          </h1>
          <p className="text-lg md:text-xl font-lora text-gray-700 max-w-2xl mx-auto">
            Authentic, Handcrafted Pickles Bursting with Traditional Flavors. 
            Every Jar Tells a Story of Generations of Culinary Passion.
          </p>
        </div>

        {/* Product Showcase Slider */}
        <div className="relative max-w-3xl mx-auto mb-12">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] md:h-[500px]">
            {productImages.map((img, index) => (
              <div 
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Mama's Archaar Product ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image load error:', e);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full shadow-md transition-all"
            >
              <ChevronLeft size={24} className="text-red-900" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full shadow-md transition-all"
            >
              <ChevronRight size={24} className="text-red-900" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-red-900 w-6' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-5">
          <div className="bg-white/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
            <Heart 
              size={48} 
              className="mx-auto mb-4 text-red-900 group-hover:scale-110 transition-transform" 
            />
            <h3 className="text-xl font-quicksand font-bold text-red-900 mb-2">
              Handmade with Love
            </h3>
            <p className="text-gray-700 font-lora">
              Each pickle is crafted using traditional family recipes passed down through generations.
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
            <Ambulance 
              size={48} 
              className="mx-auto mb-4 text-red-900 group-hover:scale-110 transition-transform" 
            />
            <h3 className="text-xl font-quicksand font-bold text-red-900 mb-2">
              Quick Delivery
            </h3>
            <p className="text-gray-700 font-lora">
              Fresh pickles delivered straight to your doorstep, ensuring maximum flavor and quality.
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
            <ClipboardPen 
              size={48} 
              className="mx-auto mb-4 text-red-900 group-hover:scale-110 transition-transform" 
            />
            <h3 className="text-xl font-quicksand font-bold text-red-900 mb-2">
              Custom Orders
            </h3>
            <p className="text-gray-700 font-lora">
              Personalize your pickle experience with custom flavor combinations and packaging.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/order"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-full 
            font-quicksand font-bold text-lg hover:bg-red-800 transition-colors 
            shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none" 
          className="text-white/10 fill-current"
        >
          <path d="M0,0 C720,60 1440,0 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>
    </div>

    </div>
  );
}

export default Home;