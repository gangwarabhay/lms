"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    console.log("CAPTCHA value:", value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA!");
      return;
    }
    alert("Form submitted successfully!");
    // your form submission logic here
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-full mx-auto p-6 bg-white rounded shadow"
      >
        <h2 className="text-3xl font-semibold font-serif text-[#01464B] mb-4 text-center">
          Contact Us
        </h2>

        <label className="block w-full mb-2 text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Grid Row with Two Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-gray-700">Phone Number</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Choose Course</label>
            <input
              type="text"
              placeholder="Which course do you want to learn?"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <label className="block mb-2 text-gray-700">Message</label>
        <textarea
          placeholder="Write your message..."
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>

        {/* CAPTCHA Section (1/3 Width) */}
        <div className="w-1/2 mx-auto mb-4">
          <ReCAPTCHA
            sitekey="6LdMH3wrAAAAAFyecmGFDLyEwH6zOesOMwDhc9v0" // Replace this with your real site key
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#01464B] text-white py-2 rounded hover:bg-[#004D46] transition duration-200"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default Form;
