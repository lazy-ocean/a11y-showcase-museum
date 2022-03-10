import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PrimaryButton } from "../Buttons/Buttons";
import { LanguageContext } from "../../utils/LanguageContext";
import { CallToActionsMenu } from "./CTAPanel.styled";

const CTAPanel = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
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
  );
};

export default CTAPanel;
