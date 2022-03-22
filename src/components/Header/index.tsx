import React, { useState, useContext } from "react";
import logo from "../../../public/logo.svg";
import { LanguageContext } from "../../utils/LanguageContext";
import SearchPanel from "../SearchPanel";
import { StyledHeader, Logo, LoginBtn } from "./Header.styled";
import LanguageSwitcher from "../LanguageSwitcher";
import { RiUserLine } from "react-icons/ri";
import LoginModal from "../LoginModal";
import useBreakpoint from "../../utils/useBreakpoint";

const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const { isDesktop } = useBreakpoint();
  return (
    <StyledHeader>
      <Logo src={logo.src} alt={dictionary.logo} />
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
