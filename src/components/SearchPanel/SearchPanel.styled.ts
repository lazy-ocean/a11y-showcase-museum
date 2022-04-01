import styled from "styled-components";

export const SearchForm = styled.form`
  width: 20rem;
  position: relative;
  margin-left: auto;
`;

export const SearchField = styled.input`
  border-radius: 28px;
  width: 100%;
  border: 1px solid #c7d2e9;
  padding: ${({ theme }) => theme.spacing.s};
  box-shadow: 0px 2px 2px 0px #00000040;
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
