import * as React from "react";
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

type Sample = {
  img: {
    src: string;
    alt: string;
  };
  href: string;
  title: string;
  description: string;
};

type SwiperProps = {
  samples: Sample[];
};

export const SampleSwiper: React.FC<SwiperProps> = ({ samples }) => {
  const [params] = React.useState({
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    spaceBetween: 10,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1023: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 3000,
        },
      },
    },
  });

  const [mySwiper, setMySwiper] = React.useState<SwiperCore | null>(null);

  React.useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoplay: {
            delay: 5000,
          },
        },
      },
    });
    setMySwiper(mySwiper);
  }, []);

  // React.useEffect(() => {
  //   　mySwiper.update();
  // }, [samples]);

  const contents = samples.map((sample, index) => (
    <article className="p-grid__list-item swiper-slide" key={index}>
      <Link href={sample.href}>
        <a className="u-text__line-none" target="_self" key={index}>
          <h3>{sample.title}</h3>
          <div className="p-media__thumb" key={index}>
            <Image layout="fill" src={sample.img.src} alt={sample.img.alt} key={index} />
            {/* <img src={sample.img.src} alt={sample.img.alt} 　key={index} /> */}
          </div>
          <p>{sample.description}</p>
        </a>
      </Link>
    </article>
  ));

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">{contents}</div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};