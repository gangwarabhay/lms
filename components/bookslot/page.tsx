import React from "react";

const Bookslot = () => {
  return (
    <div className="w-full md:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Section - 1/3 */}
        <div className="bg-[#004D46] text-white p-6 font-serif rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2">Get started Now</h1>
          <p>Transformation begins in this moment. If not now, then when?</p>
        </div>

        {/* Right Section - 2/3 */}
        <div className="md:col-span-2 bg-[#004D46] text-white p-6 font-serif rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Ready to Transform your Life?</h1>
          <ul className="list-disc pl-5 space-y-2 text-base">
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
          <button className="mt-6 bg-white text-[#004D46] font-serif font-semibold px-6 py-2 rounded hover:bg-green-100 transition">
            Book A Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookslot;

