import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold">Sankalp Foundation</h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/services" className="hover:text-white">
              Services
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Twitter Icon SVG Path */}
                <path d="M8 19c11 0 16-9 16-16 0-.2 0-.4-.02-.6A11.4 11.4 0 0 0 26 2c-1 .5-2.1.8-3.3 1a5.9 5.9 0 0 0 2.6-3.3 11.5 11.5 0 0 1-3.7 1.4 5.6 5.6 0 0 0-4.1-1.8c-3.2 0-5.8 2.6-5.8 5.8 0 .5.06.9.16 1.4-4.8-.2-9-2.5-11.8-6C1.2 3 1.5 4.7 2.6 5.7a5.7 5.7 0 0 1-2.6-.7v.1c0 2.8 2 5.2 4.6 5.8-.5.1-1 .2-1.5.2-.4 0-.7 0-1-.1.7 2.1 2.8 3.6 5.2 3.7A11.5 11.5 0 0 1 0 18.2 16 16 0 0 0 8 19" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Facebook Icon SVG Path */}
                <path d="M17 2h-3c-1.7 0-3 1.3-3 3v3H8v4h3v9h4v-9h3l1-4h-4V5c0-.6.4-1 1-1h3V2z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Instagram Icon SVG Path */}
                <path d="M12 2.2C6.5 2.2 2 6.7 2 12.3c0 5.7 4.5 10.2 10 10.2 5.5 0 10-4.5 10-10.2 0-5.6-4.5-10.1-10-10.1zm0 15.6a5.7 5.7 0 1 1 0-11.3 5.7 5.7 0 0 1 0 11.3zm7.3-11.5c-.6 0-1-.4-1-1s.4-1 1-1c.6 0 1 .4 1 1s-.4 1-1 1z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
