import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#E7ECFF] text-gray-800 p-4">
      <div className="container mx-auto">
        {/* Footer Bottom Part */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 mt-14 mb-5">
          {/* Copyright */}
          <div className="text-center py-4 md:py-0">
            <p className="text-sm" style={{color : "#939EA4"}}>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/public" className="text-2xl font-bold text-[#37447E]">
              Landing
            </a>
          </div>

          {/* Purchase Button */}
          <div className="mt-4 md:mt-0">
            <Button href="#" variant="solid">
              Purchase Now
            </Button>
          </div>
        </div>

        {/* Footer Top Part */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300">
          {/* Left Navigation */}
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <a href="/" className="hover:text-gray-600"   style={{ color: "#929ECC" }}>
              Home
            </a>
            <a href="/about" className="hover:text-gray-600" style={{ color: "#929ECC" }}>
              About
            </a>
            <a href="/contact" className="hover:text-gray-600" style={{ color: "#929ECC" }}>
              Contact
            </a>
          </nav>

          {/* Right Social Icons */}
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-600"
              style={{ color: "#B0B8BC" }}
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>


            <a
              href="https://linkedin.com"
              className="hover:text-gray-600"
              style={{ color: "#B0B8BC" }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>


         
            <a
              href="https://twitter.com"
              className="hover:text-gray-600"
              style={{ color: "#B0B8BC" }}
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>

            <a
              href="https://youtube.com"
              className="hover:text-gray-600"
              style={{ color: "#B0B8BC" }}
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-gray-600"
              style={{ color: "#B0B8BC" }}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
   


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
