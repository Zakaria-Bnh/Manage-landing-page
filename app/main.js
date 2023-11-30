const NavMenu = document.querySelector(".nav-menu");
const IconClose = document.querySelector(".icon-close");
const IconHamburger = document.querySelector(".icon-hamburger");
const PrimaryNavList = document.querySelector(".primary-nav-list");
const Overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

NavMenu.addEventListener("click", () => {
  IconClose.toggleAttribute("data-visible");
  IconHamburger.toggleAttribute("data-visible");
  PrimaryNavList.toggleAttribute("data-visible");
  Overlay.toggleAttribute("data-overlay");
  body.toggleAttribute("data-scroll");
});

// slider functionality
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: 50,
    arrows: true,
    prevArrow : '<button type="button" class="slick-prev"><</button>',
    nextArrow : '<button type="button" class="slick-next">></button>',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },

    ],
    // Add more settings as needed
  });
});
