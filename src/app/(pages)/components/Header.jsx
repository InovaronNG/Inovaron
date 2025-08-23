import React from "react";
import navtop from "../navigation/navtop";
import Link from "next/link";
import { useState } from "react";
import socials from "../navigation/socials";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-5 py-4 flex justify-between items-center shadow-md md:shadow-lg bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.png" className="h-12 w-18 md:w-22 md:h-18" alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="nav hidden md:flex gap-8 items-center">
        {navtop.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`
              font-medium transition-all duration-300
              ${pathname === item.href ? "text-blue-900 font-bold" : "text-gray-600 hover:text-blue-900"}
            `}
          >
            {item.name}
          </Link>
        ))}
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-900 transition duration-300"
          >
            {social.icon}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={handleToggle}
        className="md:hidden p-2 text-gray-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={handleToggle}
              className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>

          {/* Menu links */}
          <nav className="flex flex-col flex-grow mt-8 gap-2">
            {navtop.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleToggle}
                className={`py-3 px-4 rounded transition-colors duration-200
                  ${pathname === item.href ? "bg-blue-100 text-blue-900 font-semibold" : "text-gray-700 hover:bg-gray-100"}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="mt-auto pt-6 text-center border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">Connect with Us</h4>
            <div className="flex justify-center items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-900 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;