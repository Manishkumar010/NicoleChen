let header = document.querySelector(".second-box")
let openNav = document.querySelector(".opennav")
let closeNav = document.querySelector(".closenav")

openNav.addEventListener("click", function () {
    header.classList.add("active")
})
closeNav.addEventListener("click", function () {
    header.classList.remove("active")
})

function cursorAnimation() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");


    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        })
    });
    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    });
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    });
};
cursorAnimation()



function loaderAnimation() {
    var tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.6,
        stagger: 0.2
    })
    tl.to("#loader h3", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2
    })
    tl.to("#loader", {
        opacity: 0
    })
    tl.from("#page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5
    })
    tl.to("#loader", {
        display: "none"
    })
}

loaderAnimation()

function page3ContentAnimation() {
    gsap.from("#page3-top h2", {
        y: 120,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            // markers:true,
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    })
}
page3ContentAnimation()
