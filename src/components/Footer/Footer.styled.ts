import styled from "styled-components";
import { PrimaryButton } from "../Buttons/Buttons";

export const StyledFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.palette.grey};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.m};

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
  gap: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const FooterMenuLink = styled.a`
  transition: all 0.2s;

  &:hover {
    border-bottom: 2.5px dashed ${({ theme }) => theme.palette.mainPurple};
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: 0;
  gap: ${({ theme }) => theme.spacing.s};

  svg {
    width: 40px;
    height: 40px;
    transition: all 0.2s;

    &:hover {
      fill: ${({ theme }) => theme.palette.mainPurple};
    }
  }
`;

export const SubscribeInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  margin: ${({ theme }) => theme.spacing.xs};
  margin-left: 0;
  font-size: 1.8rem;
  flex-grow: 1;
`;

export const SubscribeBtn = styled(PrimaryButton)`
  margin: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.s}`};
  align-self: baseline;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export const SubscribedText = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} 0;
`;
