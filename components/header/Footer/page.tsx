import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#F4F1F1] h-50 flex items-start p-4 border ">
      <img
        src="coaching-img.webp"
        alt="Footer Image"
        className="w-32 h-32 mt-4 mr-6 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center space-y-4 mt-6 ml-50 text-black font-medium ">
        <Link href="/coach" className="hover:underline cursor-pointer">
          1-2-1 Coaching
        </Link>
        <a href="/Ebook" className="hover:underline cursor-pointer">
          Download free eBook
        </a>
        <a href="#contact" className="hover:underline cursor-pointer">
          Contact
        </a>
      </div>

      <div className="flex flex-col justify-center space-y-4 space-x-12 mt-6 ml-30 text-black">
        <a
          href="mailto:yourname@gmail.com"
          className="text-black hover:text-red-400 font-medium"
        >
          aj1201z.zanasjaved@gmail.com
        </a>
        <div className=" flex h-[5vh] mb-2 w-[15vw] justify-start">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/anas_javed_121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black font-bold"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6 ml-1"
            />
            {/* <span>@anas_javed_121</span> */}
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@chaiaurcode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="w-16 h-16 ml-6"
            />
            {/* <span>@chaiaurcode</span> */}
          </a>
          <a
            href="https://www.linkedin.com/in/http://linkedin.com/in/anas-javed-511069323/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6 ml-6"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4 space-x-12 mt-6 ml-30 text-black font-medium">
        <a href="/privacy" className="hover:underline cursor-pointer">
          Privacy Policy
        </a>
        <a href="/Ebook" className="hover:underline cursor-pointer">
          Copyright © 2023
        </a>
        <a href="/terms" className="hover:underline cursor-pointer"></a>
        Leadership coaching
      </div>
    </div>
  );
}

export default Footer;
