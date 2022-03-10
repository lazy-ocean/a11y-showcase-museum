import React from "react";
import Gallery from "../Gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CTAPanel from "../CTAPanel";
import Expositions from "../Expositions";

const Main = () => {
  return (
    <main>
      <Gallery />
      <CTAPanel />
      <Expositions />
    </main>
  );
};

export default Main;
