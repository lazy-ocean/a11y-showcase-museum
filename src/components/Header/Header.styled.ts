import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing.m};
  align-items: center;

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

export const SkipToMain = styled.a`
  font-size: 1.7rem;
  padding: 1rem;
  position: absolute;
  transform: translateY(-200%);
  transition: all 0.2s;
  display: block;
  overflow: hidden;
  background-color: white;
  left: 40%;

  &:focus {
    transform: translateY(0%);
  }
`;
