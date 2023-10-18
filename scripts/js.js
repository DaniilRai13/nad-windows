
gsap.fromTo('.main', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: ".main",
        start: "center",
        end: 'bottom',
        scrub: true
    }
})

const anchor = document.querySelector("a[href*='#slider']")
anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})


