import styled, { css } from "styled-components";

interface ButtonProps {
  small?: boolean;
}

const Button = css<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.s};
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: ${({ theme }) => theme.radius};
  border: none;

  ${({ theme, small }) => `
  @media only screen and ${theme.breakpoints.mobile}{
    padding: ${
      small ? theme.spacing.s : `${theme.spacing.s} ${theme.spacing.m}`
    };
    font-size: 1rem;
`}}
`;

export const PrimaryButton = styled.button`
  ${Button};

  ${({ theme }) => `
    background-color: ${theme.palette.mainPurple};
    color: ${theme.palette.white};

    &:hover {
      transition: background-color 0.4s ease-out;
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
      transition: background-color 0.4s ease-out;
      background-color: ${theme.palette.lightPurple};
    }
  `};
`;

export const GhostButton = styled.button`
  ${Button};
  text-decoration: underline;

  ${({ theme }) => `
    background-color: transparent;
    color: ${theme.palette.dark};

    &:hover {
      text-decoration-style: dashed;
      color: ${theme.palette.mainPurple};
    }
  `};
`;
