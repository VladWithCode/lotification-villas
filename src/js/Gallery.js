import { InfiniteSlider } from "./InfiniteSlider";

export default function InitGallery() {
    // Slider
    const slider = new InfiniteSlider("[data-gallery-slider]", { skipBulletBtns: true })
    slider.translateSlideToCenter()

    let sliderSelect = document.getElementById("gallery-slide-select")
    for (let i = 0; i < slider.totalSlides; i++) {
        let optElem = document.createElement("option")
        Object.assign(optElem, { value: i })
        optElem.textContent = i+1

        sliderSelect.appendChild(optElem)
    }
    sliderSelect.addEventListener("change", e => {
        slider.currentSlide = parseInt(e.target.value)
        slider.animate(slider.animationDuration)
    })

    slider.afterAnimate = function(slider) {
        sliderSelect.value = slider.currentSlide
    }
}
