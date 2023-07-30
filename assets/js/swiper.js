const swiperRecent = new Swiper('.swiper.recent', {
      spaceBetween: 24,
      slidesPerView : '3',
      loop : true,
      loopAdditionalSlides : 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        720: {
          slidesPerView: 2,  //브라우저가 720보다 클 때
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,  //브라우저가 1024보다 클 때
          spaceBetween: 18,
        },
      },
    });

    const swiperRecentStopBtn = document.querySelector('.btn-stop.recent');
    swiperRecentStopBtn.addEventListener('click', function(){
      swiperRecent.autoplay.stop();
    });




    const swiperPopular = new Swiper('.swiper.popular', {
      spaceBetween: 24,
      slidesPerView : '3',
      loop : true,
      loopAdditionalSlides : 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        720: {
          slidesPerView: 1,  //브라우저가 720보다 클 때
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2,  //브라우저가 1024보다 클 때
          spaceBetween: 18,
        },
      },
    });

    const swiperPopularStopBtn = document.querySelector('.btn-stop.popular');
    swiperPopularStopBtn.addEventListener('click', function(){
      swiperPopular.autoplay.stop();
    });

    const swiperAdvertising = new Swiper('.swiper.advertising', {
      slidesPerView : '1',
      loop : true,
      loopAdditionalSlides : 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      observer: true,
      observeParents: true,
    });

    const swiperAdvertisingStopBtn = document.querySelector('.btn-stop.advertising');
    swiperAdvertisingStopBtn.addEventListener('click', function(){
      swiperAdvertising.autoplay.stop();
    });

    const swiperBanner = new Swiper('.swiper.banner', {
      slidesPerView : '1',
      loop : true,
      loopAdditionalSlides : 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      observer: true,
      observeParents: true,
    });