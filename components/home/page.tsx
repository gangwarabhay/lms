import React from "react";
import Link from "next/link";
import CoachingService from "@/components/coachingservices/page";
import Reviews from "../../app/reviews/page";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden  ">
      <div className="w-full max-w-[1264px] mx-auto px-4 ">
        {/* Hero Image */}
        <div>
          <img
            src="Byjus.webp"
            alt="Hero"
            className="w-full pt-3 h-auto object-contain rounded"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[#01464B] font-semibold font-sans p-10 text-center text-[37.5px]">
          Hello, Learners! We are your instructors.
        </h1>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Text */}
          <div className="w-full md:w-[708px] text-[17px] p-10 font-sans space-y-5">
            <p>We are here to evolve. To become our Highest Self.</p>
            <p>
              Whether you want to become an inspiring leader, who leads with calm
              and presence. Or you desire more contentment at work and fulfilment
              in relationships; it all starts with the inner work and higher
              awareness of self.
            </p>
            <p>
              When you focus on becoming your ‘Best Version’, you start to excel
              in every area of your life. You connect with inner wisdom and have
              higher clarity in life.
            </p>
            <p>That’s where I support you as your life coach.</p>
          </div>

          {/* Logo */}
          <div className="w-full md:w-[470px]  flex flex-col items-center">
            <img
              src="Byjus-Logo.png"
              alt="Byjus Logo"
              className="h-[306px] object-cover mt-4"
            />
            <p className="font-serif text-center text-gray-700 mt-2">
              learnwithus.com
            </p>
          </div>
        </div>

        {/* Connect Button */}
        <div className="flex justify-center w-full">
          <Link href="/contact">
            <button className="w-[195px] h-[50px] bg-[#004D46] text-[14px] font-semibold font-sans text-white text-center rounded hover:bg-[#00665b] transition duration-200">
              CONNECT WITH US
            </button>
          </Link>
        </div>

        {/* Services */}
        <div>
          <CoachingService />
        </div>

        {/* Reviews */}
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Home;


