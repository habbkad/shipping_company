import React from "react";
import Navbar from "./Navbar";

const Services_Banner = () => {
  return (
    <div>
      <div className="h-[680px]  ">
        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1682147009278-8abbc686b5b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvbnN0cnVjdGlvbiUyMHNpdGVzfGVufDB8fDB8fHww')] h-4/5 bg-no-repeat bg-cover bg-center  static relative	 ">
          <div className=" absolute bg-gradient-to-r from-gray-950 to-gray-900 h-full  opacity-60 xl:top-0 md:bottom-0 right-0 w-full "></div>
          <div className="absolute top-0 w-full">
            <Navbar />
          </div>
          <h1 className="absolute text-6xl text-white h-wrap bottom-[50px]  xl:w-3/5 md:w-full xl:px-16 md:px-9">
            Build The Project Of Your Dreams With <br />
            Consar
          </h1>
        </div>
      </div>
      <div className="md:flex justify-center xl:px-20 md:px-9 ">
        <div className="xl:w-3/5 md:w-full ">
          <h1 className="text-4xl">Our Services </h1>
          <p className="text-lg mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est
            quaerat earum aliquam quam ipsum eius facilis mollitia quo
            necessitatibus soluta ad illum, quisquam repudiandae iure totam illo
            commodi perspiciatis. <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            culpa, minus optio sit minima praesentium molestiae vel obcaecati
            porro iusto in quisquam numquam temporibus vero ipsum inventore
            cumque ex corporis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services_Banner;
