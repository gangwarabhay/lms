import About from "@/app/about/page";
import Link from "next/link";
import React from "react";

const CoachingService = () => {
  return (
    <div>
      <h1 className="text-[#004D46] font-semibold font-serif text-center text-3xl">
        Life Coaching Services
      </h1>
      <div className="w-full flex">
        <div className="w-1/3 border-1 ">
          <img
            src="cardimage1.jpg"
            alt=""
            className="object-cover w-[380px] m-4 transition-transform duration-300 hover:scale-105 "
          />
          <h3 className="text-[#004D46] font-serif text-2xl ml-4">
            Effective Leadership 1:1 Coaching
          </h3>
          <p className="text-xl font-serif text-gray-700 p-3 mt-2">
            Want to lead with Calm and Deep Presence? Become the effective
            Leader you want to Be.
          </p>
          <Link
            href="/contact"
            className="text-[#004D46] font-serif text-xl ml-4 mb-2"
          >
            {" "}
            click here to coaching with us
          </Link>
        </div>
        <div className="w-1/3 border-1 ">
          <img
            src="cardimage2.jpg"
            alt=""
            className="object-cover w-[380px] m-4  transition-transform duration-300 hover:scale-105 "
          />
          <h3 className="text-[#004D46] font-serif text-2xl ml-4">
            Effective Leadership 1:1 Coaching
          </h3>
          <p className="text-xl font-serif text-gray-700 p-3 mt-2">
            Want to lead with Calm and Deep Presence? Become the effective
            Leader you want to Be.
          </p>
          <Link
            href="/contact"
            className="text-[#004D46] font-serif text-xl ml-4 mb-2"
          >
            {" "}
            click here to coaching with us
          </Link>
        </div>
        <div className="w-1/3 border-1 ">
          <img
            src="cardimage3.jpg"
            alt=""
            className="object-cover w-[380px] h-[250px] m-4 transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-[#004D46] font-serif text-2xl ml-4">
            Effective Leadership 1:1 Coaching
          </h3>
          <p className="text-xl font-serif text-gray-700 p-3 mt-2">
            Want to lead with Calm and Deep Presence? Become the effective
            Leader you want to Be.
          </p>
          <Link
            href="/contact"
            className="text-[#004D46] font-serif text-xl ml-4 mb-2"
          >
            {" "}
            click here to coaching with us
          </Link>
        </div>
      </div>
      <div className="mt-6">
          <About/>
      </div>
     
    </div>
  );
};

export default CoachingService;
