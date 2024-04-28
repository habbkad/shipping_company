"use client";
import React from "react";
import Slider from "react-slick";

const Services_home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slide = [1, 2, 3, 4, 5, 6, 6];
  return (
    <div className="static relative mt-20">
      <div className="xl:pl-40 md:pl-4 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="xl:w-2/3 md:full">
            {" "}
            <h1 className="text-black text-pretty text-5xl xl:w-11/12 md:w-full xl:text-left md:text-center">
              Consar LTD, One of The Best Builders In Ghana.
            </h1>
            <p className="text-lg mt-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto sapiente dolorum totam minus incidunt quos et nesciunt
              ratione, ea omnis autem dicta corporis fugiat quasi sequi!
              Blanditiis, vel quasi.
            </p>
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="mt-16">
          <Slider {...settings}>
            {slide.map((item) => {
              return (
                <div class=" mb-10 m-2 shadow-sm border-gray-800  ">
                  <img
                    class="w-9/12"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt=""
                  />

                  <div class="desc p-4 text-gray-800">
                    <a
                      href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                      target="_new"
                      class="title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom Room (Unlimited)
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span class="description text-sm block py-2  ">
                      lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="h-72 bg-yellow-600 absolute -z-50 w-full bottom-0"></div>
    </div>
  );
};

export default Services_home;
