import styled from "styled-components";

export const StyledCard = styled.article`
  cursor: default;

  a {
    display: block;
    width: max-content;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }

  img {
    max-width: 27rem;
  }

  &:hover {
    transition: all 0.2s;
    a,
    h2 {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;
