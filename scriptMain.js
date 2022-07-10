const loadAni = gsap.timeline()
    .from('#text', { duration: 0.5, opacity: 0 })
    .from('#text', { duration: 1.25, y: '100%', ease: "back" }, "<")
    .from('#subText', { duration: 0.5, opacity: 0 }, ">")
    .from('#subText', { duration: 1.25, y: '100%', ease: "back" }, "<")

gsap.timeline({
    scrollTrigger: {
        trigger: "#first",
        start: "center center", //Animation start at this point
        end: "bottom top",   //Animation End at this point
        // markers: true,
        scrub: 1.5,
        onUpdate: self => {
            console.log(self.progress)
            if (self.progress > 0.8) {
                loadAni.restart()
            }
        }
    }
})
    .to("#lake_sun", { y: innerHeight * 0.15, x: innerWidth * 0.05 })
    .to("#lake_mountains_behind", { y: innerHeight * 0.15 }, "<")
    .to("#fisher", { y: innerHeight * 0.1 }, "<")
    .to("#lake_mountains_front", { y: innerHeight * 0 }, "<")
    .from('#aboutTitle', { opacity: 0 }, "<")
    .from('#aboutTitle', { y: '-100%' }, "<")
    .from('#aboutText', { opacity: 0 }, ">")
    .from('#aboutText', { y: '30%' }, "<")
    .from('#aboutImg', { opacity: 0 }, "<")
    .from('#aboutImg', { x: '30%' }, "<")

// .to('#aboutTitle', { opacity: 0 }, "90%")
// .to('#aboutTitle', { y: '-100%' }, "<")
// .to('#aboutText', { opacity: 0 }, ">")
// .to('#aboutText', { y: '30%' }, "<")
// .to('#aboutImg', { opacity: 0 }, "<")
// .to('#aboutImg', { x: '30%' }, "<")

gsap.timeline({
    scrollTrigger: {
        trigger: "#second",
        start: "top center", //Animation start at this point
        end: "bottom top",   //Animation End at this point
        // markers: true,
        scrub: 1.5,
    }
})
    .to("#mountainMoon", { x: window.innerHeight * 1, y: innerHeight * 0.15 })
    .to("#mountainsBack", { y: innerHeight * -0.06 }, "<")
    .to("#mountainsFore", { y: innerHeight * 0.06 }, "<")
    .to("#car", { y: innerHeight * 0.06 }, "<")
    .to("#mountain", { y: innerHeight * 0 }, "<")
    .to("#stars", { x: innerWidth * 0.15 }, "<")
    .from('#portTitle', { opacity: 0 }, "<")
    .from('#portTitle', { y: '-100%' }, "<")
    .from('#portGrid', { opacity: 0 }, "<")
    .from('#portGrid', { y: '100%' }, "<")

gsap.timeline({
    scrollTrigger: {
        trigger: "#third",
        start: "top center", //Animation start at this point
        end: "top top",   //Animation End at this point
        // markers: true,
        scrub: 1.5,
    }
})
    .from('#contact', { opacity: 0 }, "<")
    .from('#contact', { y: '-50%' }, "<")
    .from('.linkedin', { opacity: 0 }, "<")
    .from('.linkedin', { y: '50%' }, "<")
    .to("#beachSun", { y: innerHeight * -0.12 }, "<")
    .to("#beachBack", { y: innerHeight * 0.15 }, "<")
    .to("#beachFore", { y: innerHeight * -0.05 }, "<")
    .to("#birds", { x: innerHeight * -0.15, y: innerHeight * -0.15 }, "<")
    .to("#stars", { y: innerWidth * -0.1 }, "<")
