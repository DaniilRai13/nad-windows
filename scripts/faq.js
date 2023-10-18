// const questionsItem = document.querySelectorAll('.questions__item')

// questionsItem.forEach(item => {
//     let itemAnswer = item.querySelector('.item__answer')

//     item.addEventListener('click', () => {

//         itemAnswer.classList.add('active')
//     })
// })

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');
        question.classList.toggle('active')

        if (isOpen) {
            answer.style.maxHeight = null;
            answer.style.padding = '0 30px';
        } else {
            answer.style.maxHeight = (answer.scrollHeight + 500) + 'px';
            if (window.innerWidth < 550) {
                answer.style.padding = '15px';
            } else {
                answer.style.padding = '30px';

            }
        }

        answer.classList.toggle('open');
    });
});