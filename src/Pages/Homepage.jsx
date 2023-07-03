import React from "react";
import Mainlayoutdiv from "./Mainlayoutdiv";
import Section1 from "../Components";
import {
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Contact,
} from "../Components";

function Homepage() {
  return (
    <>
      <Mainlayoutdiv>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Contact />
      </Mainlayoutdiv>
    </>
  );
}

export default Homepage;
