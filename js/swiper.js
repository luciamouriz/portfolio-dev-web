let swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  spaceBetween: 0,
  hashNavigation: true,
  mousewheel: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="swiper-pagination-bullet"></span>`;
    },
  },

})

//Menu de navegacion
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {

    let atr = item.getAttribute("data-index")
    if (atr == 1) swiper.slideTo(0)
    if (atr == 2) swiper.slideTo(1)
    if (atr == 3) swiper.slideTo(2)
    if (atr == 4) swiper.slideTo(3)
    if (atr == 5) swiper.slideTo(4)

  }

  )
});

document.getElementById("logo").addEventListener("click", () => { swiper.slideTo(0) })

let swiper2 = new Swiper('.swiper-projects', {
  slidesPerView: 0.5,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const saludo = document.getElementById("saludo");
const line = document.querySelectorAll(".line");

swiper.on("transitionEnd", function (e) {

  let slideIndex = swiper.realIndex;

  if (slideIndex === 1) {
    saludo.classList.add('p-animation');
    line[0].classList.add("line-animation")
  } else {
    saludo.classList.remove('p-animation');
    line[0].classList.remove("line-animation")
  }

  slideIndex === 2 ? line[1].classList.add("line-animation") : line[1].classList.remove("line-animation");
  slideIndex === 3 ? line[2].classList.add("line-animation") : line[2].classList.remove("line-animation");
  slideIndex === 4 ? line[3].classList.add("line-animation") : line[3].classList.remove("line-animation");


});



