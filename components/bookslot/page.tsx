import React from "react";

const Bookslot = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row rounded-lg mt-6 px-4 gap-4">
      {/* Left Box */}
      <div className="w-full lg:w-2/5 bg-[#01464B] text-white py-10 px-6 rounded-lg">
        <h1 className="text-3xl font-serif mb-2">Get started Now</h1>
        <p className="text-base sm:text-[17px] font-serif">
          Transformation begins in this moment. If not now, then when?
        </p>
      </div>

      {/* Right Box */}
      <div className="w-full lg:w-3/5 bg-[#01464B] text-white py-10 px-6 rounded-lg">
        <h1 className="text-2xl sm:text-[30px] lora-font font-serif mb-4">
          Ready to Transform your Life?
        </h1>
        <ul className="list-disc pl-5 text-base sm:text-[17px] font-serif space-y-2">
          <li>
            Do you feel self-doubts and overthinking are sabotaging your success and happiness?
          </li>
          <li>
            Do you feel all is well, but something is still missing in your life or relationships?
          </li>
          <li>
            Looking for more satisfaction and fulfillment in all areas of your life?
          </li>
        </ul>
        <button className="mt-6 bg-white text-[#01464B] font-serif font-semibold px-6 py-2 rounded hover:bg-green-100 transition">
          Book A Session
        </button>
      </div>
    </div>
  );
};

export default Bookslot;
