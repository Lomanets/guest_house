const rooms = document.querySelectorAll('.room');
const buttonSlider = document.querySelectorAll('.rooms-description__button-item');
let countSlider = 0;


rooms.forEach((item) => {
    item.classList.add('none');
});

rooms[0].classList.remove('none');


buttonSlider.forEach((item) => {
    item.addEventListener('click', (i) => {
        if (item.classList.contains('buttom-disabled')) return;

        rooms[countSlider].classList.add('none');

        if (item.classList.contains('button-left')) countSlider -= 1;
        else countSlider += 1;

        rooms[countSlider].classList.remove('none');
    });
});


const imageSlider = ['slider0.webp', 'slider1.webp', 'slider2.webp'];
const imageCity = document.querySelector('.city-image');
let countSliderCity = 0;


let intervalSlider = setInterval(() => {
    imageCity.src = `./assets/images/slider/${imageSlider[countSliderCity]}`;
    countSliderCity += 1;
    if(countSliderCity >= imageSlider.length) {
        countSliderCity = 0;
    }
}, 6000);