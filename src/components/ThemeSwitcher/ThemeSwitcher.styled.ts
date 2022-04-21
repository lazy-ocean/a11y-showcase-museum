import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.xs};

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.palette.text};

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
