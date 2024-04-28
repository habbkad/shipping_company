import React from "react";

const AboutComunity = () => {
  return (
    <div>
      <div className="md:flex bg-rose-700 xl:p-16 md:p-0 mt-10  ">
        <div className="xl:w-1/2 md:w-full  p-4">
          <img
            src="https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124269.jpg?ga=GA1.1.1303724509.1647951594&semt=ais"
            width={600}
            height={700}
          />
        </div>
        <div className=" flex flex-col xl:w-1/2 md:w-full items-center justify-item-center py-16 xl:relative md:absolute buttom-10 ">
          <h1 className="text-5xl text-white ">OUR COMMUNITY</h1>
          <p className="text-xl text-white mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam
            unde magnam ullam consequatur laborum! Veritatis itaque quos
            repellendus molestias illum,
          </p>
          <button
            class="h-10 w-32 select-none mt-6 bg-red-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            See Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComunity;
