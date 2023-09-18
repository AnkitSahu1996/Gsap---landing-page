let tl = gsap.timeline();

tl.from("h3",{
     y: -50,
     opacity: 0,
     duration: 1,
     delay: 0.5,
     stagger: 0.5
})

tl.from("h1",{
    x: -800,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.5
})

tl.from("img",{
    x: 500,
    rotation: 120,
    opacity: 0,
    duration: 2,    
    stagger: 1
})

tl.from("h4",{
    x: -800,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.5
})