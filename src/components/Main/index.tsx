import React from "react";
import Gallery from "../Gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CTAPanel from "../CTAPanel";
import Expositions from "../Expositions";
import Museums from "../Museums";

const Main = () => {
  return (
    <main>
      <Gallery />
      <CTAPanel />
      <Expositions />
      <Museums />
    </main>
  );
};

export default Main;
