import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { LanguageContext } from "../../utils/LanguageContext";
import heroBanner1 from "../../../public/hero-banner1.jpeg";
import heroBanner2 from "../../../public/hero-banner2.jpeg";
import heroBanner3 from "../../../public/hero-banner3.jpeg";

const Gallery = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <>
      <h1 className="visually-hidden">{dictionary.gallery.title}</h1>
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        ariaLabel={dictionary.gallery.gallery}
        labels={{
          leftArrow: dictionary.gallery.prev,
          rightArrow: dictionary.gallery.next,
          item: dictionary.gallery.current,
        }}
      >
        <img
          alt="Пятницы в Пушкинском, серия мероприятий с января по апрель"
          src={heroBanner1.src}
        />
        <img
          alt="Мумии Древнего Египта, экспозиция в Главном здании Музея, с 1 марта по 31 мая"
          src={heroBanner2.src}
        />
        <img
          alt="Бегство в Египет, экспозиция в Главном здании Музея, с 1 марта по 31 мая"
          src={heroBanner3.src}
        />
      </Carousel>
    </>
  );
};

export default Gallery;
