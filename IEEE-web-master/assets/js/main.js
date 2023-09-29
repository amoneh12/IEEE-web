document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    /* ====== Preloader ======*/
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      });
    }
     /* ======  line preloading ====== */
     function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  });
   /* ====== Scroll top button ======= */
   const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', checkHeight)
  function checkHeight(){
    if(window.scrollY > 50) {
      scrollTop.style.opacity =  .8;
    } else {
      scrollTop.style.opacity = 0;
    }
  }
scrollTop.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
})
 