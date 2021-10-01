/*========GLOBAL VARIABLES========*/

/*========FUNCTIONS========*/

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});



const squares = document.querySelectorAll(".square");

setInterval(() => {
  squares.forEach((square) => {
    square.classList.toggle("xyz-in");
    square.classList.toggle("xyz-out");
  });
}, 1200);