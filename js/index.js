/*========GLOBAL VARIABLES========*/

/*========FUNCTIONS========*/
arrowAnimation();
myAge();
copyrigthYear();

/* HEADER ARROW ANIMATION */
function arrowAnimation() {
  const svg = document.querySelector(".svg");
  const sq1 = document.querySelector(".square-1");
  const sq2 = document.querySelector(".square-2");
  const arrow = document.querySelector(".arrow");

  setTimeout(() => {
    svg.style.opacity = "1";
  }, 1000);

  let timerArrow = setInterval(() => {
    dotArrow();
  }, 1000);

  setTimeout(() => {
    clearInterval(timerArrow);
  }, 7500);

  function dotArrow() {
    sq1.classList.toggle("svg-square-animation");
    sq2.classList.toggle("svg-square-animation");
    arrow.classList.toggle("svg-arrow-animation");
  }
}

/* ON SCROLL RESPONSIVE NAVBAR ICON COLOR SHIFT */
window.addEventListener("scroll", () => {
  let pageYOffset = window.pageYOffset;
  const works = document.getElementById("works");
  const worksTop = works.offsetTop - 10;
  const about = document.getElementById("about");
  const aboutTop = about.offsetTop - 10;
  const contact = document.getElementById("contact");
  const contactTop = contact.offsetTop - 10;
  const bodyNav = document.getElementById("bodyNav");
  const worksNav = document.getElementById("worksNav");
  const aboutNav = document.getElementById("aboutNav");
  const contactNav = document.getElementById("contactNav");

  if (pageYOffset >= worksTop) {
    bodyNav.classList.remove("span-icon");
    worksNav.classList.add("span-icon");
  } else {
    worksNav.classList.remove("span-icon");
    bodyNav.classList.add("span-icon");
  }
  if (pageYOffset >= aboutTop) {
    worksNav.classList.remove("span-icon");
    aboutNav.classList.add("span-icon");
  } else {
    aboutNav.classList.remove("span-icon");
  }
  if (pageYOffset >= contactTop) {
    aboutNav.classList.remove("span-icon");
    contactNav.classList.add("span-icon");
  } else {
    contactNav.classList.remove("span-icon");
  }
});

/* MY AGE */
function myAge() {
  var dob = new Date("12/12/1988");
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);
  document.querySelector("#myAge").innerHTML = age;
}

/* COPYRIGHT */
function copyrigthYear() {
  document.querySelector("#copyright").appendChild(document.createTextNode(new Date().getFullYear()));
}

/* LOADER */
$(document).ready(function () {
  $("#navbar-responsive").addClass("xyz-in");
  $("#hero").addClass("xyz-in");
});

/* MAIL FORM */
function validateForm() {
  let formName = document.querySelector("#name");
  let formEmail = document.querySelector("#email");
  let formTextarea = document.querySelector("#textarea");

  let contactModal = document.querySelector("#contactModal");
  let contactParagraph = document.querySelector("#contactParagraph");
  let contactButton = document.querySelector("#contactButton");

  if (formName.value == "") {
    contactParagraph.innerHTML = "Insert your name";
    contactButton.innerHTML = "Close";
    contactModal.classList.remove("modal-hide");
    return false;
  } else if (validateEmail(formEmail.value) == false) {
    contactParagraph.innerHTML = "Insert a valid email";
    contactButton.innerHTML = "Close";
    contactModal.classList.remove("modal-hide");
    return false;
  } else if (formTextarea.value == "") {
    contactParagraph.innerHTML = "Don't forget to write your message";
    contactButton.innerHTML = "Close";
    contactModal.classList.remove("modal-hide");
    return false;
  }
}

//Validate email helper function
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

/* Close Modal */
function closeModal() {
  const contactModal = document.querySelector("#contactModal");
  contactModal.classList.add("modal-hide");
}

/* Open/Close about cards */
const acc = document.querySelectorAll(".about-cards-card");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.children[0].classList.toggle("select");
    this.children[1].classList.toggle("show");
    var panel = this.children[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*========EXTERNALS========*/

/* SWIPER SLIDER */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "flip",

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
const swiperDesktop = new Swiper(".swiper-desktop", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "slide",
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

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

/* SMOOTH SCROLL */
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
