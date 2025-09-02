
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn } from "@clerk/clerk-react";

import Selfimprvements from "./selfim";
import Islamicknowledge from "./islam";
import Scienceknowledge from "./scienceknowledge";
import Tecnology from "./Tecnology";
import Generalknowledge from "./Generalknowledge";
import Slider from "./Slider";
import "../index.css";
import logo from "../images/image.png";

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav className="flex items-center justify-between 
       w-[calc(100%-20px)] lg:w-full max-w-screen-lg 
       bg-black md:mx-auto fixed left-1/2 -translate-x-1/2 top-3 
       z-[99999] px-5 py-2 rounded-[30px]">

        <div className="flex items-center space-x-3">
          <img src={logo} className="h-10 w-10 rounded-full" alt="Logo" />
        </div>

        <ul className="hidden md:flex space-x-4 justify-center">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Humanity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-100 transition"
            >
              HUMANITY
            </a>
          </li>
          <SignedIn>


            <li><Link to="/scienceknowledge" className="text-white hover:text-yellow-100 transition">SCIENCE KNOWLEDGE</Link></li>
            <li><Link to="/selfim" className="text-white hover:text-yellow-100 transition">SELF IMPROVEMENT</Link></li>
            <li><Link to="/islam" className="text-white hover:text-yellow-100 transition">ISLAMIC KNOWLEDGE</Link></li>
            <li><Link to="/Tecnology" className="text-white hover:text-yellow-100 transition">TECHNOLOGY</Link></li>
            <li><Link to="/Generalknowledge" className="text-white hover:text-yellow-100 transition">GENERAL KNOWLEDGE</Link></li>
          </SignedIn>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none cursor-pointer text-sky-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[70px] left-1/2 -translate-x-1/2 w-[90%] bg-black text-white rounded-xl shadow-lg z-[9999] p-4 space-y-3">
          <Link onClick={() => setIsOpen(false)} to="/selfim" className="block hover:text-yellow-300">Self Improvements</Link>
          <Link onClick={() => setIsOpen(false)} to="/islam" className="block hover:text-yellow-300">Islamic Knowledge</Link>
          <Link onClick={() => setIsOpen(false)} to="/Tecnology" className="block hover:text-yellow-300">Technology</Link>
          <Link onClick={() => setIsOpen(false)} to="/Generalknowledge" className="block hover:text-yellow-300">General Knowledge</Link>

          <SignedIn>
            <Link onClick={() => setIsOpen(false)} to="/scienceknowledge" className="block hover:text-yellow-300">Science Knowledge</Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="mt-3 w-full px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="mt-3">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      )}

      {/* Page Routes */}
      <div className="pt-20 px-4">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Slider />} />
          <Route path="/selfim" element={<Selfimprvements />} />
          <Route path="/islam" element={<Islamicknowledge />} />
          <Route path="/Tecnology" element={<Tecnology />} />
          <Route path="/Generalknowledge" element={<Generalknowledge />} />

          {/* Protected route */}
          <Route
            path="/scienceknowledge"
            element={
              <ProtectedRoute>
                <Scienceknowledge />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
