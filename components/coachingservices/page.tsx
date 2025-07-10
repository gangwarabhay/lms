import About from "@/app/about/page";
import Link from "next/link";
import React from "react";

const CoachingService = () => {
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-12 py-10">
      <h1 className="text-[#01464B] font-semibold font-serif text-center text-3xl mb-10">
        Life Coaching Services
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border p-3 rounded shadow hover:shadow-lg transition duration-300">
          <img
            src="cardimage1.jpg"
            alt="Coaching"
            className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-[#01464B] font-serif text-2xl px-4 mt-4">
            Effective Leadership 1:1 Coaching
          </h3>
          <p className="text-lg font-serif text-gray-700 px-4 mt-2">
            Want to lead with Calm and Deep Presence? Become the effective
            Leader you want to Be.
          </p>
          <Link
            href="/contact"
            className="block text-[#01464B] font-serif text-lg px-4 py-3 hover:underline"
          >
            Click here to coach with us
          </Link>
        </div>

        {/* Card 2 */}
        <div className="border p-3 rounded shadow hover:shadow-lg transition duration-300">
          <img
            src="cardimage2.jpg"
            alt="Coaching"
            className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-[#01464B] font-serif text-2xl px-4 mt-4">
            Deep Transformational Coaching
          </h3>
          <p className="text-lg font-serif text-gray-700 px-4 mt-2">
            Explore your inner self and unlock true potential through
            transformational coaching.
          </p>
          <Link
            href="/contact"
            className="block text-[#01464B] font-serif text-lg px-4 py-3 hover:underline"
          >
            Click here to coach with us
          </Link>
        </div>

        {/* Card 3 */}
        <div className="border p-3 rounded shadow hover:shadow-lg transition duration-300">
          <img
            src="cardimage4.jpg"
            alt="Coaching"
            className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-[#01464B] font-serif text-2xl px-4 mt-4">
            Group Coaching for Leaders
          </h3>
          <p className="text-lg font-serif text-gray-700 px-4 mt-2">
            Empower teams and elevate performance with powerful group sessions.
          </p>
          <Link
            href="/contact"
            className="block text-[#01464B] font-serif text-lg px-4 py-3 hover:underline"
          >
            Click here to coach with us
          </Link>
        </div>
      </div>

      {/* About section below cards */}
      <div className="mt-12">
        <About />
      </div>
    </div>
  );
};

export default CoachingService;

