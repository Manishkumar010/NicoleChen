const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const stickyElement = document.querySelector("header");
let imageshow = document.querySelectorAll('.imageShow')
let hoverbtn = document.querySelector('#first-drop-box')
let hoverbtn2 = document.querySelector('#second-drop-box')
let dropdwonmenu2 = document.querySelector('main')



imageshow[0].addEventListener('mouseenter',function(){
    gsap.to('.main-conatner .right-box img:nth-child(1)',{
        display: 'block',
        duration: 0.5,
    })
})
imageshow[0].addEventListener('mouseleave',function(){
    gsap.to('.main-conatner .right-box img:nth-child(1)',{
        display: 'none',
    })
})
imageshow[1].addEventListener('mouseenter',function(){
    gsap.to('.main-conatner .right-box img:nth-child(2)',{
        display: 'block',
        duration: 0.5,
    })
})
imageshow[1].addEventListener('mouseleave',function(){
    gsap.to('.main-conatner .right-box img:nth-child(2)',{
        display: 'none',
    })
})




window.addEventListener("scroll", () => {
    if (window.scrollY) {
        stickyElement.classList.add("is-sticky");
    } else {
        stickyElement.classList.remove("is-sticky");
    }
});


hoverbtn.addEventListener('mouseenter',function(){
    gsap.to('.drop-dwon-menu',{
        top: '0',
    })
})
dropdwonmenu2.addEventListener('mouseleave',function(){
    gsap.to('.drop-dwon-menu',{
        top: '-1000px',
    })
})

hoverbtn2.addEventListener('mouseenter',function(){
    gsap.to('.drop-down-menu-second ',{
        top: '0',
    })
})
dropdwonmenu2.addEventListener('mouseleave',function(){
    gsap.to('.drop-down-menu-second',{
        top: '-1000px',
    })
})