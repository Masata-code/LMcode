// メインビュー
let swipeOption = {
  loop: true,
  slidesPerView: 1,
  loopedSlides: 3,
  effect: "fade",
  simulateTouch: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
};
new Swiper(".js-mv", swipeOption);

// 制作実績
const swiper = new Swiper(".js-top-work-slide", {
  // スライドメニューの表示方法
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  // スライドのページネーション表示
  pagination: {
    el: ".js-top-work-pagination",
    clickable: true,
  },
});
