"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showResources, setShowResources] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#F4F1F1] text-xl shadow-md z-50 relative">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img className="h-[50px] cursor-pointer" src="Byjus-Logo.png" alt="Logo" />
        </Link>

        {/* Hamburger menu (Mobile) */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* Main menu */}
        <ul className={`md:flex items-center space-x-6 ${mobileMenuOpen ? "block mt-4" : "hidden"} md:mt-0 md:space-x-6 w-full md:w-auto`}>
          <li>
            <Link href="/Home" className="block py-2 hover:text-[#004D46]">Home</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button
              onClick={() => setShowServices(!showServices)}
              className="flex items-center space-x-1 py-2"
            >
              <span>Services</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>

            {showServices && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border rounded z-20">
                <Link href="/services/121-coaching" className="block px-4 py-2 hover:bg-gray-100 text-base">1-2-1 Coaching</Link>
                <Link href="/services/leadership" className="block px-4 py-2 hover:bg-gray-100 text-base">Leadership Coaching</Link>
                <Link href="/services/group-programs" className="block px-4 py-2 hover:bg-gray-100 text-base">Group Programs</Link>
                <Link href="/services/self-paced" className="block px-4 py-2 hover:bg-gray-100 text-base">Self-Paced Courses</Link>
              </div>
            )}
          </li>

          {/* Resources Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button
              onClick={() => setShowResources(!showResources)}
              className="flex items-center space-x-1 py-2"
            >
              <span>Resources</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>

            {showResources && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg border rounded z-20">
                <Link href="/resources/blog" className="block px-4 py-2 hover:bg-gray-100 text-base">Blog</Link>
                <Link href="/resources/docs" className="block px-4 py-2 hover:bg-gray-100 text-base">Docs</Link>
                <Link href="/resources/tutorials" className="block px-4 py-2 hover:bg-gray-100 text-base">Tutorials</Link>
              </div>
            )}
          </li>

          <li>
            <Link href="/reviews" className="block py-2 hover:text-[#004D46]">Reviews</Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 hover:text-[#004D46]">About</Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 hover:text-[#004D46]">Contact</Link>
          </li>
        </ul>

        {/* Search Icon (right aligned) */}
        <div className="hidden md:block ml-6">
          <i className="fas fa-search text-gray-700 text-lg cursor-pointer"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

