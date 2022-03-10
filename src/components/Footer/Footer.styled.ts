import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.huge};
  background-color: ${({ theme }) => theme.palette.grey};
  display: flex;
  padding: 3rem 3rem;

  gap: 8rem;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    padding: 7rem 20rem;
`}
`;

export const FooterMenu = styled.nav`
  list-style-type: none;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const SocialMedia = styled.ul`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: 0;
  gap: 2rem;

  svg {
    width: 40px;
    height: 40px;
  }
`;
