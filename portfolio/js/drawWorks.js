const MOBILE_WIDTH = 550;
const worksContainer = document.querySelector('.our-works__items');
const load = document.querySelector('.our-works__load-more');
const maxMobileItem = 3;
let initNumberItem = 6

let tempMaxMobileItem = maxMobileItem;

render()

async function render() {
    try {
        worksContainer.innerHTML = loaderHTML()
        await getWorks()
            .then(data => worksData = data )

        worksContainer.innerHTML = ''
        await drawInitWorks()
    } catch (err) {
        return err
    }
}

function showMore() {
    if (tempMaxMobileItem + maxMobileItem < worksData.length) {
        for (let i = 0; i < maxMobileItem; i++) {
            drawBlock(tempMaxMobileItem + i)
        }
        tempMaxMobileItem += maxMobileItem;

    } else if (tempMaxMobileItem + maxMobileItem >= worksData.length) {
        for (let i = tempMaxMobileItem; i < worksData.length; i++) {
            drawBlock(worksData[i])
        }
        load.style.display = 'none';
    }
}

async function drawInitWorks() {
    // for (let i = 0; i < 6; i++) {
    //     drawBlock(worksData[i]);
    // }

    for (let id in worksData) {
        console.log(worksData[id].mainImg)
        drawBlock(id, worksData[id].mainImg);
    }

}

function isMobileWidth(width) {
    return width < 550;
}

function drawBlock(id, mainImg, title = 'window') {
    worksContainer.insertAdjacentHTML('beforeend', `
    <div class='our-works__item' >
        <img class='our-works__item' src='${mainImg}' alt="" data-id='${id}'>
        <div class="our-works__item-side" >
            <h4 class="our-works__item-title">${title}</h4>
            <hr>
            <button class="our-works__item-btn">Подробнее</button>
        </div>
    </div>
`)
}

async function getWorks() {
    loaderHTML()

    return fetch('https://nad-works-default-rtdb.firebaseio.com/works.json', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => data)
}

function isElementInArray(id) {
    let arr = {}
    return arr.hasOwnProperty('id')
}

function loaderHTML() {
    return `
        <div class="loader__inner">
            <span class="loader__text">Загрузка</span>
            <span class="loader-dots">
                <span class="loader-dot">.</span>
                <span class="loader-dot">.</span>
                <span class="loader-dot">.</span>
            </span>
        </div>
    `
}

