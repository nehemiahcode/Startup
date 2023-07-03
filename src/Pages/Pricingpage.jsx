import React from "react";
import Mainlayoutdiv from "./Mainlayoutdiv";
import { Section7 } from "../Components";
import { Link } from "react-router-dom";
import Fullimage from "../assets/shape.svg";

function Pricingpage() {
  return (
    <Mainlayoutdiv>
      <div
        className={` bg-slate-900 w-full h-[300px] grid grid-cols-1 md:grid-cols-2 place-items-center px-6 py-7
        `}
      >
        <div>
          <Typography>Pricing</Typography>
          <p className=" text-white leading-normal text-lg font-medium pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            eros eget sapien consectetur ultrices. Ut quis dapibus libero.
          </p>
        </div>
        <div className=" flex gap-2 items-center ">
          <h1 className=" font-semibold  text-xl text-zinc-300">
            <Link to={"/about"}>About</Link>
          </h1>
          <div className=" text-white  text-lg pt-2 ">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
          <h1 className=" font-semibold  text-xl text-blue-300">Pricing</h1>
        </div>
      </div>
      <Section7 />
    </Mainlayoutdiv>
  );
}

export default Pricingpage;

export function Typography({ children }) {
  return (
    <h1
      className=" text-white font-bold text-[1.9rem] lg:text-5xl after:bg-slate-900
                md:text-4xl sm:text-3xl after:bg-gradient-to-l from-cyan-900 to-slate-900
                 after:h-[7px] after:rounded-lg after:mt-1 lg:after:w-[150px] after:w-[60px] after:block"
    >
      {children}
    </h1>
  );
}
