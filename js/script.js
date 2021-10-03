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
  }, 5000);

  function dotArrow() {
    setTimeout(() => {
      sq1.style.opacity = "1";
    }, 1500);

    setTimeout(() => {
      sq2.style.opacity = "1";
    }, 1600);

    setTimeout(() => {
      arrow.style.top = "10%";
      arrow.style.opacity = "0.1";
    }, 1400);

    setTimeout(() => {
      arrow.style.top = "15%";
      arrow.style.opacity = "0.2";
    }, 1450);

    setTimeout(() => {
      arrow.style.top = "20%";
      arrow.style.opacity = "0.3";
    }, 1500);

    setTimeout(() => {
      arrow.style.top = "25%";
      arrow.style.opacity = "0.4";
    }, 1550);

    setTimeout(() => {
      arrow.style.top = "30%";
      arrow.style.opacity = "0.5";
    }, 1600);

    setTimeout(() => {
      arrow.style.top = "35%";
      arrow.style.opacity = "0.6";
    }, 1650);

    setTimeout(() => {
      arrow.style.top = "40%";
      arrow.style.opacity = "0.7";
    }, 1700);

    setTimeout(() => {
      arrow.style.top = "45%";
      arrow.style.opacity = "0.8";
    }, 1750);

    setTimeout(() => {
      arrow.style.top = "50%";
      arrow.style.opacity = "1";
    }, 1800);
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

/*========EXTERNALS========*/

/* SWIPER SLIDER */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "cube",

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

/* LOADER */
$(document).ready(function () {
  $("#navbar-responsive").addClass("xyz-in");
  $("#hero").addClass("xyz-in");
});