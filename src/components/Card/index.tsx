import React from "react";
import styled from "styled-components";
import {
  SecondaryHeading,
  TertiaryHeading,
  RegularText,
  Link,
} from "../Typography";

interface CardProps {
  img: string;
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
}

const StyledCard = styled.article`
  cursor: default;
  transition: all 0.2s;

  &:hover {
    a,
    h2 {
      color: ${({ theme }) => theme.palette.mainPurple};
    }
  }
`;

const Card = ({ img, title, subtitle, description, cta }: CardProps) => (
  <StyledCard>
    <img src={img} alt={title} />
    <SecondaryHeading>{title}</SecondaryHeading>
    <TertiaryHeading>{subtitle}</TertiaryHeading>
    <RegularText>{description}</RegularText>
    <Link aria-label={`${cta} ${title}`} href="#">
      {cta}
    </Link>
  </StyledCard>
);

export default Card;
