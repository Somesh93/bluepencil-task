import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        {/* Footer Top Part */}
        <div className="text-center py-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>

        {/* Footer Bottom Part */}
        <div className="flex justify-between items-center py-4 border-t border-gray-700">
          {/* Left Navigation */}
          <nav className="flex space-x-4">
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
            <a href="/contact" className="hover:text-gray-400">Contact Us</a>
          </nav>

          {/* Right Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://youtube.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="https://dribbble.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faDribbble} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;