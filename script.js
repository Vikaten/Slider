"use strict";
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const sliderLine = document.querySelector('#slider-line');
const slider = document.querySelector('#slider');
const img = document.querySelectorAll('.img');
const images = document.querySelectorAll('#slider #slider-line .img');
let setright = 0;
let width = 0;
let counter = 0;
if (next != null) {
    next.addEventListener('click', function () {
        if (next != null) {
            counter++;
            if (counter >= images.length) {
                counter = 0;
            }
            move();
        }
    });
}
if (prev != null) {
    prev.addEventListener('click', function () {
        if (prev != null) {
            counter--;
            if (counter < 0) {
                counter = images.length - 1;
            }
            move();
        }
    });
}
function move() {
    if (sliderLine != null) {
        sliderLine.style.transform = 'translate(-' + counter * width + 'px)';
    }
}
const imgArray = Array.from(img);
const numbersArray = Array.from({ length: imgArray.length }, (_, index) => index);
setInterval(() => {
    for (let i = 0; i < imgArray.length; i++) {
        let tmp = imgArray[i];
        let rnd = Math.floor(Math.random() * (i + 1));
        imgArray[i] = imgArray[rnd];
        imgArray[rnd] = tmp;
    }
    imgArray.forEach((imgElement, index) => {
        if (imgElement instanceof HTMLImageElement) {
            imgElement.style.order = index.toString();
        }
    });
}, 2000);
function init() {
    console.log('resize');
    if (slider != null) {
        width = slider.offsetWidth;
    }
    if (sliderLine != null) {
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            if (item instanceof HTMLImageElement) {
                item.style.width = width + 'px';
            }
        });
    }
    move();
}
init();
window.addEventListener('resize', init);
