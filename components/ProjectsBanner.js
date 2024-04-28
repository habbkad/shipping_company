import React from "react";
import Navbar from "./Navbar";

const ProjectsBanner = () => {
  return (
    <div>
      <div className="static relative bg-gray-950">
        <img
          className="lg:h-[700px] md:h-[500px] w-[100%]"
          src="https://img.freepik.com/premium-photo/modern-office-buildings_16442-11.jpg?"
          alt=""
          style={{ opacity: 9 }}
        />
        {/* <Image
          loader={imageLoader}
          src="construction-silhouette_1150-8336.jpg"
          alt="Picture of the author"
          width={1500}
          height={500}
        /> */}
        <div className="absolute top-2 w-full ">
          <Navbar />
        </div>
        <div className="absolute bottom-20 w-4/5  xl:px-20 md:px-4">
          <h1 className="text-white text-xl w-2/5 mb-3">OUR WORK</h1>
          <h1 className="text-white xl:text-7xl md:text-7xl xl:w-5/5 md:w-full">
            BUILDING THE BEST OUTCOMES FOR ALL PROJECT STAKEHOLDERS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;
