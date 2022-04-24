import React, { useContext } from "react";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { TertiaryHeading } from "@a11y/components/Typography";
import {
  StyledFooter,
  FooterMenu,
  SocialMedia,
  FooterMenuLink,
} from "./Footer.styled";
import SubscriptionForm from "./SubscriptionForm";

interface FooterMenuItem {
  link: string;
  label: string;
  icon?: React.ReactElement;
}

export const Footer = () => {
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
      icon: (
        <BsFacebook aria-hidden="true" title={dictionary.footer.facebook} />
      ),
    },
    {
      link: "#",
      label: dictionary.footer.telegram,
      icon: (
        <BsTelegram aria-hidden="true" title={dictionary.footer.facebook} />
      ),
    },
    {
      link: "#",
      label: dictionary.footer.email,
      icon: <ImMail4 aria-hidden="true" title={dictionary.footer.facebook} />,
    },
  ];

  return (
    <StyledFooter>
      <div>
        <nav aria-label={dictionary.footer.menu}>
          <FooterMenu aria-label={dictionary.footer.menu}>
            {footerMenuItems.map(({ link, label }: FooterMenuItem, i) => (
              <li key={`footer-menu-${i}`}>
                <FooterMenuLink href={link} aria-label={label}>
                  {label}
                </FooterMenuLink>
              </li>
            ))}
          </FooterMenu>
        </nav>
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
