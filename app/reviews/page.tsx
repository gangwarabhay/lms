import ReviewCard from "@/components/reviewcard/page";
import React from "react";

const Reviews = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-sans text-[#01464B] font-semibold text-center">
          Reviews
        </h1>
      </div>

      {/* Description */}
      <p className="text-[17px] sm:text-lg font-serif text-gray-700 leading-relaxed text-center sm:text-left max-w-4xl mx-auto mb-10 px-2">
        My clients are very close to my heart. I love them wholeheartedly. They
        are not just my coachees, but we share a close professional relationship
        so I can understand them fully and bring the best out of their coaching
        experience. Here are few tributes shared by some of my happy clients —
        please take a moment to read.
      </p>

      {/* Review Cards */}
      <ReviewCard />
    </div>
  );
};

export default Reviews;

