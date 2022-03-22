import styled from "styled-components";

export const MainMenu = styled.nav`
  display: flex;
  gap: 4rem;
  padding: 0 ${({ theme }) => theme.spacing.m};
  margin: 4rem 0;
  flex-wrap: wrap;
  list-style-type: none;

  ${({ theme }) => `
    @media only screen and ${theme.breakpoints.tablet}{
      margin: 7.6rem 0 ${theme.spacing.m} 0;
  `}

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    padding: 0 20rem;
`}
`;

export const MenuItem = styled.li`
  font-size: 1.8rem;

  a {
    padding-bottom: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.mainPurple};
  }
`;
