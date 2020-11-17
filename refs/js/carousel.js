const carouselModule = (() => {
  return {
    configure: (slidePerView) => {
      const mySwiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: slidePerView,
        spaceBetween: 10,
        speed: 1000,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
    },
  };
})();
