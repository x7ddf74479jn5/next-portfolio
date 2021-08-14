import Image from "next/image";
import * as React from "react";
import styles from "src/styles/components/home/SampleCarousel.module.scss";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

import Link from "next/link";
import { useEffect } from "react";
import type { Sample } from "src/contents/samples";

type SwiperProps = {
  samples: Sample[];
};

const SampleCarousel: React.FC<SwiperProps> = ({ samples }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Swiper
      pagination={{ clickable: true }}
      navigation
      loop={true}
      spaceBetween={0}
      speed={1000}
      centeredSlides={true}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoplay: {
            delay: 5000,
          },
        },
      }}
    >
      {samples.map((sample, index) => {
        return (
          <SwiperSlide key={`swiper-${index}`}>
            <article className={styles.gridListItem}>
              <Link href={sample.link}>
                <a className={styles.textLineNone} target="_self">
                  <h3>{sample.title}</h3>
                  <div className={styles.mediaThumb}>
                    <Image loading="eager" layout="fill" src={sample.imgSrc} alt={sample.imgAlt} objectFit="contain" />
                  </div>
                  <p>{sample.description}</p>
                </a>
              </Link>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;
};

export default SampleCarousel;
