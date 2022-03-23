import React, { useContext, useState } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import {
  SubscribeInput,
  SubscribeBtn,
  ColumnWrapper,
  Checkbox,
  SubscribedText,
  Wrapper,
} from "./Footer.styled";
import { TertiaryHeading, RegularText } from "../Typography";
import { AiFillCheckCircle } from "react-icons/ai";

const SubscriptionForm = () => {
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const { dictionary } = useContext(LanguageContext);

  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return !subscribed ? (
    <form onSubmit={handleSubscribe}>
      <TertiaryHeading>{dictionary.footer.subscribeHeader}</TertiaryHeading>
      <Wrapper>
        <ColumnWrapper>
          <SubscribeInput
            type="email"
            name={dictionary.login.email}
            placeholder={dictionary.login.email}
            aria-label={dictionary.login.email}
          />
          <Wrapper>
            <Checkbox
              type="checkbox"
              name={dictionary.footer.gdpr}
              id="gdpr"
              required
              aria-required={true}
              aria-label={dictionary.footer.gdpr}
            />
            <RegularText as="label" htmlFor="gdpr">
              {dictionary.footer.gdpr}
            </RegularText>
          </Wrapper>
        </ColumnWrapper>
        <SubscribeBtn type="submit">{dictionary.footer.subscribe}</SubscribeBtn>
      </Wrapper>
    </form>
  ) : (
    <SubscribedText aria-live="polite">
      <AiFillCheckCircle aria-hidden="true" />
      <TertiaryHeading>Thank you!</TertiaryHeading>
    </SubscribedText>
  );
};

export default SubscriptionForm;
