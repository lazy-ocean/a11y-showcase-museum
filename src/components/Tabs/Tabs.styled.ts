import styled from "styled-components";
import { SecondaryHeading } from "../Typography";

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
