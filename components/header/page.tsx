"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showResources, setShowResources] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="bg-[#F4F1F1] text-xl">
      <nav>
        <div className="flex items-center p-4">
          {/* Logo */}
          <div className="w-30 mr-6">
            <img className="h-[60px]" src="navlogo.png" alt="Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-6 flex-1">
            <Link href="/home">Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="flex items-center space-x-1">
                <span>Services</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                </svg>
              </button>

              {showServices && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border rounded z-10">
                  <Link href="/services/121-coaching" className="block px-4 py-2 text-base hover:bg-gray-100">1-2-1 Coaching</Link>
                  <Link href="/services/leadership" className="block px-4 py-2 text-base hover:bg-gray-100">Leadership Coaching</Link>
                  <Link href="/services/group-programs" className="block px-4 py-2 text-base hover:bg-gray-100">Group Programs</Link>
                  <Link href="/services/self-paced" className="block px-4 py-2 text-base hover:bg-gray-100">Self-Paced Courses</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button className="flex items-center space-x-1">
                <span>Resources</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                </svg>
              </button>

              {showResources && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded z-10">
                  <Link href="/resources/blog" className="block px-4 py-2 text-base hover:bg-gray-100">Blog</Link>
                  <Link href="/resources/docs" className="block px-4 py-2 text-base hover:bg-gray-100">Docs</Link>
                  <Link href="/resources/tutorials" className="block px-4 py-2 text-base hover:bg-gray-100">Tutorials</Link>
                </div>
              )}
            </div>

            <Link href="/reviews">Reviews</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>

          {/* Search Icon aligned right */}
          <i className="fas fa-search text-gray-700 text-lg cursor-pointer ml-4"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
