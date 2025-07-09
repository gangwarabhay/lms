
import ReviewCard from "@/components/reviewcard/page";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <h1 className="font-serif text-center text-3xl font-semibold text-[#004D46]  underline mt-3">Reviews</h1>
      <p  className="text-xl font-serif text-gray-700 p-4 mt-4">
        My clients are very close to my heart. I love them wholeheartedly. They
        are not just my coachees, but we share a close professional relationship
        so I can understand them fully and bring the best out of their coaching
        experience. Here are Few Tributes shared by some of my happy clients,
        please take a moment to read.
      </p>
      <ReviewCard/>
    </div>
  );
};

export default Reviews;
