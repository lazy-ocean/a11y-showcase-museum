import styled from "styled-components";

export const SearchForm = styled.form`
  width: 30rem;
  position: relative;
  height: 4.8rem;
`;

export const SearchField = styled.input`
  height: 100%;
  border-radius: 28px;
  width: 100%;
  border: 1px solid #c7d2e9;
  padding: 1.5rem;
  box-shadow: 0px 2px 2px 0px #00000040;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 8px;
  height: 100%;

  svg {
    height: 20px;
    width: 20px;
  }
`;
