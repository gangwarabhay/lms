import Bookslot from "@/components/bookslot/page";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-[#004D46] font-semibold text-center underline decoration-double">
        About Us
      </h1>
      <div className="w-full flex h-100 ">
        <div className="w-1/2 mt-6">
          <p className="text-gray-700 font-serif px-2 text-xl">
            Leading executive life coach of India, with an 15 years of
            experience in Life Coaching, Leadership & Self-mastery coaching and
            Group Facilitation. She’s worked as a Senior Gynaecologist in
            London, before pursuing her calling to become a Executive Life coach
            for Leaders and CEOs. She’s passionate about helping people see the
            greatness within and tap into their highest potential via a shift in
            their consciousness. She believes in her clients 100% and help them
            thrive in every area of Business & life.
          </p>
        </div>
        <div className="w-1/2  overflow-hidden m-6">
          <img
            src="cardimage3.jpg"
            alt=""
            className="w-130 h-150 object-cover"
          />
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-[#004D46] text-center">Who we are??</h1>
        <h4 className="text-gray-700 p-2 font-serif text-xl mt-3 ">
          A Coach. Friend. Spiritual Growth Catalyst. I coach senior leaders,
          CEOs, entrepreneurs and coaches to help them connect with themselves
          at a deeper level and become their best version. I am a mom of two
          teenagers, an author, blogger, dancer and podcaster. A curious
          explorer of the miracle called life. But above all this… I am a space
          holder. I am pure presence. I work as a catalyst to help you connect
          with your highest potential, with deep inner peace, magic and the
          source within. My deep connection with myself and the universe is my
          life’s work and that’s what I bring to everyone I work with. Coaching
          with me is a deep dive into knowing yourself, discovering and
          sometimes reinventing yourself. I am a sacred space of listening with
          no judgement. In this space of listening, love & support, you grow and
          evolve beyond you’ve ever imagined. You start to trust yourself and
          the universe even more. Miracles happen in your life.
        </h4>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-[#004D46] text-center mt-3">
          How we came to be a Coach?
        </h1>
        <h4 className="text-gray-700 p-2 font-serif text-xl mt-3">
          our team has mostly engineers by previous profession.while working as
          a softwaredeveloper in microsoft. I took the plunge and qualified into
          Life coaching, Happiness Coaching, Neurosciences, NLP and more. our
          director resigned from their job and started full-time coaching in the
          UK in 2009. I’ve coached CEOs, Senior leaders, Startup founders,
          Professionals, YouTubers, life coaches, parents and celebrities from
          different cultures & countries like Australia, Dubai, US, UK,
          Hongkong, Italy, France and many other. My work is deeply inspired by
          my journey with my mentors, Coaches & teachers Robert Holden, Louise
          Hay, Eckhart Tolle, Byron Katie and Gary Mahler.
        </h4>
      </div>
      <div>
        <p className="text-gray-700  font-serif text-xl mt-3 p-2">
          "Life Coaching with Abhay has been a life changing experience for me.
          It helped me immensely to realise the influence that I had in each
          situation & empowered me to create small steps towards larger goals. I
          was able to talk through challenges, step back and see them from a
          different perspective. She assisted me to get clarity about what
          exactly I wanted and helped me execute. I recommend coaching for
          anyone looking to take steps towards living their ultimate dreams."
          </p>
          <div className="text-right mt-4">
            <p className="text-base font-semibold text-gray-800">
              – Michelle Cairns
            </p>
            <p className="text-sm text-gray-600 italic">Entrepreneur, London</p>
          </div>
       
      </div>
    
      <Bookslot/>
    </div>
  );
};

export default About;
