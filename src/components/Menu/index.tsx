import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { MainMenu, MenuItem } from "./Menu.styled";
import { Link } from "../Typography";

const Menu = () => {
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
