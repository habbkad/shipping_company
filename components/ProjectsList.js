import React from "react";
import truck from "./images/cement_truck.svg";
import worker from "./images/worker.svg";
import crane from "./images/crane.svg";
import tools from "./images/tools.svg";

const ProjectsList = () => {
  return (
    <div className="px-2">
      <div>
        <div>
          <h1 className="text-xl mb-5">LATEST PROJECTS</h1>
          <h1 className="text-4xl">
            Discover Our Latest <br />
            Projects.
          </h1>
        </div>
      </div>
      <div class="grid lg:grid-cols-2  md:grid-cols-1  xl:gap-4 md:gap-3 mt-10 ">
        <div className="xl:w-4/5 md:w-1/2">
          <img
            src={
              "https://img.freepik.com/free-photo/modern-country-houses-construction_1385-18.jpg?size=626&ext=jpg&ga=GA1.1.1303724509.1647951594&semt=ais"
            }
            alt=""
            style={{ height: 450, width: 500 }}
          />
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            natus, voluptatibus sequi labore delectus eligendi vitae sed
          </p>
        </div>
        <div className="xl:w-4/5 md:w-1/2">
          <img
            src={
              "https://img.freepik.com/free-photo/facade-modern-building-with-geometric-windows-curved-walls_181624-16998.jpg?size=626&ext=jpg&ga=GA1.1.1303724509.1647951594&semt=ais"
            }
            alt=""
            style={{ height: 450, width: 500 }}
          />
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            natus, voluptatibus sequi labore delectus eligendi vitae sed
          </p>
        </div>
        <div className="xl:w-4/5 md:w-1/2">
          <img
            src={
              "https://img.freepik.com/free-photo/aerial-view-grass-field-hockey_23-2149668570.jpg?w=1480&t=st=1704366798~exp=1704367398~hmac=68e7375ff25050893eca192161ab64771161d5c6a3b50ed95a72d22e5a4acfd4"
            }
            alt=""
            style={{ height: 450, width: 500 }}
          />
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            natus, voluptatibus sequi labore delectus eligendi vitae sed
          </p>
        </div>
        <div className="xl:w-4/5 md:w-1/2">
          <img
            src={
              "https://img.freepik.com/premium-photo/aerial-view-water-treatment-factory-city-wastewater-cleaning-facility-purification-process-removing-undesirable-chemicals-suspended-solids-gases-from-contaminated-liquid_127089-32482.jpg?w=1380"
            }
            alt=""
            style={{ height: 450, width: 500 }}
          />
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            natus, voluptatibus sequi labore delectus eligendi vitae sed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
