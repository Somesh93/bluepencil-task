import React, { useState, useEffect } from 'react';
import Button from './Button'; // Adjust the import path as necessary

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent md:bg-transparent md:text-white bg-white text-black'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
        </nav>

        {/* Center Logo */}
        <div className="flex-grow text-center">
          <a href="/" className="text-2xl font-bold">Logo</a>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:block">
          <Button href="/buy" variant="solid">Buy Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About</a>
            <Button href="/buy" variant="solid">Buy Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;