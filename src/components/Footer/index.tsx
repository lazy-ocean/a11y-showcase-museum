import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { StyledFooter, FooterMenu, SocialMedia } from "./Footer.styled";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { TertiaryHeading } from "../Typography";
import SubscriptionForm from "./SubscriptionForm";

interface FooterMenuItem {
  link: string;
  label: string;
  icon?: React.ReactElement;
}

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);

  const footerMenuItems: FooterMenuItem[] = [
    { link: "#", label: dictionary.footer.a11y },
    { link: "#", label: dictionary.footer.ticketing },
    { link: "#", label: dictionary.footer.anticorruption },
  ];

  const socialMediaItems: FooterMenuItem[] = [
    {
      link: "#",
      label: dictionary.footer.facebook,
      icon: <BsFacebook aria-hidden="true" />,
    },
    {
      link: "#",
      label: dictionary.footer.telegram,
      icon: <BsTelegram aria-hidden="true" />,
    },
    {
      link: "#",
      label: dictionary.footer.email,
      icon: <ImMail4 aria-hidden="true" />,
    },
  ];

  return (
    <StyledFooter>
      <div>
        <FooterMenu>
          {footerMenuItems.map(({ link, label }: FooterMenuItem, i) => (
            <li key={`footer-menu-${i}`}>
              <a href={link} aria-label={label}>
                {label}
              </a>
            </li>
          ))}
        </FooterMenu>
        <div>
          <TertiaryHeading>{dictionary.footer.social}</TertiaryHeading>
          <SocialMedia aria-label={dictionary.footer.social}>
            {socialMediaItems.map(
              ({ link, label, icon }: FooterMenuItem, i) => (
                <li key={`social-media-${i}`}>
                  <a href={link} aria-label={label}>
                    {icon}
                  </a>
                </li>
              )
            )}
          </SocialMedia>
        </div>
      </div>
      <SubscriptionForm />
    </StyledFooter>
  );
};

export default Footer;
