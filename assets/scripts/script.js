const rooms = document.querySelectorAll('.room');
const buttonSlider = document.querySelectorAll('.rooms-description__button-item');
let countSlider = 0


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
