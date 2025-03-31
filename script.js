document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".dua-slide");
    let currentSlide = 0;
    let xStart = null;

    if (slides.length === 0) {
        console.warn("Нет элементов с классом 'dua-slide'. Слайды не будут работать.");
        return;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
            slide.style.position = i === index ? "relative" : "absolute";
            slide.style.zIndex = i === index ? "1" : "-1";
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

        xStart = null;
    }

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    // Убираем прелоадер после полной загрузки
    window.onload = () => {
        document.body.classList.add("loaded");
        document.getElementById("preloader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 500);
    };

    showSlide(currentSlide);
});
