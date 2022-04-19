import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useKeydown, LanguageContext } from "@a11y/utils";
import { SearchSuggestContainer, Option } from "./SearchPanel.styled";

interface SearchSuggestProps {
  setSuggestOpen: (arg0: boolean) => void;
}

const SearchSuggest = ({ setSuggestOpen }: SearchSuggestProps) => {
  const { dictionary } = useContext(LanguageContext);

  const suggestions = [
    {
      title: dictionary.expositions.richter.title,
      subtitle: dictionary.expositions.richter.subtitle,
    },
    {
      title: dictionary.expositions.tattoo.title,
      subtitle: dictionary.expositions.tattoo.subtitle,
    },
    {
      title: dictionary.expositions.matisse.title,
      subtitle: dictionary.expositions.matisse.subtitle,
    },
  ];

  const [focused, setFocused] = useState<boolean | number>(false);

  useEffect(() => {
    if (typeof focused === "number") {
      (
        document?.querySelectorAll(".suggest-link")[focused] as HTMLElement
      )?.focus();
    }
  }, [focused]);

  const handleArrow = (dir: string) => {
    if (dir === "down") {
      if (typeof focused !== "number") {
        setFocused(0);
      } else {
        focused !== suggestions.length - 1
          ? setFocused(focused + 1)
          : setFocused(0);
      }
    }
    if (dir === "up") {
      if (typeof focused !== "number") {
        setFocused(suggestions.length - 1);
      } else {
        focused !== 0
          ? setFocused(focused - 1)
          : setFocused(suggestions.length - 1);
      }
    }
  };

  useKeydown("Escape", () => setSuggestOpen(false));
  useKeydown("ArrowDown", () => handleArrow("down"));
  useKeydown("ArrowUp", () => handleArrow("up"));

  return (
    <SearchSuggestContainer
      id="search-results"
      role="listbox"
      aria-label={dictionary.search.suggestions}
      aria-describedby="results"
    >
      {suggestions.map(({ title, subtitle }, i: number) => (
        <Option
          role="option"
          aria-selected={false}
          key={i}
          aria-setsize={3}
          aria-posinset={i}
          tabIndex={-1}
        >
          <Link href="#">
            <a className="suggest-link" tabIndex={-1}>
              {title} <span>{subtitle}</span>
              <span className="visually-hidden">
                ,
                {dictionary.search.count
                  .replace("{index}", (i + 1).toString())
                  .replace("{overall}", suggestions.length.toString())}
              </span>
            </a>
          </Link>
        </Option>
      ))}
    </SearchSuggestContainer>
  );
};

export default SearchSuggest;
