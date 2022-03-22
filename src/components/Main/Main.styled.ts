import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 0 ${({ theme }) => theme.spacing.m};

  ${({ theme }) => `
@media only screen and ${theme.breakpoints.desktop}{
  padding: 0 20rem;
`}
`;
