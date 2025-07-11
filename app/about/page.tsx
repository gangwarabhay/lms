import Bookslot from "@/components/bookslot/page";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 max-w-screen-xl mx-auto space-y-12">
      {/* Header */}
      <h1 className="text-3xl md:text-[37.5px] font-sans text-[#01464B] font-semibold text-center">
        About Us
      </h1>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 text-base md:text-[17px] font-sans space-y-4">
          <p>
            Leading executive life coach of India, with 15 years of experience
            in Life Coaching, Leadership & Self-mastery coaching and Group
            Facilitation.
          </p>
          <p>
            She’s worked as a Senior Gynaecologist in London, before pursuing
            her calling to become an Executive Life coach for Leaders and CEOs.
          </p>
          <p>
            She’s passionate about helping people see the greatness within and
            tap into their highest potential via a shift in their
            consciousness.
          </p>
          <p>
            She believes in her clients 100% and helps them thrive in every area
            of Business & life.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/cardimage3.jpg"
            alt="About Image"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-[37.5px] font-sans text-[#01464B] font-semibold text-center">
          Who We Are??
        </h1>
        <div className="text-base md:text-[17px] font-sans space-y-4">
          <p>A Coach. Friend. Spiritual Growth Catalyst.</p>
          <p>
            I coach senior leaders, CEOs, entrepreneurs and coaches to help them
            connect with themselves at a deeper level and become their best
            version. I am a mom of two teenagers, an author, blogger, dancer and
            podcaster. A curious explorer of the miracle called life.
          </p>
          <p>But above all this… I am a space holder. I am pure presence.</p>
          <p>
            I work as a catalyst to help you connect with your highest
            potential, with deep inner peace, magic and the source within.
            Coaching with me is a deep dive into knowing yourself, discovering
            and sometimes reinventing yourself.
          </p>
          <p>I am a sacred space of listening with no judgement.</p>
          <p>
            In this space of listening, love & support, you grow and evolve
            beyond you’ve ever imagined. You start to trust yourself and the
            universe even more. Miracles happen in your life.
          </p>
        </div>
      </div>

      {/* How We Became a Coach */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-[37.5px] font-sans text-[#01464B] font-semibold text-center">
          How We Came to Be a Coach?
        </h1>
        <div className="text-base md:text-[17px] font-sans space-y-4">
          <p>
            Our team has mostly engineers by previous profession. While working
            as a software developer in Microsoft, I took the plunge and
            qualified into Life Coaching, Happiness Coaching, Neurosciences, NLP
            and more.
          </p>
          <p>
            Our director resigned from their job and started full-time coaching
            in the UK in 2009.
          </p>
          <p>
            I coach for Life, Leadership Skills, Growing coaching business,
            Finding purpose and meaning in life.
          </p>
          <p>
            I’ve coached CEOs, Senior leaders, Startup founders, Professionals,
            YouTubers, life coaches, parents and celebrities from different
            cultures & countries like Australia, Dubai, US, UK, Hongkong, Italy,
            France and many more.
          </p>
          <p>
            My work is deeply inspired by my journey with my mentors, Coaches &
            teachers Robert Holden, Louise Hay, Eckhart Tolle, Byron Katie and
            Gary Mahler.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center px-2">
        <p className="text-gray-700 italic font-serif text-lg md:text-xl p-6">
          "Life Coaching with Abhay has been a life changing experience for me.
          It helped me immensely to realise the influence that I had in each
          situation & empowered me to create small steps towards larger goals. I
          was able to talk through challenges, step back and see them from a
          different perspective. She assisted me to get clarity about what
          exactly I wanted and helped me execute. I recommend coaching for
          anyone looking to take steps towards living their ultimate dreams."
        </p>
        <p className="text-base mt-3 font-semibold text-gray-800">
          – Michelle Cairns
        </p>
        <p className="text-base text-gray-600 italic">Entrepreneur, London</p>
      </div>

      {/* Bookslot Component */}
      <Bookslot />
    </div>
  );
};

export default About;

