import React from "react";

function Ebook() {
  return (
    <>
      <div className="text-center">
        {/* <p className="text-5xl text-[#004F4E] font-bold mt-12 decoration underline-double">
          <span className=""> Free eBook</span>
         
        </p> */}
<p className="text-5xl inline-block border-b-4 border-double border-black pb-2 mt-8 font-font text-[#004F4E] font-semibold">
  Free eBook

</p>
      </div>
      <div>
        <h1 className="text-4xl text-[#004F4E] font-bold mt-14 text-center">
          How to Stop Over-Thinking in 3 Minutes
        </h1>
        <br/>
      </div>
      <div className="flex px-6">
        <img
          src="img2.png"
          alt=""
          className="w-135 h-105 object-cover  mt-6 ml-8"
        />
        <ul className="text-xl mt-6 ml-8">
          <li>
            Do you overthink and over-analyze things? Is stressful thoughts and
            anxiety a regular part of your life and overwhelm you? Do you want
            to have a clear mind, enhance your decision-making ability,
            creativity, and productivity, so you can use your mind to your best
            capacity? If Yes, then by practicing the simple and practical tools
            given in this book, you’ll be able to cultivate a new mind, and that
            too by devoting just three minutes in a day.
          </li>
          <h2 className="text-xl font-bold mt-2 ml-0">
            Get this e-book as a gift from Saloni now
          </h2>

          <div className="mt-4 ml-0 w-110">
            <label
              htmlFor="email"
              className="block font-extrabold text-gray-700 text-2xl"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-500  p-3 mt-2 w-full"
            />
          </div>
          <div className="mt-4 ml-0 w-110">
            <label
              htmlFor="full-name"
              className="block font-extrabold text-gray-700 text-2xl"
            >
              Full Name
            </label>
            <input
              type="full-name"
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              className="border border-gray-500 p-3 mt-2 w-full"
            />
            <div className="bg-green-950 text-white h-12 w-65 text-center mt-4 flex hover:cursor-pointer hover:bg-green-200">
              <p className="m-auto hover:cursor-pointer hover:bg-green-200">
                GET YOUR EBOOK NOW!
              </p>
            </div>
          </div>
        </ul>
      </div>
      <div>
        <h1 className="text-4xl text-[#004F4E] font-bold mt-20 text-center">
          About the Author
        </h1>
      </div>
      <div className="flex items-start mt-6 ml-10">
        <img
          src="saloni-img.jpg"
          alt="Saloni Singh"
          className=" h-120 w-120 object-cover mr-10"
        />

        <div className="flex flex-col">
          <p className="text-xl mb-4">
            Saloni Singh is India’s leading coach for CEOs, Leaders,
            Professionals from all walks of life.
          </p>
          <p className="text-xl mb-4">
            She is the Creator of a neuro-integrative program ‘Unshakeable’ to
            cultivate a calm mind.
          </p>
          <p className="text-xl mb-4">
            She is a Gynecologist turned Life & Self-Mastery Coach, a Mental &
            Emotional Well-Being Expert and works with individuals one to one as
            well as with groups in organizations.
          </p>
          <p className="text-xl mb-4">
            She’s been coaching and training people for 13+ years, globally, to
            help them become more mindful and cultivate fulfilling
            relationships.
          </p>
          <p className="text-xl mb-4">
            Try the simple & efficient ways to stop overthinking, shared by Dr.
            Saloni in this hand-book and share your experience and questions
            with us.
          </p>
          <p className="text-xl mb-4">Thank you. Love, Saloni…</p>

          <div className="flex gap-x-4 mt-4">
            <div className="bg-green-950 text-white h-12 w-40 text-center flex hover:cursor-pointer hover:bg-green-100">
              <p className="m-auto font-extrabold">READ HER BLOGS!</p>
            </div>

            <div className="bg-green-950 text-white h-12 w-40 text-center flex hover:cursor-pointer hover:bg-green-100 mb-10">
              <p className="m-auto font-extrabold">SPEAK TO SALONI!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ebook;
