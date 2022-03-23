import styled from "styled-components";

export const MainMenu = styled.menu`
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
  transition: all 0.4s;

  a {
    padding-bottom: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.mainPurple};

    &:hover {
      border-bottom: 2.5px dashed ${({ theme }) => theme.palette.mainPurple};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.mainPurple};
  }
`;
