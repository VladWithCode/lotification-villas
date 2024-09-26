import { gsap } from 'gsap'

const NAVBAR_ACTIVE = "open"
const NAVBAR_INACTIVE = "close"
const HEADER_HEIGHT = 80

export function InitNavbar(navbarSelector = "#navbar", scrollOffsetY = HEADER_HEIGHT ) {
    let navbar = document.querySelector(navbarSelector)
    navbar.dataset.navbar = NAVBAR_INACTIVE

    let navbarWrapper = document.querySelector("[data-navbar-wrapper]")
    let navbarToggler = document.querySelector("[data-navbar-toggler]")

    navbarToggler.addEventListener("click", () => {
        let isActive = navbar.dataset.navbar === NAVBAR_ACTIVE
        let closeNav = navbarToggler.querySelector("[data-navbar-toggler-close]")

        if (isActive) {
            navbar.dataset.navbar = NAVBAR_INACTIVE
            gsap.to(navbarWrapper, { width: "0%", ease: "power2", duration: 0.3 })
            gsap.to(closeNav, { scale: 0, ease: "power2", duration: 0.4 }, "<")
        } else {
            navbar.dataset.navbar = NAVBAR_ACTIVE
            gsap.to(navbarWrapper, { width: "100%", ease: "power2", duration: 0.6 })
            gsap.to(closeNav, { scale: 1, ease: "power2", duration: 0.4 }, "<")
        }
    })

    let navbarLinks = document.querySelectorAll("[data-navbar-link]")

    for (let link of navbarLinks) {
        link.addEventListener("click", e => {
            e.preventDefault()
            let section = document.querySelector(`[data-section="${link.dataset.navbarLink}"`)

            if (section) {
                let closeNav = navbarToggler.querySelector("[data-navbar-toggler-close]")

                navbar.dataset.navbar = NAVBAR_INACTIVE
                gsap.to(navbarWrapper, { width: "0%", ease: "power2", duration: 0.3 })
                gsap.to(closeNav, { scale: 0, ease: "power2", duration: 0.4 }, "<")

                let scrollTop = section.offsetTop - scrollOffsetY
                window.scrollTo({ behavior: 'smooth', top: scrollTop })
            }
        })
    }
}

export function InitHeaderObserver() {
    let topMostElem = document.getElementById("top-most")
    let headerElem = document.getElementById("header-wrapper")
    let observer = new IntersectionObserver(ents => {
        if (ents[0].isIntersecting) {
            headerElem.style.height = "5rem"
        } else {
            headerElem.style.height = "3rem"
        }
    })

    observer.observe(topMostElem)
}

export function InitNavbarObserver() {
    let sections = document.querySelectorAll("[data-section]")
    let observer = new IntersectionObserver(ents => {
        let sectionElem = ents[0].target
        let sectionId = sectionElem.id
        let navbarLinks = document.querySelectorAll(`[data-navbar-link="${sectionId}"]`)

        if (navbarLinks.length > 0 && ents[0].isIntersecting) {
            document.querySelectorAll("[data-navbar-link].active").forEach(link => {
                link.classList.remove("active")
            })

            for (let link of navbarLinks) {
                link.classList.add("active")
            }
        }
    }, {
        threshold: 0.5,
    })

    for (let section of sections) {
        observer.observe(section)
    }
}
