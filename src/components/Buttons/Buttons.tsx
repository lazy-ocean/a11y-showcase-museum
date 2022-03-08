import styled, { css } from "styled-components";

interface ButtonProps {
  small?: boolean;
  emphasized?: boolean;
}

const Button = css<ButtonProps>`
  padding: ${({ small }) => (small ? "1.4rem 1.8rem" : "1.8rem 4rem")};
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  transition: all 0.4s ease-out;
  cursor: pointer;
  font-size: 1.8rem;
  border-radius: 8px;

  ${({ emphasized }) =>
    emphasized &&
    `
    text-decoration: underline;
  `};
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
