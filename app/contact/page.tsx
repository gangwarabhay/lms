import Form from "@/components/form/page";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-3xl text-[#004D46] font-semibold font-serif text-center">
        Our commitment to us & you...
      </h1>
      <div className="flex">
        <div className="w-1/2 overflow-hidden m-6 ">
          <img
            src="cardimage4.jpg"
            alt=""
            className="w-130 h-108 object-cover"
          />
        </div>
        <div className="w-1/2">
          <p className="text-gray-700 font-serif text-xl mt-3 p-2 mr-1">
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
      <h1 className="text-3xl font-semibold font-serif text-[#004D46] mt-3 text-center ">
        lets Walk Together
      </h1>
      <div className="flex">
        <div className="w-1/3">
          <h1 className="text-3xl font-semibold font-serif text-[#004D46] mt-3 text-center ">Address</h1>
          <p className="text-gray-700 font-serif text-xl mt-3 p-2">
            Shastri nagar, A – 304, Near vipin Hospital, hartmann road,
            Bareilly.
          </p>
          <h1 className="text-3xl font-semibold font-serif text-[#004D46] mt-6 text-center " >Email</h1>
          <p className="text-gray-700 font-serif text-xl mt-3 p-2">abhaygan122@gmail.com</p>
        </div>
        <div className="w-2/3 mt-3">
        <Form/>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
