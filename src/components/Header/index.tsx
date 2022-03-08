import React, { useContext } from "react";
import logo from "../../../public/logo.svg";
import { LanguageContext } from "../../utils/LanguageContext";
import SearchPanel from "../SearchPanel";
import { StyledHeader, Logo, LoginBtn } from "./Header.styled";
import LanguageSwitcher from "../LanguageSwitcher";
import { RiUserLine } from "react-icons/ri";

const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <StyledHeader>
      <Logo src={logo.src} alt={dictionary.logo} />
      <SearchPanel />
      <LanguageSwitcher />
      <LoginBtn aria-label={dictionary.buttons.loginButton}>
        <RiUserLine />
      </LoginBtn>
    </StyledHeader>
  );
};

export default Header;
