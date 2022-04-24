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

export const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.xs};

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.palette.text};
    transition: fill 0.3s ease-in-out;

    &:hover {
      fill: ${({ theme }) => theme.palette.primary};
    }

    ${({ theme }) => `
    @media only screen and ${theme.breakpoints.desktop} {
      width: 3rem;
      height: 3rem;
    }`}
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
  background-color: ${({ theme }) => theme.palette.grey};
  color: ${({ theme }) => theme.palette.text};
  left: 40%;
  z-index: 10;

  &:focus {
    transition: transform 0.2s;
    transform: translateY(0%);
  }
`;
