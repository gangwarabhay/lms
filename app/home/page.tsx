import React from "react";
import Link from "next/link";
import CoachingService from "@/components/coachingservices/page";
import Reviews from "../reviews/page";

const Home = () => {
  return (
    <div>
      <div className="w-full m-3">
        <img
          src="home3.avif"
          alt=""
          className="w-full h-[430px] object-cover-full"
        />
      </div>
      <h1 className="text-[#004D46] font-semibold font-serif text-center text-3xl">
        Hello,Learners We are your instructor
      </h1>
      <div className="flex">
        <div className="w-2/3">
          <h3 className="text-xl font-serif text-gray-700 p-3 px-2 mt-4">
            We are here to evolve. To become our Highest Self. Whether you want
            to become an inspiring leader, who leads with calm and presence. Or
            you desire more contentment at work and fulfilment in relationships;
            it all starts with the inner work and higher awareness of self. When
            you focus on becoming your ‘Best Version’, you start to excel in
            every area of your life. You connect with inner wisdom and have
            higher clarity in life. That’s where I support you as your life
            coach.
          </h3>
        </div>
        <div className="w-1/3">
          <img
            src="homelogo.avif"
            alt=""
            className="h-[180px] object-cover ml-4 mt-4"
          />
          <p className="font-serif text-center text-gray-700">
            learnwithus.com
          </p>
        </div>
      </div>
      <div>
        <Link href="/contact">
        <button className=" ml-[512px] p-1 mb-2 bg-[#004D46] text-white text-center py-2 rounded hover:bg-[#004D46] transition duration-200">
          Connect with us
        </button>
        </Link>
        
      </div>
      <div>
        <CoachingService/>
      </div>
      <div>
        <Reviews/>
      </div>
    </div>
  );
};

export default Home;
