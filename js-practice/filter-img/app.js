const container = document.querySelector('.container');
const imgContainer = document.querySelector('.img-container');
const img = document.querySelector('img');
const slider = document.querySelector('.slider');

// set filter for original image
img.style.cssText = 'overflow: hidden; filter: grayscale(100%);';

// create new node with image that will before slider and will be colored (filter: unset)
let beforeSlider = img.cloneNode(true);
img.after(beforeSlider);
beforeSlider.style.cssText = 'width: 50%; filter: unset;';

const setFilter = (e) => {
    let xPos = e.layerX;
    let size = container.offsetWidth;

    beforeSlider.style.width = xPos + 'px';
    slider.style.left = xPos + 'px';

    if (xPos < 30) {
        beforeSlider.style.width = 0;
        slider.style.left = 0;
    }

    if (xPos >= size - 30) {
        beforeSlider.style.width = size + 'px';
        slider.style.left = size + 'px'
    }

}

container.addEventListener('mousemove', setFilter);