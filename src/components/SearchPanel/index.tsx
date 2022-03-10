import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { SearchField, SearchButton, SearchForm } from "./SearchPanel.styled";
import { AiOutlineSearch } from "react-icons/ai";

const SearchPanel = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <SearchForm role="search">
      <SearchField
        type="search"
        aria-label={dictionary.search}
        name={dictionary.search}
        spellCheck="false"
        placeholder={dictionary.search}
      />
      <SearchButton type="submit" title={dictionary.searchSubmit}>
        <AiOutlineSearch aria-label={dictionary.searchSubmit} />
      </SearchButton>
    </SearchForm>
  );
};

export default SearchPanel;
