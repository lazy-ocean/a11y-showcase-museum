import React, { useContext } from "react";
import Gallery from "../Gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PrimaryButton } from "../Buttons/Buttons";
import { LanguageContext } from "../../utils/LanguageContext";
import { CallToActionsMenu } from "./Main.styled";

const Main = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <main>
      <section>
        <Gallery />
      </section>
      <section>
        <CallToActionsMenu aria-label={dictionary.menus.buttonsMenu}>
          <PrimaryButton aria-label={dictionary.ctas.buy}>
            {dictionary.ctas.buy}
          </PrimaryButton>
          <PrimaryButton aria-label={dictionary.ctas.friend}>
            {dictionary.ctas.friend}
          </PrimaryButton>
          <PrimaryButton aria-label={dictionary.ctas.shop}>
            {dictionary.ctas.shop}
          </PrimaryButton>
        </CallToActionsMenu>
      </section>
    </main>
  );
};

export default Main;
