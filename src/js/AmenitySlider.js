import { InfiniteSlider } from './InfiniteSlider.js'

export default function InitAmenitySlider() {
    const slider = new InfiniteSlider(
        '[data-amenity-slider-wrapper]',
        {
            skipBulletBtns: true,
            enableAutoAnimate: false,
            useMultiSlideView: true,
            multiSlideCount: 3
        }
    )
    // Translate first slide to center (since last was inserted at the start)
    slider.translateSlideToCenter()
}
