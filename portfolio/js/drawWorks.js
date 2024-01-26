const MOBILE_WIDTH = 550;
const worksContainer = document.querySelector('.our-works__items ');
const load = document.querySelector('.our-works__load-more');
const maxMobileItem = 3;
let initNumberItem = 6

let tempMaxMobileItem = maxMobileItem;

drawInitWorks()

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
    for (let i = 0; i < 6; i++) {
        drawBlock(worksData[i]);
    }

    // for (let id in worksData) {
    //     console.log(worksData[id].mainImg)
    //     // drawBlock(worksData[i]);
    // }

}

function isMobileWidth(width) {
    return width < 550;
}

function drawBlock(data) {
    worksContainer.insertAdjacentHTML('beforeend', `
    <div class='our-works__item' >
        <img class='our-works__item' src='${data.mainImgSrc}' alt="" data-id='${data.id}'>
        <div class="our-works__item-side" >
            <h4 class="our-works__item-title">${data.title}</h4>
            <hr>
            <button class="our-works__item-btn">Подробнее</button>
        </div>
    </div>
`)
}

