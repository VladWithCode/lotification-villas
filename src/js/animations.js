import { gsap } from 'gsap'

gsap.registerEffect({
    name: 'fadeIn',
    effect: (targets, config) => {
        return gsap.from(
            targets,
            {
                duration: config.duration,
                autoAlpha: 0,
                reversed: config.reversed,
                ease: config.ease,
            }
        )
    },
    defaults: { duration: .6, ease: "power1" }
})

gsap.registerEffect({
    name: 'fadeLeft',
    effect: (targets, config) => {
        return gsap.from(
            targets,
            {
                duration: config.duration,
                x: config.x,
                autoAlpha: 0,
                reversed: config.reversed,
                ease: config.ease,
            }
        )
    },
    defaults: { x: '-100%', duration: .6, ease: "power1" }
})

gsap.registerEffect({
    name: 'fadeRight',
    effect: (targets, config) => {
        console.log(config)
        return gsap.from(
            targets,
            {
                duration: config.duration,
                x: config.x,
                autoAlpha: 0,
                reversed: config.reversed,
                ease: config.ease,
            }
        )
    },
    defaults: { x: '100%', duration: .6, ease: "power1" }
})
