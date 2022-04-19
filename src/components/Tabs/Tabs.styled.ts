import styled from "styled-components";
import { SecondaryHeading } from "@a11y/components/Typography";

export const TabsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.l};

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.mobile}{
    margin-top: ${theme.spacing.xl};
  }`}
`;

export const TabsButtons = styled.div`
  margin: ${({ theme }) => theme.spacing.m} 0;
`;

interface TabsContentProps {
  oneColumn?: boolean;
}

export const TabsContent = styled.div<TabsContentProps>`
  display: grid;
  grid-template-columns: ${({ oneColumn }) =>
    oneColumn ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))"};
  gap: ${({ theme }) => theme.spacing.m};

  ${({ theme, oneColumn }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    grid-template-columns: ${
      oneColumn ? "1fr" : "repeat(3, minmax(300px, 1fr))"
    };
  }`}

  ${SecondaryHeading} {
    margin: ${({ theme }) => theme.spacing.s} 0;
  }

  .history {
    line-height: 2rem;
    margin: 0;
  }

  img {
    height: 14rem;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
