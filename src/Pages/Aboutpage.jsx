import React from "react";
import Mainlayoutdiv from "./Mainlayoutdiv";
import { Typography } from "./Pricingpage";
import { Section5 } from "../Components";
import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <Mainlayoutdiv>
      <div
        className={` bg-slate-900 w-full h-[300px] grid grid-cols-1 md:grid-cols-2 place-items-center px-6 py-7
        `}
      >
        <div>
          <Typography>About</Typography>
          <p className=" text-white leading-normal text-lg font-medium pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            eros eget sapien consectetur ultrices. Ut quis dapibus libero.
          </p>
        </div>
        <div className=" flex gap-2 items-center ">
          <h1 className=" font-semibold  text-xl text-zinc-300">
            <Link to={"/"}>Home</Link>
          </h1>
          <div className=" text-white  text-lg pt-2 ">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
          <h1 className=" font-semibold  text-xl text-blue-300">About</h1>
        </div>
      </div>
      <Section5 />
    </Mainlayoutdiv>
  );
}

export default Aboutpage;
