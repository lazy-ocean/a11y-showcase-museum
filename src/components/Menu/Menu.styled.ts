import styled from "styled-components";

export const MainMenu = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.m};
  padding: 0 ${({ theme }) => theme.spacing.m};
  margin: 0 0 ${({ theme }) => theme.spacing.m} 0;
  flex-wrap: wrap;
  list-style-type: none;

  ${({ theme }) => `
    @media only screen and ${theme.breakpoints.tablet} {
      margin: ${theme.spacing.l} 0 ${theme.spacing.m} 0;
    }

    @media only screen and ${theme.breakpoints.desktop} {
      padding: 0 ${theme.spacing.xxl};
    }`}
`;

export const MenuItem = styled.li`
  transition: border-bottom 0.5s ease-in-out;

  a {
    padding-bottom: 5px;
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary};

    &:hover {
      border-bottom: 2.5px dashed ${({ theme }) => theme.palette.primary};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;
