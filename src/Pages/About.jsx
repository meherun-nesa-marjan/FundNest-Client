import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen dark:bg-slate-600 dark:text-white flex flex-col items-center py-10">
        <div className="lg:w-8/12 w-full mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#754738] mb-6">
            About Us
          </h1>
          <p className="text-xl text-justify leading-8 text-[#715d57]">
            Welcome to <span className="font-bold">FundNest</span> – a platform
            dedicated to empowering individuals and communities to bring their
            dreams to life. At FundNest, we believe in the power of collaboration
            and generosity to spark innovation and change lives.
          </p>
          <p className="text-xl text-justify leading-8 text-[#715d57] mt-4">
            Our mission is simple: to provide a secure, user-friendly, and
            impactful crowdfunding platform where creators, innovators, and
            changemakers can connect with supporters who believe in their vision.
            From personal projects to social causes, FundNest is here to ensure
            every dream has a home.
          </p>
          <p className="text-xl text-justify leading-8 text-[#715d57] mt-4">
            We value transparency, trust, and community, and we’re committed to
            making every contribution count. Together, we can create a world
            where no idea is too small, and no goal is out of reach.
          </p>
          <div className="text-center mt-6">
            <h2 className="text-2xl font-semibold text-[#754738]">Join Us</h2>
            <p className="text-xl text-[#715d57] mt-2">
              Be part of our journey to make a difference, one campaign at a time.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;