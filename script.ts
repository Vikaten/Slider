const next: HTMLButtonElement | null = document.querySelector('#next');
const prev: HTMLButtonElement | null = document.querySelector('#prev');
const slider: HTMLElement | null = document.querySelector('.slider');
const img: NodeListOf<Element> = document.querySelectorAll('.img');
let setleft: number = 0;
if (next != null) {
    next.addEventListener('click', function() {      
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
    })
}

if (prev != null) {
    prev.addEventListener('click', function() {      
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
    })
}

const numbersArray = Array.from({ length: img.length }, (_, index) => index);
console.log(numbersArray);

setInterval(() => {
    for (let i = 0; i < numbersArray.length; i++) {
        let rel = (img[i] as HTMLImageElement).src;
        let randomIndex = Math.floor(Math.random() * numbersArray.length);
        (img[i] as HTMLImageElement).src = (img[randomIndex] as HTMLImageElement).src;
        (img[i] as HTMLImageElement).src = rel;
    }
}, 3000)