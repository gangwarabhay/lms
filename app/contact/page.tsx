import Form from "@/components/form/page";
import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-12 py-10">
      {/* Header */}
      <h1 className="text-[32px] sm:text-[36px] font-sans text-[#01464B] font-semibold text-center mb-8">
        Our commitment to us & you...
      </h1>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="cardimage4.jpg"
            alt="Commitment"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded shadow"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-700 font-serif text-[17px] leading-relaxed">
            I am unconditional love. I live life of freedom and serve
            powerfully. I am presence. I love wholeheartedly. I create a sacred
            space for you, with love. I will respect you no matter what. I will
            listen to you non-judgmentally. I will not fix you, for you are not
            broken. I will not rescue you, for you are not powerless. I will not
            heal you, for I see you in your wholeness. I will not preach to you,
            there is enough information on Google. I will co-create a space with
            you where clarity and growth happens. I will walk with you through
            the darkness, as you remember your light. Together, we will create
            magic.
          </p>
        </div>
      </div>

      {/* Divider Section */}
      <h2 className="text-3xl font-semibold font-serif text-[#01464B] text-center mt-14 mb-10">
        Let’s Walk Together
      </h2>

      {/* Address + Form */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold font-serif text-[#01464B] text-center mb-2">
              Address
            </h3>
            <p className="text-gray-700 font-serif text-lg text-center">
              Shastri nagar, A – 304, Near Vipin Hospital, Hartmann Road,
              Bareilly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold font-serif text-[#01464B] text-center mb-2">
              Email
            </h3>
            <p className="text-gray-700 font-serif text-lg text-center">
              abhaygan122@gmail.com
            </p>
          </div>
        </div>

        {/* Form Component */}
        <div className="w-full lg:w-2/3">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

