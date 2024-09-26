import { useState, useEffect } from "react";
import Button from './Button'; // Adjust the import path as necessary

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
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
          <button className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;