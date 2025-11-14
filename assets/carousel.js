document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (!carousel) return;

    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    const indicators = carousel.querySelectorAll('.carousel-indicators button');

    let currentIndex = 0;
    const intervalTime = 5000; // 5 secondes
    let carouselInterval;

    function updateCarousel() {
        // Masquer tous les items et enlever la classe 'active'
        items.forEach((item, index) => {
            item.classList.remove('active');
            indicators[index].classList.remove('active');
        });

        // Afficher l'item actuel
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    function goToIndex(index) {
        currentIndex = (index + items.length) % items.length;
        updateCarousel();
        resetInterval();
    }

    function resetInterval() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            goToIndex(currentIndex + 1);
        }, intervalTime);
    }

    // Navigation manuelle
    prevBtn.addEventListener('click', () => goToIndex(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToIndex(currentIndex + 1));

    // Indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToIndex(index));
    });

    // Lancement initial
    updateCarousel();
    resetInterval();
});