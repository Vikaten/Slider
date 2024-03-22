const next: HTMLButtonElement | null = document.querySelector('#next');
const prev: HTMLButtonElement | null = document.querySelector('#prev');
const slider: HTMLElement | null = document.querySelector('.slider');
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