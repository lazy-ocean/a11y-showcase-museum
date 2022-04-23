import React, { useContext, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { TertiaryHeading, RegularText } from "@a11y/components/Typography";
import {
  SubscribeInput,
  SubscribeBtn,
  ColumnWrapper,
  Checkbox,
  SubscribedText,
  Wrapper,
  Form,
} from "./Footer.styled";

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
      <Form>
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
      </Form>
    </form>
  ) : (
    <SubscribedText aria-live="polite">
      <AiFillCheckCircle aria-hidden="true" />
      <TertiaryHeading>Thank you!</TertiaryHeading>
    </SubscribedText>
  );
};

export default SubscriptionForm;
