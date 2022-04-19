import styled from "styled-components";
import { PrimaryButton } from "@a11y/components/Buttons";

export const StyledFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.l};
  background-color: ${({ theme }) => theme.palette.grey};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.m};
  gap: ${({ theme }) => theme.spacing.m};

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.tablet}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.l};
    margin-top: ${theme.spacing.xl};
  }

  @media only screen and ${theme.breakpoints.desktop}{
    padding: ${theme.spacing.l} ${theme.spacing.xxl};
  }`}
`;

export const FooterMenu = styled.menu`
  list-style-type: none;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  margin: 0 0 ${({ theme }) => theme.spacing.m};
  padding-left: 0;
`;

export const FooterMenuLink = styled.a`
  transition: border-bottom 0.2s;
  text-decoration: none;
  border-bottom: 2px dashed transparent;

  &:hover {
    border-bottom: 2px dashed ${({ theme }) => theme.palette.mainPurple};
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.s};
  padding: 0;
  gap: ${({ theme }) => theme.spacing.s};
  list-style-type: none;

  svg {
    width: 30px;
    height: 30px;
    transition: fill 0.2s;

    &:hover {
      fill: ${({ theme }) => theme.palette.mainPurple};
    }

    ${({ theme }) => `
      @media only screen and ${theme.breakpoints.mobile}{
        width: 40px;
        height: 40px;
      }`}
  }
`;

export const SubscribeInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  margin: ${({ theme }) => theme.spacing.xs};
  margin-left: 0;
  font-size: 1rem;
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
