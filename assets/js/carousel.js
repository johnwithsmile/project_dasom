document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentSlide = 0;
    const slideCount = slides.length;

    // 도트 생성
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    // 슬라이드 이동 함수
    function goToSlide(n) {
        carousel.style.transform = `translateX(-${n * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[n].classList.add('active');
        currentSlide = n;
    }

    // 다음 슬라이드
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }

    // 이전 슬라이드
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }

    // 버튼 이벤트
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // 자동 슬라이드
    let slideInterval = setInterval(nextSlide, 5000);

    // 마우스 호버시 자동 슬라이드 멈춤
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // 터치 이벤트 처리
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
});
