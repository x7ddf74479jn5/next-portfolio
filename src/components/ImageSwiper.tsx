import Link from "next/link";
import * as React from "react";
// import {Swiper} as S  from "swiper/react"
import Swiper from "react-id-swiper";

// import "swiper/swiper-bundle.min.scss";
// import 'swiper/swiper.scss';
// import styles from "src/styles/swiper-bundle.module.css";

type sample = {
  img: {
    src: string;
    alt: string;
  };
  href: string;
  title: string;
  description: string;
};

type SwiperProps = {
  samples: sample[];
};

// type swiperProps = {
//   images: image[];
//   pagination: {
//     el: string;
//     type: string;
//     clickable: boolean;
//     dynamicBullets: boolean;
//   };
//   navigation: {
//     nextEl: string;
//     prevEl: string;
//   };
//   loop: boolean;
//   spaceBetween: number;
// };

export const ImageSwiper: React.FC<SwiperProps> = (props): JSX.Element => {
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
    // loop: true,
    // spaceBetween: 30,

    loop: true,
    // slidesPerView: slidePerView,
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

  // const s = (
  //   <Swiper {...{params}}
  //   ></Swiper>
  // )

  return (
    // <Swiper {...params}>
    //   {images.map((image, index) => (
    //     <p className="p-media__thumb" key={index}>
    //       <img src={image.src} alt={image.alt} />
    //     </p>
    //   ))}
    // </Swiper>

    <Swiper
      pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, dynamicBullets: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
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
      // breakpoints={{
      //   1023: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //     autoplay: {
      //       delay: 3000,
      //     },
      //   },
      // }}
    >
      {props.samples.map((sample, index) => {
        return (
          <div key={index}>
            <article key={index} className="p-grid__list-item swiper-slide">
              <Link href={sample.href}>
                <a className="u-text__line-none" target="_self">
                  <h3>{sample.title}</h3>
                  <div className="p-media__thumb" key={index}>
                    {/* <Image layout="fill" src={sample.imgSrc} alt={sample.imgAlt} /> */}
                    <img src={sample.imgSrc} alt={sample.imgAlt} />
                  </div>
                  <p>{sample.description}</p>
                </a>
              </Link>
            </article>
          </div>
        );
      })}
    </Swiper>
  );
};
// const mySwiper = new Swiper(".swiper-container", {
//     loop: true,
//     slidesPerView: slidePerView,
//     spaceBetween: 10,
//     speed: 1000,
//     centeredSlides: true,
//     autoplay: {
//       delay: 5000,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       1023: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         autoplay: {
//           delay: 3000,
//         },
//       },
//     },
//   });
// },
// };
// export default withRouter(ImageSwiper)
