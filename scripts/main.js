const hamburger = document.querySelector('.hamburger-icon');
const hamburgerOne = document.querySelector('.childOne');
const hamburgerTwo = document.querySelector('.childTwo');
const hamburgerThree = document.querySelector('.childThree');
const navBar = document.querySelector('.header-container');
const navbarLinks = document.querySelectorAll('.anchor-navbar');

hamburger.addEventListener('click', () => {
  hamburgerOne.classList.toggle('active');
  hamburgerTwo.classList.toggle('active');
  hamburgerThree.classList.toggle('active');
  navBar.classList.toggle('active');
});

navbarLinks.forEach((userItem) => {
  userItem.addEventListener('click', () => {
    hamburgerOne.classList.toggle('active');
    hamburgerTwo.classList.toggle('active');
    hamburgerThree.classList.toggle('active');
    navBar.classList.toggle('active');
  });
});
