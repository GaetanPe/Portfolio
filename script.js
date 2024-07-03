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
