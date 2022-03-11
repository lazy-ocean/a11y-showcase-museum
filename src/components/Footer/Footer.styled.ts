import styled from "styled-components";
import { PrimaryButton } from "../Buttons/Buttons";

export const StyledFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.huge};
  background-color: ${({ theme }) => theme.palette.grey};
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export const SubscribeInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding: 1rem 0;
  margin: ${({ theme }) => theme.spacing.small};
  margin-left: 0;
  font-size: 1.8rem;
  flex-grow: 1;
`;

export const SubscribeBtn = styled(PrimaryButton)`
  padding: 1rem 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: ${({ theme }) => theme.spacing.small};
`;
