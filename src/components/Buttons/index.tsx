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
    color: ${theme.palette.contrastText}; 
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, filter 0.5s ease-in-out;

    &:hover {
      filter: brightness(1.3);
    }
  `};
`;

export const SecondaryButton = styled.button`
  ${Button};
  transition: background-color 0.5s ease-in-out, filter 0.5s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }

  ${({ theme }) => `
  background-color: ${theme.palette.primaryLight};
  color: ${theme.palette.darkGrey};
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
