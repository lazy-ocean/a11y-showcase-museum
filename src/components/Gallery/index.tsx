import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { Slide } from "./Gallery.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface SlideInterface {
  alt: string;
  src: string;
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (document !== undefined) {
      const list = document.querySelectorAll(".splide__slide");
      list.forEach((item) => {
        item.removeAttribute("role");
        item.removeAttribute("aria-roledescription");
        item.removeAttribute("aria-label");
      });
    }
  }, []);
  const { dictionary } = useContext(LanguageContext);

  const slides: SlideInterface[] = [
    {
      alt: dictionary.gallery.fridays,
      src: "/hero-banner1.jpeg",
    },
    {
      alt: dictionary.gallery.mummies,
      src: "/hero-banner2.jpeg",
    },
    {
      alt: dictionary.gallery.egypt,
      src: "/hero-banner3.jpeg",
    },
  ];
  return (
    <Splide
      aria-label={dictionary.gallery.title}
      options={{ type: "loop" }}
      onMove={(_, index) => setCurrentIndex(index)}
      tag="section"
    >
      {slides.map(({ alt, src }: SlideInterface, i: number) => (
        <SplideSlide key={i}>
          <Slide
            alt={`${alt}, ${dictionary.gallery.count
              .replace("{index}", (currentIndex + 1).toString())
              .replace("{overall}", slides.length.toString())}`}
            src={src}
            width={1780}
            height={1099}
            layout="intrinsic"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Gallery;
