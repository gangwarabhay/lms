import React from "react";

function Ebook() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center">
        {/* <p className="text-5xl text-[#004F4E] font-bold mt-12 decoration underline-double">
          <span className=""> Free eBook</span>
         
        </p> */}
        <p className="text-[30px] sm:text-[40px] lg:text-[50px] inline-block border-b-4 border-double border-black pb-2 mt-8 font-font text-[#01464B] font-semibold">
          Free eBook
        </p>
      </div>
      <div>
        <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] text-[#01464B] font-bold mt-10 text-center px-4">
          How to Stop Over-Thinking in 3 Minutes
        </h1>
        <br />
      </div>
      <div className="flex flex-col lg:flex-row px-2 sm:px-6">
        <img
          src="img2.png"
          alt=""
          className="w-full max-w-[300px] sm:max-w-[400px] lg:w-135 lg:h-105 object-cover mt-6 mx-auto lg:ml-8 lg:mx-0"
        />
        <ul className="text-[15px] sm:text-[17px] mt-6 ml-0 lg:ml-[71px] px-4 lg:px-0">
          <li>
            Do you overthink and over-analyze things? Is stressful thoughts and
            anxiety a regular part of your life and overwhelm you? Do you want
            to have a clear mind, enhance your decision-making ability,
            creativity, and productivity, so you can use your mind to your best
            capacity? If Yes, then by practicing the simple and practical tools
            given in this book, you'll be able to cultivate a new mind, and that
            too by devoting just three minutes in a day.
          </li>
          <h2 className="font-bold mt-2 ml-0">
            Get this e-book as a gift from Saloni now
          </h2>

          <div className="mt-4 ml-0 w-full max-w-[400px] lg:w-110">
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              className="border border-gray-500 p-3 mt-2 w-full"
            />
          </div>
          <div className="mt-4 ml-0 w-full max-w-[400px] lg:w-110">
            <label
              htmlFor="full-name"
              className="block font-bold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="full-name"
              id="name"
              name="name"
              placeholder=""
              className="border border-gray-500 p-3 mt-2 w-full"
            />
            <div className="bg-[#01464B] text-white h-12 w-full max-w-[260px] lg:w-65 text-center mt-4 flex hover:cursor-pointer hover:bg-green-100 hover:text-black rounded ml-6 md:ml-0">
              <p className="m-auto cursor-pointer hover:text-black text-sm">
                GET YOUR EBOOK NOW!
              </p>
            </div>
          </div>
        </ul>
      </div>
      <div>
        <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] text-[#01464B] font-bold mt-20 text-center px-4 md:ml-[11vw]">
          About the Author
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-6 ml-0 lg:ml-10 px-4 lg:px-0">
        <img
          src="saloni-img.jpg"
          alt="Saloni Singh"
          className="w-full max-w-[300px] sm:max-w-[400px] lg:h-100 lg:w-120 object-cover mr-4 lg:mr-10 mb-6 lg:mb-19 ml-0 lg:ml-3 mx-auto lg:mx-0"
        />

        <div className="flex flex-col w-full">
          <p className="text-[] mb-4 px-0 lg:px-8">
            Saloni Singh is India's leading coach for CEOs, Leaders,
            Professionals from all walks of life.
          </p>
          <p className="mb-4 px-0 lg:px-8">
            She is the Creator of a neuro-integrative program 'Unshakeable' to
            cultivate a calm mind.
          </p>
          <p className="mb-4 px-0 lg:px-8">
            She is a Gynecologist turned Life & Self-Mastery Coach, a Mental &
            Emotional Well-Being Expert and works with individuals one to one as
            well as with groups in organizations.
          </p>
          <p className="mb-4 px-0 lg:px-8">
            She's been coaching and training people for 13+ years, globally, to
            help them become more mindful and cultivate fulfilling
            relationships.
          </p>
          <p className="mb-4 px-0 lg:px-8">
            Try the simple & efficient ways to stop overthinking, shared by Dr.
            Saloni in this hand-book and share your experience and questions
            with us.
          </p>
          <p className="mb-4 px-0 lg:px-8">Thank you. Love, Saloni…</p>

          <div className="flex flex-col sm:flex-row w-full lg:w-[27vw] justify-between ml-0 lg:ml-8 mt-6 gap-4">
            <div className="bg-[#01464B] text-white h-12 w-full sm:w-40 text-center flex hover:cursor-pointer hover:bg-green-100 hover:text-black p-1 rounded">
              <p className="m-auto font-[.4rem]">READ HER BLOGS!</p>
            </div>

            <div className="text-[#ffffff] bg-[#01464B] h-12 w-full sm:w-40 text-center flex hover:cursor-pointer hover:bg-green-100 mb-10 hover:text-black p-1 rounded">
              <p className="m-auto font-[.4rem]">SPEAK TO SALONI!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Ebook;