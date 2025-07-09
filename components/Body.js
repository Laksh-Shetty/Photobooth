"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

const Body = () => {
  return (
    <>
    <div className="relative z-10 min-h-screen">
      <img className="absolute -z-10 w-screen h-screen brightness-25 object-cover" src="/tools-feature_black-and-white-filter_promo-showcase_01-AFTER4x.webp" alt="" />
      <Navbar />
      {/* Optional animated header */}
      

      <div className="relative z-10 w-full min-h-[91.5vh] ">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full">
          <div className="flex flex-col w-[65vw] h-[60.5vh] md:h-[70.5vh] items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 outline-text flex flex-col text-9xl font-bold"
            >
              Party Pixels
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10 flex flex-col mt-8 text-2xl font-bold text-yellow-800"
            >
              Capture the Fun. Keep the Memories.
              <br />
              Smile, Snap, Repeat.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              className="w-[50vw] h-[20vh] md:h-auto object-cover darken"
              src="/pb-what2-1.696baf6d-removebg-preview.png"
              alt=""
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative z-10 flex items-center justify-center w-full h-full mt-8 gap-6"
        >
          <Link href="/main">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-8 py-4 font-extrabold text-center me-2 mb-2"
          >
            Try Now
          </button>
          </Link>

          <Link href="/about">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-extrabold rounded-lg text-sm px-8 py-4 text-center me-2 mb-2"
          >
            About Us
          </button>
          </Link>
        </motion.div>
      </div>
      
    </div>
    <Footer />
      </>
  );
};

export default Body;
