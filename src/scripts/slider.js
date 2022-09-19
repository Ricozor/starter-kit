import Flickity from 'flickity'
const SliderScript = () => {
    const sliders = document.querySelectorAll('.Slider-list');
    sliders.forEach((slider) => {
        const flkty = new Flickity( slider, {
            prevNextButtons: false,
            cellAlign: 'center',
            contain: true
        });
    });
}

export {
    SliderScript,
}
