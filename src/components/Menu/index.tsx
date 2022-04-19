import React, { useContext } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { Link } from "@a11y/components/Typography";
import { MainMenu, MenuItem } from "./Menu.styled";

export const Menu = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <MainMenu aria-label={dictionary.menus.mainMenu}>
      <MenuItem>
        <Link href="#">{dictionary.sections.museum}</Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">{dictionary.sections.visit}</Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">{dictionary.sections.expositions}</Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">{dictionary.sections.broadcasts}</Link>
      </MenuItem>
    </MainMenu>
  );
};

export default Menu;
