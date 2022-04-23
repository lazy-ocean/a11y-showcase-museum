import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { SearchField, SearchButton, SearchForm } from "./SearchPanel.styled";
import SearchSuggest from "./SearchSuggest";

const SearchPanel = () => {
  const [isSuggestOpen, setSuggestOpen] = useState(false);
  const { dictionary } = useContext(LanguageContext);

  const handleBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setSuggestOpen(false);
    }
  };

  return (
    <SearchForm
      role="search"
      onFocus={() => setSuggestOpen(true)}
      onBlur={handleBlur}
    >
      <SearchField
        type="search"
        aria-label={dictionary.search.label}
        name={dictionary.search.label}
        spellCheck="false"
        placeholder={dictionary.search.label}
        aria-owns="search-results"
        isSuggestOpen={isSuggestOpen}
        aria-describedby="search-hint"
        role="combobox"
        aria-expanded={isSuggestOpen}
      />
      <SearchButton type="submit" title={dictionary.search.submit}>
        <AiOutlineSearch aria-hidden="true" />
      </SearchButton>
      {isSuggestOpen && <SearchSuggest setSuggestOpen={setSuggestOpen} />}
      <span id="search-hint" className="visually-hidden">
        {dictionary.search.hint}
      </span>
    </SearchForm>
  );
};

export default SearchPanel;
