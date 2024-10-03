// Fonction unique pour gérer le changement de langue
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-fr], [data-lang-en]');
    elements.forEach(element => {
        element.innerHTML = element.getAttribute(`data-lang-${language}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser avec la langue par défaut (français)
    setLanguage('fr');

    // Ajouter un event listener sur le sélecteur de langue
    document.getElementById('language-selector').addEventListener('change', function() {
        setLanguage(this.checked ? 'en' : 'fr');
    });
});

// Fonction pour le carrousel
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

// Fonction pour gérer l'affichage des catégories
function toggleCategory(category) {
    const content = document.getElementById(category);
    content.style.display = (content.style.display === "block") ? "none" : "block";
}
