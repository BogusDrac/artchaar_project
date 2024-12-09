import React, { useState } from 'react';
import logo from "../assets/images/logo.jpg"
import { Ambulance, ClipboardPen, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-gradient-to-br from-[#FFF3E0] to-[#FFE5B4] select-none font-poppins">
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

      <div className="container mx-auto max-w-6xl px-4 relative z-40">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Mama's Archaar Logo" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-6" 
            />
            <span className="ml-2 md:ml-4 text-lg md:text-xl font-quicksand font-bold text-red-900">
              Mama's Archaar
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-red-900 focus:outline-none relative z-50"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X size={24} className="transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center group transition-all duration-300 hover:text-red-700"
            >
              <Ambulance 
                className="mr-2 text-red-900 group-hover:text-red-600 transition-colors duration-300 transform group-hover:scale-110" 
                size={24}
              />
              <span className="font-lora text-gray-700 group-hover:text-red-900">Home</span>
            </Link>
            <Link
              to="/order"
              className="flex items-center group transition-all duration-300 hover:text-red-700"
            >
              <ClipboardPen 
                className="mr-2 text-red-900 group-hover:text-red-600 transition-colors duration-300 transform group-hover:scale-110" 
                size={24}
              />
              <span className="font-lora text-gray-700 group-hover:text-red-900">Order</span>
            </Link>
            <Link
              to="/reviews"
              className="flex items-center group transition-all duration-300 hover:text-red-700"
            >
              <Heart 
                className="mr-2 text-red-900 group-hover:text-red-600 transition-colors duration-300 transform group-hover:scale-110" 
                size={24}
              />
              <span className="font-lora text-gray-700 group-hover:text-red-900">Reviews</span>
            </Link>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#FFF3E0] z-[9999] md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="flex items-center text-2xl text-red-900 hover:text-red-700 transition-colors"
                >
                  <Ambulance className="mr-4" size={32} />
                  Home
                </Link>
                <Link
                  to="/order"
                  onClick={toggleMenu}
                  className="flex items-center text-2xl text-red-900 hover:text-red-700 transition-colors"
                >
                  <ClipboardPen className="mr-4" size={32} />
                  Order
                </Link>
                <Link
                  to="/reviews"
                  onClick={toggleMenu}
                  className="flex items-center text-2xl text-red-900 hover:text-red-700 transition-colors"
                >
                  <Heart className="mr-4" size={32} />
                  Reviews
                </Link>
                <button 
                  onClick={toggleMenu} 
                  className="absolute top-6 right-6 text-red-900 z-50"
                  aria-label="Close Menu"
                >
                  <X size={32} />
                </button>
              </div>
            </div>
          )}
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
    </nav>
  );
}

export default Navbar;