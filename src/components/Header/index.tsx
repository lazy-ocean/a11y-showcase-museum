import React, { useState, useContext } from "react";
import { RiUserLine } from "react-icons/ri";
import { LanguageContext, useBreakpoint } from "@a11y/utils";
import SearchPanel from "@a11y/components/SearchPanel";
import LanguageSwitcher from "@a11y/components/LanguageSwitcher";
import LoginModal from "@a11y/components/LoginModal";
import { StyledHeader, Logo, LoginBtn, SkipToMain } from "./Header.styled";

export const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const { isDesktop } = useBreakpoint();
  return (
    <StyledHeader>
      <Logo src="/logo.svg" alt={dictionary.logo} />
      <SkipToMain href="#main" aria-label={dictionary.skipToMain}>
        {dictionary.skipToMain}
      </SkipToMain>
      {isDesktop && <SearchPanel />}
      <LanguageSwitcher />
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
