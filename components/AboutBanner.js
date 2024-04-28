"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const AboutBanner = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `https://img.freepik.com/free-photo/${src}?w=${width}`;
  };
  return (
    <div>
      <div className="static relative">
        <img
          src="https://img.freepik.com/premium-photo/excavator-construction-site_33835-1337.jpg"
          alt=""
          className="w-[100%] lg:h-[600px] md:h-[500px]"
        />
        {/* <Image
          loader={imageLoader}
          src="construction-silhouette_1150-8336.jpg"
          alt="Picture of the author"
          width={1500}
          height={500}
        /> */}
        <div className="absolute top-2  w-full ">
          <Navbar />
        </div>
        <div className="absolute lg:bottom-20 md:bottom-[200px]  lg:w-4/5 md:w-[100%] sm:w-[100%] bg-gray-800 opacity-90 px-20  ">
          <h1 className="text-white lg:text-7xl md:text-5xl sm:text-5xl w-4/5">
            Our Reputation Stands as One of Our
          </h1>
          <h1 className="text-green-500 lg:text-7xl md:text-5xl sm:text-5xl">
            Greatest Asset
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
