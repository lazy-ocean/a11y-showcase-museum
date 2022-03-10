import React from "react";
import Gallery from "../Gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CTAPanel from "../CTAPanel";

const Main = () => {
  return (
    <main>
      <Gallery />
      <CTAPanel />
    </main>
  );
};

export default Main;
