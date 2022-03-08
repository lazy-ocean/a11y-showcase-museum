import styled, { css } from "styled-components";

const Button = css`
  padding: 1.8rem 4rem;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  transition: all 0.4s ease-out;
  cursor: pointer;
  font-size: 1.8rem;
  border-radius: 8px;
`;

export const PrimaryButton = styled.button`
  ${Button};

  ${({ theme }) => `
    background-color: ${theme.palette.mainPurple};
    color: ${theme.palette.white};
    border: none;
  `};
`;

export const SecondaryButton = styled.button`
  ${Button};

  ${({ theme }) => `
    background-color: ${theme.palette.secondaryPurple};
    color: ${theme.palette.dark};
    border: none;
  `};
`;

export const GhostButton = styled.button`
  ${Button};
  text-decoration: underline;

  ${({ theme }) => `
    background-color: transparent;
    color: ${theme.palette.dark};
    border: none;
  `};
`;
