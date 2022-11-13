
const slider = document.querySelector('.slider');
const next  = document.getElementById('next');
const prev  = document.getElementById('prev');
let slides = [...document.querySelectorAll('.slide')];


let width = 100;
let index = 0;

slider.insertAdjacentHTML('afterbegin', slides[slides.length - 1].outerHTML);
slider.insertAdjacentHTML('beforeend', slides[0].outerHTML);
slider.style.transform = `translateX(-${width}%)`;

function Slider() {
    next.addEventListener('click', () => {
        index++;
        transition("yes")
        SlideMove(index);
        if (index > slides.length - 1) {
          setTimeout(() => {
            index = 0;
            SlideMove();
            transition();
          }, 500);
        } else {
        }
      });
      
      prev.addEventListener('click', () => {
        index--;
        transition("yes")
        SlideMove(index);
        if (index < 0) {
          setTimeout(() => {
            index = slides.length - 1;
            SlideMove(index);
            transition()
          }, 500);
        }
      });

      function SlideMove(i) {
        if (i) {
          slider.style.transform = `translateX(-${width * (i + 1)}%)`;
        } else {
          slider.style.transform = `translateX(-${width}%)`;
        }
      }
      
      function transition(yes) {
        if (yes) {
          slider.style.transition = `transform 0.5s ease-in-out`;
        } else {
          slider.style.transition = 'none';
        }
      }
      
      
}


export default Slider;