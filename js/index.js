/*========GLOBAL VARIABLES========*/

/*========FUNCTIONS========*/

/* HEADER ARROW ANIMATION */

function arrowAnimation() {
  const squares = document.querySelectorAll(".square");
  const arrow = document.querySelector(".arrow");

  let timerArrow = setInterval(() => {
    squares.forEach((square) => {
      square.classList.toggle("xyz-in");
      square.classList.toggle("xyz-out");
    });
    arrow.classList.toggle("xyz-in");
    arrow.classList.toggle("xyz-out");
  }, 2000);

  setTimeout(() => {
    clearInterval(timerArrow);
  }, 8000);
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
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("html").style.overflowY = "hidden";
    return false;
  } else if (validateEmail(formEmail.value) == false) {
    contactParagraph.innerHTML = "Insert a valid email";
    contactButton.innerHTML = "Close";
    contactModal.classList.remove("modal-hide");
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("html").style.overflowY = "hidden";
    return false;
  } else if (formTextarea.value == "") {
    contactParagraph.innerHTML = "Don't forget to write your message";
    contactButton.innerHTML = "Close";
    contactModal.classList.remove("modal-hide");
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("html").style.overflowY = "hidden";
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
  document.querySelector("body").style.overflowY = "visible";
  document.querySelector("html").style.overflowY = "visible";
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

/* GO TOP */
document.querySelector("#topArrow").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* TOP ARROW VISIBILITY TOGGLE */
window.addEventListener("scroll", () => {
  const topArrow = document.querySelector("#topArrow");
  if (window.scrollY >= 400) {
    topArrow.classList.add("top-arrow-show");
  } else if (topArrow.classList.contains("top-arrow-show") && window.scrollY < 400) {
    topArrow.classList.remove("top-arrow-show");
  }
});

// /* HEIGTH CALCULATOR */
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY + "px");
// });

/* TOP ARROW TEXT COLOR SHIFT */
window.addEventListener("scroll", () => {
  const outerText = document.querySelector(".outer-text");
  const sectionWorks = document.querySelector("#works");
  const sectionAbout = document.querySelector("#about");
  const sectionContact = document.querySelector("#contact");
  const footer = document.querySelector("footer");
  let windowTopArrow = window.scrollY + document.querySelector(".outer-text").offsetParent.offsetParent.offsetTop;

  if (windowTopArrow >= sectionWorks.offsetTop && windowTopArrow < sectionWorks.offsetTop + sectionWorks.offsetHeight) {
    outerText.style.color = "#333";
  }
  if (windowTopArrow >= sectionAbout.offsetTop && windowTopArrow < sectionAbout.offsetTop + sectionAbout.offsetHeight) {
    outerText.style.color = "#f2f2f2";
  }
  if (windowTopArrow >= sectionContact.offsetTop && windowTopArrow < sectionContact.offsetTop + sectionContact.offsetHeight) {
    outerText.style.color = "#333";
  }
  if (windowTopArrow >= footer.offsetTop) {
    outerText.style.color = "#f2f2f2";
  }
});

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
    900: {
      slidesPerView: 2,
      spaceBetween: 10,
      // centeredSlides: true,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
      // centeredSlides: true,
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
