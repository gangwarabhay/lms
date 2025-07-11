import React from "react";

function Ebook() {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className="text-center">
        <p className="text-[50px] sm:text-[40px] md:text-[50px] inline-block border-b-4 border-double border-black pb-2 mt-8 font-font text-[#01464B] font-semibold">
          Free eBook
        </p>
      </div>
      <div>
        <h1 className="text-[40px] sm:text-[32px] md:text-[40px] text-[#01464B] font-bold mt-10 text-center">
          How to Stop Over-Thinking in 3 Minutes
        </h1>
        <br />
      </div>
      <div className="flex flex-col lg:flex-row px-2 sm:px-6 md:px-3">
        <img
          src="img2.png"
          alt=""
          className="w-100 sm:w-full md:w-[200px] lg:w-[450px] h-auto object-cover mt-6 ml-0 md:ml-8 mr-"
        />
        <ul className="text-[17px] mt-6 ml-0 md:ml-8 ">
          <li>
            Do you overthink and over-analyze things? Is stressful thoughts and
            anxiety a regular part of your life and overwhelm you? Do you want
            to have a clear mind, enhance your decision-making ability,
            creativity, and productivity, so you can use your mind to your best
            capacity? If Yes, then by practicing the simple and practical tools
            given in this book, you'll be able to cultivate a new mind, and that
            too by devoting just three minutes in a day.
          </li>
          <h2 className=" font-bold mt-2 ml-0">
            Get this e-book as a gift from Saloni now
          </h2>

          <div className="mt-4 ml-0 w-full">
            <label htmlFor="email" className="block font-bold text-gray-700 ">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              className="border border-gray-500  p-3 mt-2 w-90"
            />
          </div>
          <div className="mt-4 ml-0 w-full">
            <label
              htmlFor="full-name"
              className="block font-bold text-gray-700 "
            >
              Full Name
            </label>
            <input
              type="full-name"
              id="name"
              name="name"
              placeholder=""
              className="border border-gray-500 p-3 mt-2 w-90"
            />
            <div className="bg-[#01464B]  text-white h-12 w-60 text-center mt-4 flex hover:cursor-pointer hover:bg-green-100 hover:text-black rounded">
              <p className="m-auto cursor-pointer hover:text-black">
                GET YOUR EBOOK NOW!
              </p>
            </div>
          </div>
        </ul>
      </div>
      <div>
        <h1 className="text-[40px] sm:text-[32px] md:text-[40px] text-[#01464B] font-bold mt-20 text-center">
          About the Author
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-6 ml-0 md: px-3 sm:px-6 md:px-10">
        <img
          src="saloni-img.jpg"
          alt="Saloni Singh"
          className="w-full sm:w-full md:h-[460px] md:w-[428px] object-cover mb-6 md:mb-3 md:mr-10"
        />

        <div className="flex flex-col">
          <p className="mb-4 px-2 sm:px-4 md:px3 ml-7">
            Saloni Singh is India's leading coach for CEOs, Leaders,
            Professionals from all walks of life.
          </p>
          <p className="mb-4 px-2 sm:px-4 md:px3 ml-7">
            She is the Creator of a neuro-integrative program 'Unshakeable' to
            cultivate a calm mind.
          </p>
          <p className="mb-4 px-2 sm:px-4 md:px3 ml-7">
            She is a Gynecologist turned Life & Self-Mastery Coach, a Mental &
            Emotional Well-Being Expert and works with individuals one to one as
            well as with groups in organizations.
          </p>
          <p className="mb-4 px-2 sm:px-4 md:px3 ml-7">
            She's been coaching and training people for 13+ years, globally, to
            help them become more mindful and cultivate fulfilling
            relationships.
          </p>
          <p className="mb-4 px-2 sm:px-4 md:px3 ml-7">
            Try the simple & efficient ways to stop overthinking, shared by Dr.
            Saloni in this hand-book and share your experience and questions
            with us.
          </p>
          <p className="mb-4 px-2 sm:px-4 md:px3 ml-7">Thank you. Love, Saloni…</p>


          <div className="flex flex-col sm:flex-row w-full justify-between ml-0 px-2 sm:px-4 md:px-8 mt-6 gap-4">
            <div className="bg-[#01464B] text-white h-12 w-full sm:w-1/2 text-center flex hover:cursor-pointer hover:bg-green-100 hover:text-black p-1 rounded ml-2">
              <p className="m-auto font-[.4rem] ">READ HER BLOGS!</p>
            </div>

            <div className="text-[#ffffff]  bg-[#01464B] h-12 w-full sm:w-1/2 text-center flex hover:cursor-pointer hover:bg-green-100 mb-10 hover:text-black p-1 rounded ml-2">
              <p className="m-auto font-[.4rem]">SPEAK TO SALONI!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ebook;
