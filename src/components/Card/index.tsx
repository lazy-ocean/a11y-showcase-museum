import React from "react";
import {
  SecondaryHeading,
  TertiaryHeading,
  RegularText,
  Link,
} from "../Typography";
import { StyledCard } from "./Card.styled";

interface CardProps {
  img: string;
  title: string;
  subtitle?: string;
  description?: string;
  cta: string;
  address?: string;
}

const Card = ({
  img,
  title,
  subtitle,
  description,
  cta,
  address,
}: CardProps) => (
  <StyledCard tabIndex={0} aria-label={title} role="tabpanel">
    <img src={img} alt={title} />
    <SecondaryHeading id="id">{title}</SecondaryHeading>
    {subtitle && <TertiaryHeading>{subtitle}</TertiaryHeading>}
    {address && <RegularText as="address">{address}</RegularText>}
    {description && <RegularText>{description}</RegularText>}
    <Link aria-label={`${cta} ${title}`} href="#">
      {cta}
    </Link>
  </StyledCard>
);

export default Card;
