const body = document.querySelector("body")
const header = document.querySelector(".header")
const navContent = document.querySelector('.nav')
const burger = document.querySelector('.burger')
const headerFade = document.querySelector('.header_fade')

let showBurger = (e) => {
    console.log(e.target)
    // debugger
    if (navContent.classList.contains("burger_active")) {

        setTimeout(() => {
            navContent.classList.remove("burger_active")
        }, 100)
        navContent.classList.add("burger_no_active")
        burger.style.transform = "rotate(0deg)"
        header.removeChild(document.querySelector('.header_fade'))
        body.classList.remove("no_scroll")
        body.dataset.content = 'f'

    } else {
        body.dataset.content = 't'
        navContent.classList.remove("burger_no_active")
        navContent.classList.add("burger_active")
        burger.style.transform = "rotate(90deg)"
        header.insertAdjacentHTML('afterbegin', `
            <div class="header_fade header_fade--active"></div>
        `)
    }
}

let closeNav = (event) => {

    if (event.target.dataset.content != "close") {
        body.dataset.content = 'f'
        setTimeout(() => {
            navContent.classList.remove("burger_active")
        }, 200)
        navContent.classList.add("burger_no_active")
        burger.style.transform = "rotate(0deg)"
        setTimeout(() => {
            header.removeChild(document.querySelector('.header_fade'))
        }, 200)
        body.classList.remove("no_scroll")

    }
}

burger.addEventListener('click', showBurger)

body.addEventListener("click", (e) => {
    if (body.dataset.content === 't') {
        closeNav(e)
    }
})