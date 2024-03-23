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
const numbersArray = Array.from({ length: img.length }, (_, index) => index);
console.log(numbersArray);
setInterval(() => {
    for (let i = 0; i < numbersArray.length; i++) {
        let rel = img[i].src;
        let randomIndex = Math.floor(Math.random() * numbersArray.length);
        img[i].src = img[randomIndex].src;
        img[i].src = rel;
        // let indexRandom = numbersArray.indexOf(randomIndex);
        // numbersArray.splice(indexRandom, 1)
    }
}, 3000);
