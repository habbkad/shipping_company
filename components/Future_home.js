import Image from "next/image";
import React from "react";
import map from "./images/map.png";

const Future_home = () => {
  return (
    <div className=" xl:mx-10 md:mx-1">
      <div className="md:flex  items-center justify-center">
        <div className="xl:w-2/5 md:w-full">
          <h1 className="text-6xl ">Building A Better Future For Africa</h1>
          <p className="text-lg mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            consectetur officiis quae repudiandae vero praesentium iusto
            doloremque voluptatum sit eveniet! Aut temporibus, totam hic
            nesciunt quam voluptates minus mollitia iure.
          </p>
        </div>
        <div className="xl:w-3/5 md:w-full md:full p-10">
          <img src={map.src} style={{ height: "100%", width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Future_home;
