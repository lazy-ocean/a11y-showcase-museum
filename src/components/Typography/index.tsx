import styled, { css } from "styled-components";

const headingCommon = () => css`
  font-weight: 400;
  margin: 0;
`;

export const PrimaryHeading = styled.h1`
  ${headingCommon};
  font-size: 2rem;
  font-family: "Roboto", sans-serif;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.mobile}{
    font-size: 3rem;
  }`};
`;

export const SecondaryHeading = styled.h2`
  ${headingCommon};
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
`;

export const TertiaryHeading = styled.h3`
  ${headingCommon};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
`;

export const RegularText = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Link = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  font-family: "Roboto", sans-serif;
`;

export const MenuLink = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  font-family: "Roboto", sans-serif;
`;
