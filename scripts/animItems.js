gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.3,
        effects: true
    })

    // gsap.fromTo('.footer .form__inner ', { x: -50, opacity: 0 }, {
    //     x: 0,
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.form__inner',
    //         scrub: true,
    //     }
    // })
}

const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((scrollY) > animItemOffset - animItemPoint && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('anim_no_hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }

    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

// function offset(el) {
//     const rect = el.getBoundingClientRect(),
//         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//         scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

// }

// const anchor = document.querySelector("a[href*='#slider']")
const anchor = document.querySelector(".contacts")
const anchors = document.querySelectorAll("a[href*='#']")


anchors.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const blockId = item.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})


anchor.addEventListener('click', (e) => {
    // e.preventDefault()
    console.log(e.target)
    const block = document.querySelector("body")
    window.scrollTo({ top: block.offsetHeight, behavior: "smooth" })
})


console.log(document.querySelector('#contacts').getBoundingClientRect().top, anchor)




