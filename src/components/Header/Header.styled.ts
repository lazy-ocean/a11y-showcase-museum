import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing.m};
  align-items: center;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    padding: ${theme.spacing.l} ${theme.spacing.xxl} 0 ${theme.spacing.xxl};
  }`}
`;

export const Logo = styled.img`
  height: 2rem;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.tablet}{
    height: 4.2rem;
  }`}
`;

export const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  margin-left: ${({ theme }) => theme.spacing.s};
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
  }

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.tablet}{
    margin-left: ${theme.spacing.s};
  }`}
`;

export const SkipToMain = styled.a`
  padding: ${({ theme }) => theme.spacing.s};
  position: absolute;
  transform: translateY(-300%);
  display: block;
  overflow: hidden;
  background-color: white;
  left: 40%;
  z-index: 10;

  &:focus {
    transition: transform 0.2s;
    transform: translateY(0%);
  }
`;
