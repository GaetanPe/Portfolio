function setLanguage(language) {
    var elements = document.querySelectorAll('[data-lang-fr], [data-lang-en]');
    elements.forEach(element => {
        if (language === 'fr') {
            element.innerHTML = element.getAttribute('data-lang-fr');
        } else {
            element.innerHTML = element.getAttribute('data-lang-en');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('fr');
    document.getElementById('language-selector').addEventListener('change', function() {
        setLanguage(this.checked ? 'en' : 'fr');
    });
});

function toggleCategory(category) {
    var content = document.getElementById(category);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

 // Script pour le carrousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const inner = document.getElementById('carouselInner');
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById('nextButton').onclick = function() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
};

document.getElementById('prevButton').onclick = function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
};

// Script pour changer de langue
document.getElementById('language-selector').addEventListener('change', function() {
    const langElements = document.querySelectorAll('[data-lang-fr], [data-lang-en]');
    langElements.forEach(el => {
        if (this.checked) {
            el.textContent = el.getAttribute('data-lang-en');
        }else {
            el.textContent = el.getAttribute('data-lang-fr');
        }
    });
});