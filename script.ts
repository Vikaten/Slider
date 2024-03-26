const next: HTMLButtonElement | null = document.querySelector('#next');
const prev: HTMLButtonElement | null = document.querySelector('#prev');
const sliderLine: HTMLElement | null = document.querySelector('#slider-line');
const img: NodeListOf<Element> = document.querySelectorAll('.img');
let setright: number = 0;
if (next != null) {
    next.addEventListener('click', function () {
        if (sliderLine != null) {
            setright -= 540;
            sliderLine.style.right = setright + 'px';
            if (setright < 0) {
                if (sliderLine != null) {
                    sliderLine.style.right = 2720 + 'px';
                    setright = 2720;
                }
            }
        }
    });
}

if (prev != null) {
    prev.addEventListener('click', function () {
        if (sliderLine != null) {
            setright += 540;
            sliderLine.style.right = setright + 'px';
            if (setright > 2720) {
                if (sliderLine != null) {
                    sliderLine.style.right = 0 + 'px';
                    setright = 0;
                }
            }
        }
    });
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