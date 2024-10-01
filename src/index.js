import "./index.css";
import { gsap } from 'gsap'
import InitAmenitySlider from "./js/AmenitySlider.js"
import { InitHeaderObserver, InitNavbar, InitNavbarObserver } from './js/Navbar.js'
import './js/animations.js'
import InitGallery from "./js/Gallery.js";

document.addEventListener('DOMContentLoaded', () => {
    // Navbar
    InitNavbar()
    InitHeaderObserver()
    InitNavbarObserver()
    // Hero animations
    let heroBgImg = document.getElementById("hero-bg-img")
    let heroTitle = document.getElementById("hero-title")
    let heroCta = document.getElementById("hero-cta")
    let mainTl = gsap.timeline({ ease: "power2.in", duration: 0.4 })

    mainTl.from(heroBgImg, { autoAlpha: 0, y: '5%' })
    mainTl.from(heroTitle, { autoAlpha: 0, y: '-80%' }, "<0.1")
    mainTl.to(heroCta, { opacity:1, y: '0%', ease: 'none' }, "<")

    // Observer animations
    let animateEntranceElems = document.querySelectorAll('[data-animated-entrance]')
    let animationObserver = new IntersectionObserver((entries, obs) => {
        for (let ent of entries) {
            if (ent.isIntersecting) {
                obs.unobserve(ent.target)
                let elem = ent.target
                let animId = elem.dataset.animatedEntrance
                if (animId){
                    switch (animId) {
                        case 'welcome':
                        case 'lotification':
                            gsap.from(elem, { y: '40%', autoAlpha:0, duration: .6, ease: 'power1.in' })
                            break;
                        case 'amenities':
                        case 'gallery':
                        case 'contact':
                        case 'office':
                            gsap.from(elem, { autoAlpha: 0, duration: .6, ease: 'power1.in' })
                            break;
                        case 'why-us-img':
                        case 'about':
                            gsap.from(elem, { autoAlpha: 0, x: '-40%', duration: .6, ease: 'power1.in' })
                            break;
                        case 'why-us':
                        case 'about-img':
                        case 'gallery-slides':
                            gsap.from(elem, { autoAlpha: 0, x: '60%', duration: .6, ease: 'power1.in' })
                            break;
                        case 'contact-form':
                            gsap.set(elem, { z: 10 })
                            gsap.from(elem, { autoAlpha: 0, x: '-40%', duration: .6, ease: 'power1.in' })
                            break;
                        case 'contact-card':
                            gsap.set(elem, { z: 0 })
                            gsap.from(elem, { autoAlpha: 0, x: '-100%', duration: .6, ease: 'power1.in' }, "<0.4")
                            break;
                    }
                } else {
                    gsap.from(elem, { y: '40%', autoAlpha: 0, duration: 0.5 })
                }
            }
        }
    }, { threshold: 0.15 })

    for (let elem of animateEntranceElems) {
        animationObserver.observe(elem)
    }

    // Amenity Slider
    InitAmenitySlider()
    
    // Gallery Slider
    InitGallery()
})
