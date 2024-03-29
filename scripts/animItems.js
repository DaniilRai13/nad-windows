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




