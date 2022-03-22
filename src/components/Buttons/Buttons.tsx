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
  border-radius: ${({ theme }) => theme.radius};
  border: none;

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

    &:hover {
      background-color: ${theme.palette.darkPurple};
    }
  `};
`;

export const SecondaryButton = styled.button`
  ${Button};

  ${({ theme }) => `
    background-color: ${theme.palette.secondaryPurple};
    color: ${theme.palette.dark};

    &:hover {
      background-color: ${theme.palette.lightPurple};
    }
  `};
`;

export const GhostButton = styled.button`
  ${Button};
  text-decoration: underline;

  &:hover {
    text-decoration-style: dashed;
  }

  ${({ theme }) => `
    background-color: transparent;
    color: ${theme.palette.dark};

    &:hover {
      text-decoration-style: dashed;
      color: ${theme.palette.mainPurple};
    }
  `};
`;
