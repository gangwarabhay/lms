import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#F4F1F1] w-full p-4 border flex flex-wrap md:flex-nowrap justify-between items-start gap-6">
      {/* Image */}
      <img
        src="byjus.jpg"
        alt="Footer Image"
        className="w-20 h-20 md:w-32 md:h-32 mt-4 object-cover "
      />

      {/* 1-2-1 Coaching Links */}
      <div className="flex flex-col justify-center space-y-3 mt-4 text-black font-medium min-w-[45%] sm:min-w-[40%] md:min-w-[150px]">
        <Link href="/coach" className="hover:underline cursor-pointer">
          1-2-1 Coaching
        </Link>
        <a href="/Ebook" className="hover:underline cursor-pointer">
          Download free eBook
        </a>
        <a href="/contact" className="hover:underline cursor-pointer">
          Contact
        </a>
      </div>

      {/* Contact and Socials */}
      <div className="flex flex-col justify-center space-y-3 mt-4 text-black min-w-[45%] sm:min-w-[40%] md:min-w-[180px]">
        <a
          href="mailto:aj1201z.zanasjaved@gmail.com"
          className="text-black hover:text-green-500 font-medium"
        >
          aj1201z.zanasjaved@gmail.com
        </a>

        <div className="flex h-auto w-full md:w-[15vw] justify-start md:justify-evenly gap-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/anas_javed_121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black font-bold"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@chaiaurcode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="w-16 h-10"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/anas-javed-511069323/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      {/* Policy Links */}
      <div className="flex flex-col justify-center space-y-3 mt-4 text-black font-medium min-w-[45%] sm:min-w-[40%] md:min-w-[150px]">
        <a href="/privacy" className="hover:underline cursor-pointer">
          Privacy Policy
        </a>
        <a href="/Ebook" className="hover:underline cursor-pointer">
          Copyright © 2023
        </a>
        <a href="/terms" className="hover:underline cursor-pointer">
          Leadership coaching
        </a>
      </div>
    </div>
  );
}

export default Footer;

