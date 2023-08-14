const NavMenu = document.querySelector('.nav-menu')
const IconClose = document.querySelector('.icon-close')
const IconHamburger= document.querySelector('.icon-hamburger')
const PrimaryNavList = document.querySelector('.primary-nav-list')
const Overlay = document.querySelector('.overlay')
const body = document.querySelector('body')



NavMenu.addEventListener('click', () => {
    IconClose.toggleAttribute('data-visible')
    IconHamburger.toggleAttribute('data-visible')
    PrimaryNavList.toggleAttribute('data-visible')
    Overlay.toggleAttribute('data-overlay')
    body.toggleAttribute('data-scroll')
})