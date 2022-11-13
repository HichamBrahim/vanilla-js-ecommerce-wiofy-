
export const actionFaq = () => {
    const questions = [...document.querySelectorAll('.faq .question')];
    questions.forEach(question => {
        question.onclick = function() {
            questions.forEach(qst => {
                if(question != qst) {
                    qst.classList.remove('active');
                    qst.children[1].classList.remove('active');
                }
            })
            question.classList.toggle('active');
            question.children[1].classList.toggle('active');
        }
    })
    
}