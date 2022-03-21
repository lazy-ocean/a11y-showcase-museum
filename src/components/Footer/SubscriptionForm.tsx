import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import {
  SubscribeInput,
  SubscribeBtn,
  Wrapper,
  Checkbox,
} from "./Footer.styled";
import { TertiaryHeading, RegularText } from "../Typography";

const SubscriptionForm = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <form action="">
      <TertiaryHeading>{dictionary.footer.subscribeHeader}</TertiaryHeading>
      <Wrapper>
        <SubscribeInput
          type="email"
          name={dictionary.login.email}
          placeholder={dictionary.login.email}
        />
        <SubscribeBtn type="submit">{dictionary.footer.subscribe}</SubscribeBtn>
      </Wrapper>
      <Wrapper>
        <Checkbox type="checkbox" name={dictionary.footer.gdpr} id="gdpr" />
        <RegularText as="label" htmlFor="gdpr">
          {dictionary.footer.gdpr}
        </RegularText>
      </Wrapper>
    </form>
  );
};

export default SubscriptionForm;
