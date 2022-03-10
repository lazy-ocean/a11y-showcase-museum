import styled, { css } from "styled-components";

const headingCommon = () => css`
  font-weight: 400;
  margin: 0;
`;

export const PrimaryHeading = styled.h1`
  ${headingCommon}
  font-size: 5rem;
`;

export const SecondaryHeading = styled.h2`
  ${headingCommon}
  font-size: 2.6rem;
`;

export const TertiaryHeading = styled.h3`
  ${headingCommon}
  font-size: 2.2rem;
`;

export const RegularText = styled.p`
  font-size: 1.6rem;
`;

export const Link = styled.a`
  font-size: 1.6rem;
  text-decoration: underline;
`;
