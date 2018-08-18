// JS for height of main nav
const navHeight = document.querySelector('#nav-container').offsetHeight;
const targetNavBar = document.querySelector('nav');
targetNavBar.style.height = navHeight + 'px';

// JS For Reveal JS
var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: null
};

var slideLeft = {
  distance: '150%',
  origin: 'left',
  opacity: null
}

//Scroll Reveal functions
ScrollReveal().reveal('.main-title', {duration: 1000, delay: 250});
ScrollReveal().reveal('.main-subtitle', {duration: 1000, delay: 1000});

ScrollReveal().reveal('#about', {duration: 500});
ScrollReveal().reveal('.about-left-side', slideLeft, {duration: 500, delay: 250});
ScrollReveal().reveal('.about-right-side', slideLeft, {duration: 500, delay: 250});

ScrollReveal().reveal('#portfolio', {duration: 500});
ScrollReveal().reveal('.portfolio-title', {duration: 750, delay: 250});
ScrollReveal().reveal('.portfolio-desc', {duration: 750, delay: 250});
ScrollReveal().reveal('.portfolio-card', slideUp, {duration: 750, delay: 500});

ScrollReveal().reveal('#skills', {duration: 500});
ScrollReveal().reveal('.skills-title', {duration: 750, delay: 250});
ScrollReveal().reveal('.skills-desc', {duration: 750, delay: 250});
ScrollReveal().reveal('.skill', slideLeft, {duration: 750, delay: 1000});

//Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');

//Adding active class based on active position
const mainSection = document.querySelector('#header');
const aboutSection = document.querySelector('#about');
const portfolioSection = document.querySelector('#portfolio');
const skillsSection = document.querySelector('#skills');

const aboutSectionOffset = aboutSection.offsetHeight - 100;
const portfolioSectionOffset = portfolioSection.offsetHeight - 100;
const skillsSectionOffset = skillsSection.offsetHeight - 100;

const mainSectionBtn = document.querySelector('.home-btn');
const aboutSectionBtn = document.querySelector('.about-btn');
const portfolioSectionBtn = document.querySelector('.portfolio-btn');
const skillsSectionBtn = document.querySelector('.skills-btn');

window.onscroll = function() {
  console.log(window.pageYOffset);
  if(window.pageYOffset < aboutSection.offsetTop) {
    mainSectionBtn.classList.add('active');
    aboutSectionBtn.classList.remove('active');
    portfolioSectionBtn.classList.remove('active');
    skillsSectionBtn.classList.remove('active');
  } else if(window.pageYOffset >= aboutSection.offsetTop && window.pageYOffset < portfolioSection.offsetTop) {
    aboutSectionBtn.classList.add('active');
    mainSectionBtn.classList.remove('active');
    portfolioSectionBtn.classList.remove('active');
    skillsSectionBtn.classList.remove('active');
  } else if(window.pageYOffset >= portfolioSection.offsetTop && window.pageYOffset < skillsSection.offsetTop) {
    aboutSectionBtn.classList.remove('active');
    mainSectionBtn.classList.remove('active');
    portfolioSectionBtn.classList.add('active');
    skillsSectionBtn.classList.remove('active');
  } else if(window.pageYOffset >= skillsSection.offsetTop) {
    aboutSectionBtn.classList.remove('active');
    mainSectionBtn.classList.remove('active');
    portfolioSectionBtn.classList.remove('active');
    skillsSectionBtn.classList.add('active');
  }
}

// Toggling menu
const toggleButton = document.querySelector('.toggle');
const hiddenMenu = document.querySelector('.menu-items');
const hiddenMenuItems = Array.from(document.querySelectorAll('.m-menu-item'));
//const hiddenMenuItemsArray = Array.from(hiddenMenuItems)
let menuHidden = true;

const toggleMobileMenu = () => {
  const cssString = 'display: block; opacity: 1; transform: scale(1, 1); transition: all 0.4s;';
  const cssStringHide = 'display: none; opacity: 0; transform: scale(0, -1);';
  if(menuHidden) {
    menuHidden = false;
    hiddenMenu.style.cssText = cssString;
  } else {
    menuHidden = true;
    hiddenMenu.style.cssText = cssStringHide;
  }
}

toggleButton.addEventListener('click', function(e) {
  e.preventDefault();
  toggleMobileMenu();
});

// Toggle function for the items
hiddenMenuItems.forEach(function(element) {
  element.addEventListener('click', function() {
    toggleMobileMenu();
  })
});

