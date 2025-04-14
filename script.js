const reelContainer = document.querySelector('.reel-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Défilement vers la gauche
leftArrow.addEventListener('click', () => {
    reelContainer.scrollBy({
        left: -300, // Ajustez la valeur pour définir la distance de défilement
        behavior: 'smooth'
    });
});

// Défilement vers la droite
rightArrow.addEventListener('click', () => {
    reelContainer.scrollBy({
        left: 300, // Ajustez la valeur pour définir la distance de défilement
        behavior: 'smooth'
    });
});

// Désactiver les flèches si nécessaire
const updateArrows = () => {
    leftArrow.disabled = reelContainer.scrollLeft === 0;
    rightArrow.disabled = reelContainer.scrollLeft + reelContainer.offsetWidth >= reelContainer.scrollWidth;
};

// Mettre à jour les flèches au chargement et lors du défilement
reelContainer.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ajoute ou enlève la classe "active"
});