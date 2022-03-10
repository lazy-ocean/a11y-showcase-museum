import styled from "styled-components";
import { SecondaryHeading } from "../Typography";
import { GhostButton } from "../Buttons/Buttons";

export const TabsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.huge};
`;

export const TabsButtons = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

export const TabsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.medium};

  ${SecondaryHeading} {
    margin: 2rem 0;
  }

  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
  }
`;
