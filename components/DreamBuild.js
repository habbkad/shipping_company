import Image from "next/image";
import React from "react";
import cons from "./images/construction.jpg";
import con from "./images/consOne.jpg";

const DreamBuild = () => {
  console.log(con);
  let nuCon = { ...con };
  nuCon.width = 900;
  return (
    <div className="w-full mt-20">
      <div className=" md:flex relative static w-full">
        <div
          className="xl:w-9/12 md:w-full -z-50  bg-yellow-300 relative lg:h-[600px] md:h-[400px] sm:h-[0px] "
          style={{
            background: `url('${con.src}')  `,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="xl:w-6/12  md:w-6/12 bg-gray-700 xl:h-4/5   content-center absolute  xl:-right-58 md:right-10 xl:top-16  xl:p-20 md:p-10">
          <h1 className="text-4xl xl:w-4/5 text-white">
            A TRUSTED, COLLABORATIVE PARTNER FOCUSED ON YOUR GOALS
          </h1>
          <p className="text-lg mt-4 text-white">
            From our industry-leading approaches to safety and quality, to our
            passion for progressive delivery, innovation and technology, we
            deliver certainty by focusing on what matters to you.
          </p>
          <button
            class=" select-none mt-6 bg-red-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamBuild;
