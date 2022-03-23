import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing.m};

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    padding: 4rem 20rem 0 20rem;
  }`}
`;

export const Logo = styled.img`
  height: 4.2rem;
  margin-right: auto;
`;

export const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  margin-left: 1rem;
  cursor: pointer;

  svg {
    width: 4.6rem;
    height: 4.6rem;
  }

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.tablet}{
    margin-left: ${theme.spacing.s};
  }`}
`;
