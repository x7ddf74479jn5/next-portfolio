// import 'src/styles/swiper.bundle.scss';
import Image from "next/image";
import * as React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

export const SapmleSwiper: React.FC<SwiperProps> = ({ samples }) => {
  // const [params,setParams] = React.useState<SwiperCore | null>(null)

  // React.useEffect(()=>{
  // const params={
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   // loop: true,
  //   // spaceBetween: 30,

  //   loop: true,
  //   // slidesPerView: slidePerView,
  //   spaceBetween: 10,
  //   speed: 1000,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 5000,
  //   },
  //   breakpoints: {
  //     1023: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       autoplay: {
  //         delay: 3000,
  //       },
  //     },
  //   },
  // }
  // setParams(params)
  // },[])

  // const [params] = React.useState({
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   // loop: true,
  //   // spaceBetween: 30,

  //   loop: true,
  //   // slidesPerView: slidePerView,
  //   spaceBetween: 10,
  //   speed: 1000,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 5000,
  //   },
  //   breakpoints: {
  //     1023: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       autoplay: {
  //         delay: 3000,
  //       },
  //     },
  //   },
  // });

  // const samples2 = samples.map((sample, index) => {
  //   return { ...sample, id: index };
  // });

  // const contents = samples2.map((sample) => (
  //   <SwiperSlide key={sample.id}>
  //     <article className="p-grid__list-item">
  //       <a className="u-text__line-none" href={sample.href} target="_self">
  //         <h3>{sample.title}</h3>
  //         <div className="p-media__thumb">
  //           <Image layout="fill" src={sample.img.src} alt={sample.img.alt} key={sample.id} />
  //           {/* <img src={sample.img.src} alt={sample.img.alt} key={index} /> */}
  //         </div>
  //         <p>{sample.description}</p>
  //       </a>
  //     </article>
  //   </SwiperSlide>
  // ));

  const contents = samples.map((sample, index) => (
    <SwiperSlide key={`swiper-${index}`}>
      <article className="p-grid__list-item">
        <a className="u-text__line-none" href={sample.href} target="_self">
          <h3>{sample.title}</h3>
          <div className="p-media__thumb">
            <Image loading={"eager"} layout="fill" src={sample.img.src} alt={sample.img.alt} />
            {/* <img src={sample.img.src} alt={sample.img.alt} key={index} /> */}
          </div>
          <p>{sample.description}</p>
        </a>
      </article>
    </SwiperSlide>
  ));

  // const contents = samples.map((sample, index) => (
  //   <SwiperSlide key={`swiper-${index}`}>
  //     <article className="p-grid__list-item" key={index}>
  //       <a className="u-text__line-none" href={sample.href} target="_self" key={index}>
  //         <h3>{sample.title}</h3>
  //         <div className="p-media__thumb" key={index}>
  //           <Image layout="fill" src={sample.img.src} alt={sample.img.alt} key={index} />
  //           {/* <img src={sample.img.src} alt={sample.img.alt} key={index} /> */}
  //         </div>
  //         <p>{sample.description}</p>
  //       </a>
  //     </article>
  //   </SwiperSlide>
  // ));

  // const contents = samples.map((sample, index) => (
  //   <article key={index} className="p-grid__list-item swiper-slide">
  //     <a className="u-text__line-none" href={sample.href} target="_self">
  //       <h3>{sample.title}</h3>
  //       <p className="p-media__thumb" key={index}>
  //         <img src={sample.img.src} alt={sample.img.alt} />
  //       </p>
  //       <p>{sample.description}</p>
  //     </a>
  //   </article>
  // ))

  return (
    <Swiper
      pagination={{ clickable: true }}
      // ={{ el: ".swiper-pagination", type: "bullets", clickable: true, dynamicBullets: true }}
      navigation
      // ={{
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // }}
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
      {contents}
      {/* <SwiperSlide>{contents}</SwiperSlide> */}
    </Swiper>
  );
};
