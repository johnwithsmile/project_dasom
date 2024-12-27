document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');

        // 초기 상태에서는 답변을 숨김
        answer.style.display = 'none';

        question.addEventListener('click', () => {
            // 현재 열린 답변이 있다면 닫기
            const openAnswer = document.querySelector('.faq-answer[style="display: block;"]');
            const openIcon = document.querySelector('.fa-chevron-down.rotated');

            if (openAnswer && openAnswer !== answer) {
                openAnswer.style.display = 'none';
                openIcon.classList.remove('rotated');
            }

            // 클릭한 질문의 답변 토글
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            icon.classList.toggle('rotated');
        });
    });
});
