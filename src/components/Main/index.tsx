import React from "react";
import Gallery from "../Gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CTAPanel from "../CTAPanel";
import Expositions from "../Expositions";
import Museums from "../Museums";
import { MainStyled } from "./Main.styled";

const Main = () => {
  return (
    <MainStyled id="main">
      <Gallery />
      <CTAPanel />
      <Expositions />
      <Museums />
    </MainStyled>
  );
};

export default Main;
