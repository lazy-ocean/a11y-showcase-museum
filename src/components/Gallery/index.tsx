import React, { useContext } from "react";
import Carousel from "nuka-carousel";
import { Slide, SlideButton } from "./Gallery.styled";
import { LanguageContext } from "../../utils/LanguageContext";
import { GrNext, GrPrevious } from "react-icons/gr";
import heroBanner1 from "../../../public/hero-banner1.jpeg";
import heroBanner2 from "../../../public/hero-banner2.jpeg";
import heroBanner3 from "../../../public/hero-banner3.jpeg";

interface SlideInterface {
  alt: string;
  src: string;
}

const Gallery = () => {
  const { dictionary } = useContext(LanguageContext);

  const slides: SlideInterface[] = [
    {
      alt: dictionary.gallery.fridays,
      src: heroBanner1.src,
    },
    {
      alt: dictionary.gallery.mummies,
      src: heroBanner2.src,
    },
    {
      alt: dictionary.gallery.egypt,
      src: heroBanner3.src,
    },
  ];
  return (
    <section id="gallery">
      <h1 className="visually-hidden">{dictionary.gallery.title}</h1>
      <Carousel
        enableKeyboardControls
        renderAnnounceSlideMessage={({ currentSlide }) =>
          `${slides[currentSlide].alt}`
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
          <Slide alt={alt} src={src} key={i} />
        ))}
      </Carousel>
    </section>
  );
};

export default Gallery;
