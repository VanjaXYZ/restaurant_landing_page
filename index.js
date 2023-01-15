/* referenced DevelopedByEd's image slider tutorial: https://www.youtube.com/watch?v=KcdBOoK3Pfw */

// SELECTORS
const carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// CREATING CLONES OF FIRST AND LAST SLIDE
const firstImageClone = document.createElement('img');
firstImageClone.setAttribute('src', carouselImages[0].src);
firstImageClone.setAttribute('id', 'firstClone');
carouselSlide.append(firstImageClone);

const lastImageClone = document.createElement('img');
lastImageClone.setAttribute('src', carouselImages[carouselImages.length - 1].src);
lastImageClone.setAttribute('id', 'lastClone');
carouselSlide.prepend(lastImageClone);
carouselImages = document.querySelectorAll('.carousel-slide img');

// tracks which slide we're on
let counter = 1;
// the width of the slide, so we know how many pixels to translate the X
let size = carouselImages[0].clientWidth;
// translate the image to the 'actual' first image 
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id == "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselImages[counter].id == "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// makes slider responsive
window.addEventListener('resize', () => {
          carouselSlide.style.transition = "none";
          size = carouselImages[0].clientWidth;
          carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

/* TODO: 
- add a textbox to the carousel. this should slide along with the image too.
- add dot indicators / arrows 
- timer transition
*/
