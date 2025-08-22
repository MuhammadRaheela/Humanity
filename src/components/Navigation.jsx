import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // hamburger icons
import Selfimprvements from './selfim';
import Islamicknowledge from './islam';
import Scienceknowledge from './scienceknowledge';
import Tecnology from './Tecnology';
import Generalknowledge from './Generalknowledge';
import Slider from './Slider';
import '../index.css';
import logo from '../images/image.png';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <nav className="flex items-center justify-between 
  w-[calc(100%-20px)] lg:w-full max-w-screen-lg 
  bg-black md:mx-auto fixed left-1/2 -translate-x-1/2 top-3 
  z-[99999] px-5 py-2 rounded-[30px]">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} className="h-10 w-10 rounded-full" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 justify-center">
          <li>
            <Link to="/selfim" className="text-white hover:text-yellow-300 transition">Self Improvements</Link>
          </li>
          <li>
            <Link to="/islam" className="text-white hover:text-yellow-300 transition">Islamic Knowledge</Link>
          </li>
          <li>
            <Link to="/scienceknowledge" className="text-white hover:text-yellow-300 transition">Science Knowledge</Link>
          </li>
          <li>
            <Link to="/Tecnology" className="text-white hover:text-yellow-300 transition">Technology</Link>
          </li>
          <li>
            <Link to="/Generalknowledge" className="text-white hover:text-yellow-300 transition">General Knowledge</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-[70px] left-1/2 -translate-x-1/2 w-[90%] bg-black text-white rounded-xl shadow-lg z-[9999] p-4 space-y-3">
          <Link onClick={() => setIsOpen(false)} to="/selfim" className="block hover:text-yellow-300">Self Improvements</Link>
          <Link onClick={() => setIsOpen(false)} to="/islam" className="block hover:text-yellow-300">Islamic Knowledge</Link>
          <Link onClick={() => setIsOpen(false)} to="/scienceknowledge" className="block hover:text-yellow-300">Science Knowledge</Link>
          <Link onClick={() => setIsOpen(false)} to="/Tecnology" className="block hover:text-yellow-300">Technology</Link>
          <Link onClick={() => setIsOpen(false)} to="/Generalknowledge" className="block hover:text-yellow-300">General Knowledge</Link>
        </div>
      )}

      {/* Page Content */}
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/selfim" element={<Selfimprvements />} />
          <Route path="/islam" element={<Islamicknowledge />} />
          <Route path="/scienceknowledge" element={<Scienceknowledge />} />
          <Route path="/Tecnology" element={<Tecnology />} />
          <Route path="/Generalknowledge" element={<Generalknowledge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
