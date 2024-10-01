import { InfiniteSlider } from './InfiniteSlider.js'

export default function InitAmenitySlider() {
    const slider = new InfiniteSlider('[data-amenity-slider-wrapper]')
    // Translate first slide to center (since last was inserted at the start)
    slider.translateSlideToCenter()
    slider.play()
}
