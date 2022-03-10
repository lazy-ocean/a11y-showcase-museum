import styled from "styled-components";
import { SecondaryHeading } from "../Typography";

export const TabsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.huge};
`;

export const TabsButtons = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

interface TabsContentProps {
  oneColumn?: boolean;
}

export const TabsContent = styled.div<TabsContentProps>`
  display: grid;
  grid-template-columns: ${({ oneColumn }) =>
    oneColumn ? "1fr" : "1fr 1fr 1fr"};
  gap: ${({ theme }) => theme.spacing.medium};
  grid-template-areas: "history history history";

  ${SecondaryHeading} {
    margin: 2rem 0;
  }

  .history {
    grid-area: history;
    font-size: 2.2rem;
    margin: 0;
  }

  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
  }
`;
