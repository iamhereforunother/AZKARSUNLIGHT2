document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".dua-slide");
    let currentSlide = 0;
    let xStart = null;

    if (slides.length === 0) return; // Если слайдов нет, ничего не делаем

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function handleTouchStart(evt) {
        xStart = evt.touches[0].clientX;
    }

    function handleTouchMove(evt) {
        if (!xStart) return;

        let xEnd = evt.touches[0].clientX;
        let xDiff = xStart - xEnd;

        if (xDiff > 50) nextSlide();
        if (xDiff < -50) prevSlide();

        xStart = null; // Сбрасываем после свайпа
    }

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    // Прелоадер
    setTimeout(() => {
        document.body.classList.add("loaded");
        document.body.style.opacity = "1";
    }, 1000);

    showSlide(currentSlide);
});
