import styled from "styled-components";

export const StyledCard = styled.article`
  cursor: default;
  transition: all 0.2s;

  a {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }

  &:hover {
    a,
    h2 {
      color: ${({ theme }) => theme.palette.mainPurple};
    }
  }
`;
