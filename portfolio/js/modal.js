const itemsInner = document.querySelector('.our-works__items')

const modal = document.querySelector('.modal')

itemsInner.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        modal.innerHTML = createModalWindow()
        setImgs(e.target.dataset.id)
        showModal()
        const modalContainer = document.querySelector('.modal__container')

        const leftArrow = modal.querySelector('.left')
        const rightArrow = modal.querySelector('.right')

        leftArrow.addEventListener('click', () => changeImg('prev'))
        rightArrow.addEventListener('click', () => changeImg('next'))
        modalContainer.addEventListener('click', (e) => {

            if (e.target.classList.contains('modal__container')) {
                closeModal()
            }
        })
    }

})



function changeImg(type) {
    const modalImgsContainer = modal.querySelector('.modal__imgs')

    let modalImgs = modal.querySelectorAll('.modal__img-item')

    switch (type) {
        case 'next':
            return modalImgsContainer.appendChild(modalImgs[0])
        case 'prev':
            return modalImgsContainer.prepend(modalImgs[modalImgs.length - 1])
        default: return true
    }
}

function setImgs(getId) {
    const modalImgsContainer = modal.querySelector('.modal__imgs')
    let a = [];
    for (let id in worksData) {
        if (id == getId) {
            a = worksData[id].images
        }
    }

    a.forEach(item => {
        console.log(item)
        let imgDiv = document.createElement('img')
        imgDiv.classList.add('modal__img-item')
        imgDiv.src = item.url
        modalImgsContainer.appendChild(imgDiv)
    })

}

function showModal() {
    modal.classList.add('open')
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    modal.classList.add('close')

    setTimeout(() => {
        modal.classList.remove('close')
        modal.classList.remove('open')
    }, 200)
    document.querySelector('body').style.overflow = 'scroll'
}

function createModalWindow() {
    return `
        <div class="modal__container">
            <div class="modal__window">
                <div class="modal__imgs">
                </div>
            </div>
                <button class="left"><svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{}</style><g id="row2_1_"><g id="_x32__4_"><path class="st2" d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm22.4-63.7H57.6l12.3-15.2c0-2.2-1.8-3.9-3.9-3.9h-7.1L32 64l26.8 25.5H66c2.2 0 3.9-1.8 3.9-3.9L57.1 69.9h28.6c2.2 0 3.9-1.8 3.9-3.9v-4c0-2.1-1-4.4-3.2-4.4z" id="left_1_"/></g></g></svg></button>
                <button class="right"><svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{}</style><g id="row2_1_"><g id="_x33__3_"><path class="st2" d="M64 .3C28.8.3.3 28.8.3 64s28.5 63.7 63.7 63.7 63.7-28.5 63.7-63.7S99.2.3 64 .3zm0 121C32.3 121.3 6.7 95.7 6.7 64 6.7 32.3 32.3 6.7 64 6.7c31.7 0 57.3 25.7 57.3 57.3 0 31.7-25.6 57.3-57.3 57.3zm-2-82.8c-2.2 0-3.9 1.8-3.9 3.9l12.2 15.2H41.7c-2.2 0-3.2 2.2-3.2 4.4v4c0 2.2 1.8 3.9 3.9 3.9h28.4L58.1 85.6c0 2.2 1.8 3.9 3.9 3.9h7.1L95.8 64 69.1 38.5H62z" id="right_1_"/></g></g></svg></button>
            
        </div>
    `
}