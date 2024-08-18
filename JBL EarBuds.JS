const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

gsap.from('.home__title', {opacity: 0, duration: 1.5, delay: .5, y: 50})
gsap.from('.home__description', {opacity: 0, duration: 1.5, delay: .8, y: 50})
gsap.from('.earbuds1', {opacity: 0, duration: 2, delay: 1.2, y: -40})
gsap.from('.earbuds2', {opacity: 0, duration: 2, delay: 1.4, y: 40})
gsap.from('.nav__logo', {opacity:0, duration: 2.5, delay: 1.5, y: 25});
gsap.from('.nav__toggle', {opacity:0, duration: 2.5, delay: 1.7, y: 25});
gsap.from('.nav__item', {opacity: 0, duration: 2.5, delay: 1.9, y: 25, ease:'expo.out', stagger: .3})
gsap.from('.nav__btn', {opacity:0, duration: 2.5, delay: 2, y: 25});
gsap.from('.home__scroll', {opacity: 0, duration: 1.5, delay: 2.3, y: 30})

var animate = new TimelineMax({onUpdate:updatePercentage})
var  controller = new ScrollMagic.Controller()

animate
.from('.details__img', {opacity: 0, y: 25})
.from('.details__box', {opacity: 0, y: 25, duration: 1, ease:'expo.out', stagger: .4})

var scene = new ScrollMagic.Scene({
    triggerElement: ".details__box",
})
.setTween(animate)
.addTo(controller)

function updatePercentage(){
    animate.progress()
}

