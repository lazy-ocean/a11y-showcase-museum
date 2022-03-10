import React from "react";
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

const Card = ({ img, title, subtitle, description, cta }: CardProps) => (
  <article>
    <img src={img} alt={title} />
    <SecondaryHeading>{title}</SecondaryHeading>
    <TertiaryHeading>{subtitle}</TertiaryHeading>
    <RegularText>{description}</RegularText>
    <Link aria-label={`${cta} ${title}`} href="#">
      {cta}
    </Link>
  </article>
);

export default Card;
