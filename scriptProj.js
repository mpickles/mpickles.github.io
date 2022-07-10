window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

gsap.from('#projTitle', { duration: 1, opacity: 0 })
gsap.from('#projTitle', { duration: 1, y: '10%', ease: "back" }, "<")
gsap.from('#projSub', { duration: 1, opacity: 0 }, "<")
gsap.from('#projSub', { duration: 1, y: '10%', ease: "back" }, "<")
gsap.from('#aboutText', { duration: 1, opacity: 0 }, ">")
gsap.from('#aboutText', { duration: 1, y: '10%', ease: "back" }, "<")
// gsap.from('.projLink-con', { duration: 1, opacity: 0 }, "<")
// gsap.from('.projLink-con', { duration: 1, y: '10%', ease: "back" }, "<")
gsap.from('#imgsProjCon', { duration: 1, opacity: 0 }, "<")
gsap.from('#imgsProjCon', { duration: 1, y: '10%', ease: "back" }, "<")
gsap.from('.projLink-con', { duration: 1, opacity: 0 }, "<")
gsap.from('.projLink-con', { duration: 1, y: '10%', ease: "back" }, "<")