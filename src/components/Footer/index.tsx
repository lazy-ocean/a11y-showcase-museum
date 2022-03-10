import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { StyledFooter, FooterMenu, SocialMedia } from "./Footer.styled";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { TertiaryHeading } from "../Typography";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <StyledFooter>
      <div>
        <FooterMenu>
          <li>
            <a href="#" aria-label={dictionary.footer.a11y}>
              {dictionary.footer.a11y}
            </a>
          </li>
          <li>
            <a href="#" aria-label={dictionary.footer.ticketing}>
              {dictionary.footer.ticketing}
            </a>
          </li>
          <li>
            <a href="#" aria-label={dictionary.footer.anticorruption}>
              {dictionary.footer.anticorruption}
            </a>
          </li>
        </FooterMenu>
        <div>
          <TertiaryHeading>{dictionary.footer.social}</TertiaryHeading>
          <SocialMedia aria-label={dictionary.footer.social}>
            <li>
              <a href="#" aria-label={dictionary.footer.facebook}>
                <BsFacebook aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label={dictionary.footer.telegram}>
                <BsTelegram aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label={dictionary.footer.email}>
                <ImMail4 aria-hidden="true" />
              </a>
            </li>
          </SocialMedia>
        </div>
      </div>
      <form action="">
        <h3>{dictionary.footer.subscribeHeader}</h3>
        <input type="emal" name={dictionary.login.email} id="" />
        <button type="submit">{dictionary.footer.subscribe}</button>
        <input type="checkbox" name={dictionary.footer.gdpr} id="gdpr" />
        <label htmlFor="gdpr">{dictionary.footer.gdpr}</label>
      </form>
    </StyledFooter>
  );
};

export default Footer;
