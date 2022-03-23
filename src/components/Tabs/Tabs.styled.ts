import styled from "styled-components";
import { SecondaryHeading } from "../Typography";

export const TabsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.mobile}{
    margin-top: ${theme.spacing.xxl};
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
    margin: 2rem 0;
  }

  .history {
    font-size: 2.2rem;
    margin: 0;
  }

  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
  }
`;
