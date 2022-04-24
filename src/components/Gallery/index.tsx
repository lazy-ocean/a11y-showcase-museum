import React, { useContext } from "react";
import Carousel from "nuka-carousel";
import { GrNext, GrPrevious } from "react-icons/gr";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { Slide, SlideButton } from "./Gallery.styled";

interface SlideInterface {
  alt: string;
  src: string;
}

const Gallery = () => {
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
    <section id="gallery">
      <h1 className="visually-hidden">{dictionary.gallery.title}</h1>
      <Carousel
        enableKeyboardControls
        renderAnnounceSlideMessage={({ currentSlide }) =>
          `${slides[currentSlide].alt}, ${dictionary.gallery.count
            .replace("{index}", (currentSlide + 1).toString())
            .replace("{overall}", slides.length.toString())}`
        }
        defaultControlsConfig={{
          nextButtonText: dictionary.gallery.next,
          prevButtonText: dictionary.gallery.prev,
        }}
        // @ts-ignore: recent update nuka-carousel issue
        frameAriaLabel={dictionary.gallery.title}
        wrapAround
        aria-label={dictionary.gallery.title}
        renderCenterLeftControls={({ previousSlide }) => (
          <SlideButton
            onClick={previousSlide}
            aria-label={dictionary.gallery.prev}
          >
            <GrPrevious />
          </SlideButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SlideButton onClick={nextSlide} aria-label={dictionary.gallery.next}>
            <GrNext />
          </SlideButton>
        )}
        renderBottomCenterControls={() => null}
      >
        {slides.map(({ alt, src }: SlideInterface, i: number) => (
          <Slide
            alt={alt}
            src={src}
            key={i}
            width={1724}
            height={1098}
            layout="responsive"
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Gallery;
