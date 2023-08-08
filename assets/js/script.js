// Wait for the DOM to load
const header = document.querySelector(".site-header");

document.addEventListener("DOMContentLoaded", function () {
  function onScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll);

  var swiper = new Swiper(".review-slider", {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
});
