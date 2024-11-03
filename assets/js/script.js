'use strict'



/**
 * event listener for multiple element
 */ 
 
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}




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

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



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