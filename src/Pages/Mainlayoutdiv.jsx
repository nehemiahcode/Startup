import App from "../Navbar";
import React from "react";
import { Footer, ScrollToTop } from "../Components";

function Mainlayoutdiv({ children }) {
  return (
    <>
      <App></App>
      <section>{children}</section>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Mainlayoutdiv;
