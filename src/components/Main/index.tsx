import React from "react";
import Gallery from "@a11y/components/Gallery";
import CTAPanel from "@a11y/components/CTAPanel";
import Expositions from "@a11y/components/Expositions";
import Museums from "@a11y/components/Museums";
import { MainStyled } from "./Main.styled";

export const Main = () => {
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
