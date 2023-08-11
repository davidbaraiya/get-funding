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

// Get all elements with class 'fileInput'
var fileInputs = document.querySelectorAll(".fileInput");

// Loop through each 'fileInput' element
fileInputs.forEach(function (fileInput) {
  fileInput.addEventListener("change", function () {
    var numFiles = this.files.length;
    var parent = this.closest(".input-file");

    // Remove existing 'ins' elements
    var existingIns = parent.querySelectorAll("ins");
    existingIns.forEach(function (ins) {
      ins.remove();
    });

    // Loop through each selected file and add its name as 'ins' element
    for (var i = 0; i < numFiles; i++) {
      var insElement = document.createElement("ins");
      insElement.textContent = this.files[i].name;
      parent.appendChild(insElement);
    }
  });
});
