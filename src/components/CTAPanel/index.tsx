import React, { useContext } from "react";
import { PrimaryButton } from "@a11y/components/Buttons";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { CallToActionsMenu } from "./CTAPanel.styled";

const CTAPanel = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section aria-labelledby="cta-header">
      <h1 id="cta-header" className="visually-hidden" aria-hidden="true">
        {dictionary.menus.buttonsMenu}
      </h1>
      <CallToActionsMenu aria-labelledby="cta-header">
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
