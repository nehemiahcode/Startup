import React from "react";
import Blogimage1 from "../assets/blog-01.jpg";
import Blogimage2 from "../assets/blog-02.jpg";
import Blogimage3 from "../assets/blog-03.jpg";
import Avatar1 from "../assets/auth-01.png"
import Avatar2 from "../assets/auth-02.png"
import Avatar3 from "../assets/auth-03.png"
import Mainlayoutdiv from "./Mainlayoutdiv";
import { Typography } from "./Pricingpage";
import { Link } from "react-router-dom";
import { Section6 } from "../Components";

function Blogpage() {
  const Data = [
    {
      id: 0,
      heading: " Best UI components for modern websites",
      name: "Samuyl Joshi",
      image: Blogimage1,
      button: "Computer",
      design: "Graphic Designer",
      Avatar: Avatar1
    },
    {
      id: 1,
      heading: " 9 simple ways to improve your design skills",
      name: "Musharof Chy",
      image: Blogimage2,
      button: "Design",
      design: "Content Writer",
      Avatar: Avatar2,
    },
    {
      id: 2,
      heading: "Tips to quickly improve your coding speed.",
      name: "Lethium Deo",
      image: Blogimage3,
      button: "Tech",
      design: "Content Writer",
      Avatar: Avatar3,
      margin: true,
    },
  ];
  return (
    <Mainlayoutdiv>
      <div
        className={` bg-slate-900 w-full h-[300px] grid grid-cols-1 md:grid-cols-2 place-items-center px-6 py-7
        `}
      >
        <div>
          <Typography>Blog</Typography>
          <p className=" text-white leading-normal text-lg font-medium pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            eros eget sapien consectetur ultrices. Ut quis dapibus libero.
          </p>
        </div>
        <div className=" flex gap-2 items-center ">
          <h1 className=" font-semibold  text-xl text-zinc-300">
            <Link to={"/pricing"}>Pricing</Link>
          </h1>
          <div className=" text-white  text-lg pt-2 ">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
          <h1 className=" font-semibold  text-xl text-blue-300">Blog</h1>
        </div>
      </div>
      <section className=" w-full h-auto py-10 bg-indigo-950">
        <div className=" my-8">
          <h1 className=" text-white font-extrabold text-4xl text-center  pb-4">
            Our Latest Blogs
          </h1>
          <p className=" text-white font-medium leading-normal text-lg text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="  w-full h-auto grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-3 px-3 sm:px-8 lg:px-20">
          {Data.map((data, index) => (
            <div
              key={index}
              className={` ${data.margin && " md:ml-[50%] lg:ml-0"} 
         relative mx-auto  bg-slate-800 h-[auto] md:w-[90%] w-[95%] lg:w-[100%] sm:w-[70%] rounded-2xl shadow-xl mt-3`}
            >
              <img
                src={data.image}
                alt="Image"
                className="  w-[100%] object-cover rounded-t-xl"
              />
              <div className=" px-3 py-2  after:w-[90%] after:h-[1px] after:bg-gray-400 after:mt-2 after:mx-auto after:block ">
                <h1 className=" font-bold text-white text-2xl">
                  {data.heading}
                </h1>
                <p className=" text-zinc-200 font-medium text-md py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet dictum neque, laoreet dolor.
                </p>
              </div>
              <div className=" flex  items-center w-full  px-5 py-5">
                <div className=" flex justify-between gap-4 items-center">
                  <img
                    src={data.Avatar}
                    alt=""
                    className="w-[55px] h-[55px] rounded-full"
                  />
                  <div className=" flex  flex-col border-r-2 pr-1 border-slate-400">
                    <h1 className=" text-white font-medium text-lg">
                      By {data.name}
                    </h1>
                    <p className=" text-zinc-200 text-sm font-medium">
                      {data.design}
                    </p>
                  </div>
                </div>
                <div className=" pl-2">
                  <p className=" text-white font-medium text-sm">Date</p>
                  <p className=" text-white font-medium text-xs">
                    15 Dec, 2023
                  </p>
                </div>
              </div>
              <button
                className=" absolute top-2 right-3 flex items-center justify-center
           bg-sky-600 text-white font-medium text-md rounded-full px-6 py-2"
              >
                {data.button}
              </button>
            </div>
          ))}
        </div>
      </section>
      <Section6 />
    </Mainlayoutdiv>
  );
}

export default Blogpage;
