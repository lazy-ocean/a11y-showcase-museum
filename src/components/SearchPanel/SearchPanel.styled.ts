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
  border: 1px solid #b8b8b8;
  ${({ isSuggestOpen }) => isSuggestOpen && "border-bottom: 0"};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.palette.bgLight};
  transition: background-color 0.5s ease-in-out;
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
    fill: ${({ theme }) => theme.palette.text};
  }
`;

export const SearchSuggestContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.bg};
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
    color: ${({ theme }) => theme.palette.primary};
  }
`;
