const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const headerTitle = document.querySelector(".header-title");
const header = document.querySelector("header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerTitle.classList.toggle("active");
}

// The code below closes the hamburger menu when link is clinked.

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}



window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    header.classList.add('active_nav')
  } else {
    header.classList.remove('active_nav')
  }
  console.log(window.scrollY);
});

// function checkElementLocation() {
//     var $window = $(window);
//     var bottom_of_window = $window.scrollTop() + $window.height();

//     // const project = document.querySelector('.projects')

//     $('.projects').each(function(i) {
//       var $that = $(this);
//       var bottom_of_object = $that.position().top + $that.outerHeight();

//       //if element is in viewport, add the animate class
//       if (bottom_of_window > bottom_of_object) {
//         $(this).addClass('fade-in');
//       }
//     });
//   }
//   // if in viewport, show the animation
//   checkElementLocation();

//   $(window).on('scroll', function() {
//     checkElementLocation();
//   });
