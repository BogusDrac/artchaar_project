import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#FFF3E0] to-[#FFE5B4] text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="text-[#FFF8DD] fill-current"
        >
          <path d="M0,0 C720,120 1440,0 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Section with Elegant Design */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-quicksand text-red-900">About Me</h3>
            </div>
            <p className="text-sm font-lora text-gray-700 leading-relaxed">
              Nestled in the heart of our community, we craft delectable biscuits, scones, and pastries with passion and the finest ingredients. Each bite tells a story of tradition and love.
            </p>
          </div>

          {/* Contact Section with Elegant Design */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-quicksand text-red-900">Contact Me</h3>
            </div>
            <ul className="text-sm space-y-3 font-lora text-gray-700">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Phone:</span>
                <span>069 248 9903</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <span className="text-gray-500">currently unavailable</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Address:</span>
                <span>2410 / 2258 Sorrel Street, Villa Liza EXT 2</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section with Elegant Design */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-quicksand text-red-900">Opening Hours</h3>
            </div>
            <ul className="text-sm space-y-3 font-lora text-gray-700">
              <li className="flex justify-between">
                <span className="font-semibold">Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-red-600">Sunday</span>
                <span className="text-red-600">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-white/20 pt-8">
          <h1 className="text-center font-cookie text-4xl font-bold text-red-900 mb-8 animate-pulse">Follow Me</h1>
          <div className="flex flex-row items-center justify-center space-x-8">
            {/* Instagram */}
            <Link 
              to="https://www.instagram.com/"
              className="text-gray-600 hover:text-pink-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>

            {/* TikTok */}
            <Link 
              to="https://www.tiktok.com/"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                height="38"
                width="38"
                fill="currentColor"
              >
                <path d="M38.344 12.809c-2.149-1.576-3.605-3.903-4.048-6.538h-6.399v23.206c0 3.687-2.974 6.662-6.662 6.662-3.688 0-6.662-2.975-6.662-6.662 0-3.688 2.974-6.662 6.662-6.662.773 0 1.507.132 2.193.373V16.18a12.192 12.192 0 00-2.193-.23c-6.936 0-12.562 5.626-12.562 12.562 0 6.937 5.626 12.562 12.562 12.562 6.937 0 12.562-5.625 12.562-12.562V18.6c2.293 1.456 4.999 2.308 7.885 2.308V12.81c-.694 0-1.369-.101-2.018-.299z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link 
              to="https://www.facebook.com/"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="36"
                width="36"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright with Decorative Element */}
        <div className="mt-8 text-center relative">
          <div className="absolute left-0 right-0 top-1/2 border-t border-white/20"></div>
          <span className="relative z-10 bg-[#FFF3E0] px-4 text-sm font-quicksand text-gray-600">
            &copy; {new Date().getFullYear()} MAMA'S ARCHAAR. All Rights Reserved.
          </span>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="text-[#FFF8DD] fill-current"
        >
          <path d="M0,0 C720,120 1440,0 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;