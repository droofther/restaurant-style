/*----------------------PRELOADED--------------------*/
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    document.querySelector('body').classList.remove('hidden')
    preloader.style.transition = 'all 2s '
    preloader.style.display = 'none'
    preloader.style.opacity = '0'
    AOS.init();

})


/*-------------------toggle navbar--------------------*/
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', togglerNav);


function togglerNav() {
    navToggler.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
}

/*--------close when click on a link the nav item------*/
document.addEventListener('click', (e) => {

    if (e.target.closest('.nav-item')) {
        togglerNav();
    };
})

/*---------------------sticky header--------------------*/

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {
        document.querySelector('.header').classList.add('sticky');
    } else
        document.querySelector('.header').classList.remove('sticky');

})

/*-----------------------SLIDER  img ABOUT------------------------ */

const slider = document.getElementById('slider');
const sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function NextMove() {
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0]
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 2s';
    setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 2000)
}

setInterval(() => {
    NextMove();
}, 7000);

/*----------------------------------------------*/

/*------------------------------------------
              OUR MENU
------------------------------------------- */

const btnMenuTabs = document.querySelector('.btn-menu-tabs');
btnMenuTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-menu-tab') && !e.target.classList.contains('active')) {
        const target = e.target.getAttribute('data-target');
        btnMenuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active')

        const menuSection = document.querySelector('.menu-section');
        menuSection.querySelector('.menu-tab-conten.active').classList.remove('active');
        menuSection.querySelector(target).classList.add('active');
        AOS.init();

    }
})