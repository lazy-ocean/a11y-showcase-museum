import React from "react";
import {
  SecondaryHeading,
  TertiaryHeading,
  RegularText,
  Link,
} from "@a11y/components/Typography";
import { StyledCard } from "./Card.styled";
import Image from "next/image";

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
}: CardProps) => {
  const ifJpg = img.split(".")[1] !== "svg";

  return (
    <StyledCard tabIndex={0}>
      <Image
        src={img}
        alt={title}
        className={ifJpg ? "cover" : undefined}
        layout="intrinsic"
        height={200}
        width={400}
      />
      <SecondaryHeading className="test">{title}</SecondaryHeading>
      {subtitle && <TertiaryHeading>{subtitle}</TertiaryHeading>}
      {address && <RegularText as="address">{address}</RegularText>}
      {description && <RegularText>{description}</RegularText>}
      <Link aria-label={`${cta} ${title}`} href="#">
        {cta}
      </Link>
    </StyledCard>
  );
};

export default Card;
