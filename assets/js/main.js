// =================Scroll===================
const scroll_ = document.querySelector('.scroll-to-top');
const mainBox = document.querySelector('.main-box');
const editBox = document.querySelector('.logo-box');
const edit = document.querySelector('.logo');
const editNav = document.querySelectorAll('.link-nav');
const list = document.querySelector('.list');
const menu = document.querySelector('.menu-aside');
const logo_Scroll = document.querySelector('.logo-line');
window.onscroll = function(){

  if(this.scrollY >= 150){
    mainBox.classList.add('fixed-box');
    editBox.classList.add('edit-box');
    edit.classList.add('edit');
    list.classList.add('edit-list');
    editNav.forEach(nav => nav.classList.add('black-color'));
    scroll_.classList.add('down');
    menu.classList.add('menu-center');
    logo_Scroll.classList.add('logo-down');
  
  }else{
    mainBox.classList.remove('fixed-box');
    list.classList.remove('edit-list');
    editBox.classList.remove('edit-box');
    editNav.forEach(nav => nav.classList.remove('black-color'));
    edit.classList.remove('edit');
    scroll_.classList.remove('down');
    menu.classList.remove('menu-center');
    logo_Scroll.classList.remove('logo-down');

  }
  scroll.onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  };
  
} 
// =================Scroll===================
// =================Sidebar===================
function hide_Sidebar() {
  const hide = document.querySelector('.list-aside');
  hide.style.display = 'none';
  
}
function show_Sidebar() {
  const show = document.querySelector('.list-aside');
  show.style.display = 'flex';
  
}
// =================Sidebar===================

// =================Swiper===================
var swiperOne = new Swiper(".size-img", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
   breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: { 
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  // =================Swiper===================
  