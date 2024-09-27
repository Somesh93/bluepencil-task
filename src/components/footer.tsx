import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faDribbble } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-[#E7ECFF] text-gray-800 p-4">
      <div className="container mx-auto">

   {/* Footer Bottom Part */}
   <div className="flex flex-col md:flex-row justify-between items-center py-4">
       
       
       
         {/* Copyright */}
         <div className="text-center py-4 md:py-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>


          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium">Your Company</span>
          </div>

        
          {/* Purchase Button */}
          <div className="mt-4 md:mt-0">
          <Button href="#" variant="solid">
              Purchase
            </Button>
          </div>
        </div>

        {/* Footer Top Part */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300">
          {/* Left Navigation */}
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <a href="/" className="hover:text-gray-600">Home</a>
            <a href="/about" className="hover:text-gray-600">About</a>
            <a href="/contact" className="hover:text-gray-600">Contact</a>
          </nav>

          {/* Right Social Icons */}
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-600">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-600">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://youtube.com" className="hover:text-gray-600">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="https://dribbble.com" className="hover:text-gray-600">
              <FontAwesomeIcon icon={faDribbble} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;