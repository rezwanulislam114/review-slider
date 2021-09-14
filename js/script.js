const slide = document.getElementById('slide');
let x = 0;
document.getElementById('up-arrow').addEventListener('click', () => {
    if (x > -900) {
        x = x - 300;
        slide.style.top = x + 'px';
    }
})
document.getElementById('down-arrow').addEventListener('click', () => {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + 'px';
    }
})