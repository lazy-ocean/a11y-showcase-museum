import styled from "styled-components";

interface SearchFieldProps {
  isSuggestOpen: boolean;
}

export const SearchForm = styled.form`
  width: 35%;
  position: relative;
  margin-left: auto;
`;

export const SearchField = styled.input<SearchFieldProps>`
  border-radius: ${({ isSuggestOpen, theme }) =>
    !isSuggestOpen ? theme.radius : `${theme.radius} ${theme.radius} 0 0`};
  width: 100%;
  border: 1px solid #c7d2e9;
  ${({ isSuggestOpen }) => isSuggestOpen && "border-bottom: 0"};
  padding: ${({ theme }) => theme.spacing.s};
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 8px;
  top: 14px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const SearchSuggestContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.s};
  list-style-type: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #c7d2e9;
  border-radius: 0 0 ${({ theme }) => `${theme.radius} ${theme.radius}`};
  z-index: 100;
`;

export const Option = styled.li`
  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.palette.mainPurple};
  }
`;
