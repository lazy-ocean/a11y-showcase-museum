import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import { LanguageContext, useBreakpoint } from "@a11y/utils";
import SearchPanel from "@a11y/components/SearchPanel";
import LanguageSwitcher from "@a11y/components/LanguageSwitcher";
import LoginModal from "@a11y/components/LoginModal";
import { StyledHeader, LoginBtn, SkipToMain } from "./Header.styled";
import ThemeSwitcher from "../ThemeSwitcher";
import { ThemeType } from "@a11y/utils/useTheme";

interface HeaderProps {
  theme: ThemeType;
  setTheme: (arg0: ThemeType) => void;
}

export const Header = ({ theme, setTheme }: HeaderProps) => {
  const { dictionary } = useContext(LanguageContext);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const { isDesktop } = useBreakpoint();

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  }, [modalIsOpen]);

  return (
    <StyledHeader>
      <Image
        src={theme === ThemeType.light ? "/logo-dark.svg" : "/logo-light.svg"}
        alt={dictionary.logo}
        height="75"
        width="300"
      />
      <SkipToMain href="#main" aria-label={dictionary.skipToMain}>
        {dictionary.skipToMain}
      </SkipToMain>
      {isDesktop && <SearchPanel />}
      <LanguageSwitcher />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <LoginBtn
        aria-label={dictionary.buttons.loginButton}
        onClick={() => setIsModalOpen(true)}
        title={dictionary.buttons.loginButton}
      >
        <RiUserLine aria-hidden="true" />
      </LoginBtn>
      <LoginModal
        isOpen={modalIsOpen}
        setIsOpen={setIsModalOpen}
        aria-haspopup="dialog"
      />
    </StyledHeader>
  );
};

export default Header;
