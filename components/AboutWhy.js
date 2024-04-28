import React from "react";
import truck from "./images/cement_truck.svg";
import worker from "./images/worker.svg";
import crane from "./images/crane.svg";
import tools from "./images/tools.svg";

const AboutWhy = () => {
  return (
    <div className="relative static py-20 ">
      <div className="md:flex  bg-yellow-400">
        <div className="xl:w-3/5 md:full xl:p-20 md:p-10 py-10">
          <h1 className="text-xl">WHY CONSAR</h1>
          <h1 className="text-4xl mt-5 ">
            We Are Dedicated To Create Innovative Solutions For Our Clients
          </h1>

          <div class="grid grid-cols-2 xl:gap-4 md:gap-3 mt-10">
            <div className="xl:w-4/5 md:w-1/2">
              <img src={truck.src} alt="" height={30} width={70} />
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                natus, voluptatibus sequi labore delectus eligendi vitae sed
              </p>
            </div>
            <div className="xl:w-4/5 md:w-1/2">
              <img src={crane.src} alt="" height={30} width={70} />
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                natus, voluptatibus sequi labore delectus eligendi vitae sed
              </p>
            </div>
            <div className="xl:w-4/5 md:w-1/2">
              <img src={worker.src} alt="" height={30} width={70} />
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                natus, voluptatibus sequi labore delectus eligendi vitae sed
              </p>
            </div>
            <div className="xl:w-4/5 md:w-1/2">
              <img src={tools.src} alt="" height={30} width={70} />
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                natus, voluptatibus sequi labore delectus eligendi vitae sed
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <img
            src="https://img.freepik.com/free-photo/excavator-digging-ground-day-light_23-2149194795.jpg"
            alt=""
            width={500}
          />
        </div>
      </div>
      <div className="md:flex xl:px-28 md:px-4 mt-20">
        <div className="xl:w-3/5 md:w-full xl:px-5 md:px-1">
          <h1 className="text-4xl">We Hire The Best Expertise!</h1>
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
        <div className="xl:w-2/5 md:w-full xl:mt-0 md:mt-5">
          <img
            src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9"
            alt="Picture of the author"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWhy;
