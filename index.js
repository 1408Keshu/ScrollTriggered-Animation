gsap.from("#box1",{
    // rotate:360,
    y:-1000,
    opacity:0,
    // scale:0,
    duration:1,
    // delay:1,
})
gsap.from("#box3",{
    // rotate:360,
    x:2300,
    // scale:1,
    duration:3,
    // delay:1,
    scrollTrigger:{
        trigger:'#box3',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top 70%',
        scrub:3,
    }
})
gsap.to("#box4",{
    rotate:360,
    scale:4,
    // y:-600,
    duration:1,
    // delay:1,
    scrollTrigger:{
        trigger:'#box4',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top 70%',
        scrub:3,
    }
})
gsap.from("#box2",{
    rotate:360,
    scale:0,
    duration:1,
    // delay:1,
    
    scrollTrigger:{
        trigger:'#box2',
        scroller:'body',
        markers: true,
        start:'top 50%',
        end:'top 70%',
        scrub: 3,
    }
})