var swiper = new Swiper(".mySwiper-icon", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop : true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      300:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });