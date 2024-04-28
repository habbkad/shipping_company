"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import "./Carousel.css";
import cons from "./images/construction.jpg";
import Services from "./Services_home";
import consOne from "./consOne.jpg";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(cons);
  return (
    <div>
      {" "}
      <div className="absolute"></div>
      <div className="static realtive bg-gradient-to-r from-gray-950 to-gray-800 static -z-50">
        <img
          alt="Mountains"
          src={
            "https://img.freepik.com/free-photo/inspector-african-american-worker-factory_1303-30608.jpg?w=1800&t=st=1704238979~exp=1704239579~hmac=954dee335ae4f66a2058137399eea9cec7f918773de26d0de2684b6297603bba"
          }
          className="static relative opacity-80 lg:h-[800px] w-full md:h-[600px] sm:h-[600px] "
        />
        <div className="absolute top-1  w-full">
          <Navbar />
        </div>
        <div className="lg:absolute bottom-2  xl:h-2/5 md:h-3/5  bg-gradient-to-r from-gray-800 to-gray-700  opacity-80 xl:w-11/12 md:w-full flex flex-col justify-center content-center xl:px-48 md:px-10 sm:px-2 ">
          <h1 className="xl:text-5xl md:text-3xl sm:text-xl text-white xl:w-4/5 md:w-full">
            SUPERIOR RESULTS. GREAT EXPERIENCES FOR EVERYONE.
          </h1>
          <button
            class="h-10 w-32 select-none mt-6 bg-red-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            See Work
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
