"use strict";

/**
 * event listener for multiple element
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * NAVBAR
 * navbar toggle for mobile
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

// Function to toggle the navbar
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

// Add event listener to toggle button and overlay
navTogglers.forEach((toggler) => {
  toggler.addEventListener("click", toggleNavbar);
});

// Add event listener to navbar links to close navbar when clicked
const navLinks = document.querySelectorAll("[data-navbar] a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      toggleNavbar();
    }
  });
});

/**
 * HEADER
 * header active when window scrolls down by 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(
    getComputedStyle(currentSlider).getPropertyValue("--slider-items")
  );
  let totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */

  const slideNext = function() {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  /**
   * slide with [shift + mouse wheel]
   */

  currentSlider.addEventListener("wheel", function (event) {
    if (event.shiftkey && event.deltaY > 0) slideNext();
    if (event.shiftkey && event.deltaY > 0) slidePrev();
  });

  /**
   * RESPONSIVE
   */

  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });

};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}

/**
   * SCROLL REVEAL
   */

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 150
});

ScrollReveal().reveal('h1', { origin: 'top' });
ScrollReveal().reveal('.hero-title, .section-text, .section-title, .section-text', { origin: 'bottom' });
ScrollReveal().reveal('.hero-banner, .btn, .slider, .time, .card-title, .card-text', { origin: 'left' });
ScrollReveal().reveal('.hero-subtitle, .section-subtitle, .card-banner, .bx-right-arrow-alt', { origin: 'right' });