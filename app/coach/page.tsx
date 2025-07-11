import React from "react";

function Coach() {
  return (
    <div className="w-full">
      <div className="text-center mt-14 px-4 sm:px-6 md:px-10">
        <h1 className="text-[47.6px] sm:text-[36px] md:text-[47.6px] text-[#01464B] font-semibold">
          1:1 Life Coaching For Executives and CEOs
        </h1>
        <div className="mt-2 mx-auto w-[90%] sm:w-[300px] md:w-[500px] border-b-6 border-black border-double"></div>
      </div>

      {/* Main content with text and image */}
      <div className="flex flex-col md:flex-row items-start mt-14 gap-6 px-4 sm:px-6 md:px-10">
        {/* Left Text Content */}
        <div className="w-full text-black text-[17px] leading-7 space-y-12">
          <p>
            We all go through feeling anxious, overwhelmed and stressed about
            things like decision-making, handling conflict or change, getting
            out of our comfort zone.
          </p>
          <p>
            You feel a lack of deep connection and satisfaction in your
            relationships.
          </p>
          <p>
            Your fears, doubts and the voice in your head holds you back in
            life.
          </p>
          <p>
            You want to conquer self-doubts and tame that voice in your head
            that judges and criticises you constantly.
          </p>
          <p>
            You want to trust yourself fully, raise your self-esteem, and love
            yourself more…
          </p>
          <p>
            You're ready to do things differently, so you can be your best and
            give your all. Cultivate Leadership skills, communicate effectively
            with others and make an impact.
          </p>
          <p>It's time to take charge of your life. To take Support..</p>
          <p>If not now, then when?</p>
          <p className="w-full h-auto">
            Life Coaching for executives and CEOs is an empowering process and
            brings transformation.
          </p>
          <p className="w-full h-auto">
            As your executive life coach, I listen to you intently,
            non-judgmentally, guide you, and gently challenge you.
          </p>
          <p className="w-full h-auto">
            This helps you understand your mind and emotions, to deeply connect
            with your own wisdom so you can be the best version of yourself, in
            all areas of your life.
          </p>
        </div>

        {/* Image */}
        <img
          src="img.png"
          alt="Coaching"
          className="w-full md:w-[500px] h-auto object-cover rounded-md shadow-md"
        />
        
      </div>

      <div className="text-3xl text-[#01464B] font-bold bg-sky-50 px-4 sm:px-6 md:px-10 py-10 mt-18 sm:mt-10 md:mt-18 mx-4 sm:mx-2 md:mx-7">
        <h1 className="mt-8 text-[40px] sm:text-[32px] md:text-[40px]">
          How does Life coaching Work?
        </h1>
        <p className="text-justify font-normal mt-8 text-[17px]">
          When we work together, you become aware of your limiting beliefs,
          unhealthy patterns and emotions that are not serving you any more. You
          learn to let go of old patterns and beliefs, and embrace new powerful
          ones.
        </p>
        <p className="text-justify font-normal mt-4 text-[17px]">
          I hold you accountable to take actions from that place, in direction
          of your goals and dreams.
        </p>

        {/* Testimonial Block */}
        <div className="bg-[#F1FDFE] px-6 py-10 text-center text-black mt-6">
          <p className="italic text-lg leading-relaxed max-w-3xl mx-auto text-black font-[20px]">
            Life Coaching has helped me accept myself, given me power to have
            control of my life and bring quality to my relationships. This was
            the best thing that ever happened to me. I highly recommend Dr.
            Saloni as an executive life coach for anyone who wants to excel in
            life.
          </p>
          <p className="mt-6 text-[20px]">– Sandeep Chopra</p>
          <p className="italic text-base">Entrepreneur London</p>
        </div>

        {/* Subsection */}
        <h1 className="text-[40px] sm:text-[32px] md:text-[40px] text-[#01464B] font-bold mt-4">
          How does life coaching for executives work?
        </h1>
        <p className="font-normal mb-8 mt-6 text-[17px] text-justify">
          This life coaching program for leaders, executives and CEOs is
          customized as per client's issues and needs. In the first session we
          set up a framework for coaching sessions, based on your goals &amp;
          dreams, and we review them from time to time. Coaching is a process,
          and I'm connected to my clients throughout the process, and support
          them in implementing the changes in between the sessions, and that's
          the most important part – to hold you accountable for taking actions..
          Coaching can happen face to face, or online, over skype or Zoom with
          powerful results.
        </p>
      </div>

      {/* Section: Deep Intensive Coaching */}
      <div className="px-4 sm:px-6 md:px-10 mt-10">
        <h1 className="text-[40px] sm:text-[32px] md:text-[40px] text-[#01464B] font-bold">
          1:1 Deep Intensive Coaching with me
        </h1>
        <p className="mt-6 text-justify text-[17px]">
          Spending an hour with me will give you deep insights into your own
          psychology, beliefs and help you see the issues in a completely new
          light. It'll lead you to greater clarity and flow in life. Which will
          help you connect with your higher self and purpose intimately, to lead
          a fulfilling life, in all areas of your life.
        </p>
        <p className="font-normal mt-6 text-[17px] text-justify">
          First Discovery session is complimentary, to help you get clarity on
          your desires and goals. It's my delight to serve you to my best.
          Consultation starts from INR 25k per session. There are different
          packages for Executives, Senior Leaders, Entrepreneurs, CEOs, Coaches
          and Students. All life coaching packages are customised as per
          client's needs, dreams and goals. The ultimate aim is to co-create
          transformation and growth in your life.
        </p>
      </div>

      {/* Section: Coaching Programs */}
      <div className="mt-10 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-center w-full gap-6">
          {/* 3 Months Card */}
          <div className="border p-6 w-full md:w-1/3 shadow-sm">
            <h1 className="text-2xl sm:text-xl md:text-2xl text-[#01464B] font-bold mb-4">
              3 months coaching programme includes
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-justify">
              <li className="flex text-start">
                6 coaching sessions (each session 60–70 minutes) usually twice a
                month.
              </li>
              <li className="flex text-start">
                Action plan with tools &amp; support to implement and move
                forward towards your goals.
              </li>
              <li className="flex text-start">
                Unlimited email and WhatsApp support for implementation in
                between the sessions.
              </li>
              <li className="flex text-start">
                Supportive materials like articles, books &amp; resources.
              </li>
            </ul>
          </div>

          {/* 6 Months Card */}
          <div className="border p-6 w-full md:w-1/3 shadow-sm">
            <h1 className="text-2xl sm:text-xl md:text-2xl text-[#01464B] font-bold mb-4">
              6 months coaching programme includes
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-justify">
              <li className="flex text-start">
                10 coaching sessions (each session 60–70 minutes) usually twice
                a month.
              </li>
              <li className="flex text-start">
                Action plan with tools &amp; support to implement and move
                forward towards your goals.
              </li>
              <li className="flex text-start">
                Unlimited email and WhatsApp support for implementation in
                between the sessions.
              </li>
              <li className="flex text-start">
                Supportive materials like articles, books &amp; resources.
              </li>
            </ul>
          </div>

          {/* 12 Months Card */}
          <div className="border p-6 w-full md:w-1/3 shadow-sm">
            <h1 className="text-2xl sm:text-xl md:text-2xl text-[#01464B] font-bold mb-4">
              12-months coaching programme includes
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-justify">
              <li className="flex text-start">
                20 coaching sessions (each session 60–70 minutes) at regular
                intervals.
              </li>
              <li className="flex text-start">
                Action plan with tools &amp; support to implement and move
                forward towards your goals.
              </li>
              <li className="flex text-start">
                Unlimited email and message support for implementation in
                between the sessions.
              </li>
              <li className="flex text-start w-full">
                Supportive materials like articles, books &amp; resources.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coach;
