import React from "react";

const Contact = () => {
  return (
    <div className=" relative z-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 p-8">
      <h1 className="text-5xl font-bold text-yellow-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-800 mb-8 text-center">
        Have a question or want to book our photobooth? Get in touch!
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="p-2 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-black font-semibold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
