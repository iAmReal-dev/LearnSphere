import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex items-center py-4 w-full md:w-[80vw] mx-auto justify-between relative min-h-[60px] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      {/* Logo */}
      <div className="w-[90vw] flex justify-between mx-auto">
        <div className="flex gap-10">
          <p className="font-bold font-poppins text-lg md:text-xl">Logo</p>
          <p className="hidden md:block text-[#7010CD] text-lg md:text-xl hover:underline cursor-pointer">Course</p>
        </div>

        {/* Toggle Button (Visible on Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-4 md:gap-10 absolute md:static top-14 left-0 w-[100vw] md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0 h-[100vh]' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <p className="block md:hidden text-[#7010CD] text-lg md:text-xl hover:underline cursor-pointer">Course</p>
        <p className="text-lg md:text-xl hover:underline cursor-pointer">Login</p>
        <p className="text-white py-2 px-4 whitespace-nowrap md:px-5 rounded-3xl bg-gradient-to-r from-[#57029C] to-[#F700AC] text-base md:text-lg">Register for free</p>
      </div>
    </div>
  );
};

export default Header;