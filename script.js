"use strict";
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const slider = document.querySelector('.slider');
const img = document.querySelectorAll('.img');
let setleft = 0;
if (next != null) {
    next.addEventListener('click', function () {
        if (slider != null) {
            setleft -= 620;
            slider.style.left = setleft + 'px';
            if (setleft < -1240) {
                if (slider != null) {
                    slider.style.left = 0 + 'px';
                    setleft = 0;
                }
            }
        }
    });
}
if (prev != null) {
    prev.addEventListener('click', function () {
        if (slider != null) {
            setleft += 620;
            slider.style.left = setleft + 'px';
            if (setleft > 0) {
                if (slider != null) {
                    slider.style.left = -1240 + 'px';
                    setleft = -1240;
                }
            }
        }
    });
}
const imgArray = Array.from(img);
const numbersArray = Array.from({ length: imgArray.length }, (_, index) => index);
setInterval(() => {
    for (let i = numbersArray.length - 1; i > 0; i--) {
        let tmp = imgArray[i];
        let rnd = Math.floor(Math.random() * (i + 1));
        imgArray[i] = imgArray[rnd];
        imgArray[rnd] = tmp;
    }
}, 3000);
