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

  let swiper = new Swiper(".review-slider", {
    loop: true,
    autoplay: true,
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Get the header element
  const header = document.querySelector("header");
  const wrapper = document.querySelector(".wrapper");

  var headerHeight = header.offsetHeight;
  wrapper.style.marginTop = headerHeight + "px";
});
