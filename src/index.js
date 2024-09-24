import "./index.css";
import { gsap } from 'gsap'
import "./js/AmenitySlider.js"

document.addEventListener('DOMContentLoaded', () => {
    // Hero animations
    let heroBgImg = document.getElementById("hero-bg-img")
    let heroTitle = document.getElementById("hero-title")
    let heroCta = document.getElementById("hero-cta")
    let welcoming = document.getElementById("welcoming")
    let mainTl = gsap.timeline({ ease: "power2.in", duration: 0.4 })

    mainTl.from(heroBgImg, { autoAlpha: 0, y: '5%' })
    mainTl.from(heroTitle, { autoAlpha: 0, y: '-80%' }, "<0.1")
    mainTl.to(heroCta, { opacity:1, y: '0%', ease: 'none' }, "<")
    mainTl.from(welcoming, { opacity: 0, y: '45%' }, ">0.2")
})
