"use client";

import Image from "next/image";
import React from "react";

const AboutContent = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      <div className="md:flex mt-10   xl:px-28 md:px-4 sm:px-5">
        <div className="xl:w-3/5 md:w-full xl:px-5 md:px-1">
          <img
            src="https://img.freepik.com/free-photo/inspectors-with-sketch_1098-15451.jpg"
            alt="Picture of the author"
            width={"100%"}
          />
        </div>
        <div className="xl:w-2/5 md:w-full xl:mt-10 lg:mt-10 md:mt-20 xl:px-7 md:px-3">
          <h1 className="text-4xl lg:px-0 md:px-5 ">Our Story</h1>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sed
            debitis impedit culpa, neque deserunt quae rerum consectetur itaque
            blanditiis laborum fugit repudiandae dignissimos nobis incidunt esse
            facere voluptatibus sit! <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
            facere. Reprehenderit quasi temporibus quam corporis explicabo
            assumenda suscipit sapiente aliquam, distinctio tempore quis
            architecto quidem quibusdam expedita unde officiis nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
