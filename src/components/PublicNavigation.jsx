// src/components/PublicNavigation.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";

function PublicNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const wikipediaLinks = [
    { text: "Humanity", url: "https://en.wikipedia.org/wiki/Humanity" },
    { text: "Philosophy", url: "https://en.wikipedia.org/wiki/Philosophy" },
    { text: "Psychology", url: "https://en.wikipedia.org/wiki/Psychology" },
    { text: "Sociology", url: "https://en.wikipedia.org/wiki/Sociology" },
    { text: "Ethics", url: "https://en.wikipedia.org/wiki/Ethics" },
    { text: "Culture", url: "https://en.wikipedia.org/wiki/Culture" },

  ];

  return (
    <>
      <nav
        className="flex items-center justify-between 
       w-[calc(100%-20px)] lg:w-full max-w-screen-lg 
       bg-black md:mx-auto fixed left-1/2 -translate-x-1/2 top-3 
       z-[99999] px-5 py-2 rounded-[30px]"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} className="h-10 w-10 rounded-full" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 justify-center">
          {wikipediaLinks.map((item, i) => (
            <li key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition"
              >
                {item.text.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3 ">
          <Link to="/signin">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none cursor-pointer text-sky-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-[70px] left-1/2 -translate-x-1/2 w-[90%] bg-black text-white rounded-xl shadow-lg z-[9999] p-4 space-y-3">
          {wikipediaLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </a>
          ))}

          <Link onClick={() => setIsOpen(false)} to="/signin">
            <button className="mt-3 w-full px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </Link>

          <Link onClick={() => setIsOpen(false)} to="/signup">
            <button className="mt-3 w-full px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default PublicNavigation;
