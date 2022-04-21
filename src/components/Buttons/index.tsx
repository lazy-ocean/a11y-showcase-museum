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
    background-color: ${theme.palette.primary};
    color: ${theme.palette.white};

    &:hover {
      transition: background-color 0.4s ease-out;
      background-color: ${theme.palette.primaryDark};
    }
  `};
`;

export const SecondaryButton = styled.button`
  ${Button};

  ${({ theme }) => `
  background-color: ${theme.palette.primaryLight};
    &:hover {
      transition: background-color 0.4s ease-out;
    }
  `};
`;

export const GhostButton = styled.button`
  ${Button};
  text-decoration: underline;

  ${({ theme }) => `
    background-color: transparent;
    color: ${theme.palette.text};
    &:hover {
      text-decoration-style: dashed;
      color: ${theme.palette.primary};
    }
  `};
`;
