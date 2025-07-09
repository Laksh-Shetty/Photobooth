import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 p-8">
      <h1 className="text-5xl font-bold text-yellow-600 mb-4">About Party Pixels</h1>
      <p className="text-lg text-gray-800 max-w-2xl text-center">
        At <span className="font-semibold">PartyPixels</span>, we’re passionate about making your celebrations unforgettable! 
        Our photobooths are designed to bring joy, creativity, and laughter to every event — all while respecting your privacy. 
        Whether it’s a wedding, birthday, or corporate event, our service is completely free and cookie-free. 
        No data tracking, no hidden fees — just pure fun and memories you can cherish forever.
      </p>
    </div>
  );
};

export default About;
