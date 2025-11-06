// script.js - Mais JS para modals, scroll suave e animações

document.addEventListener('DOMContentLoaded', () => {
    // Modals
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação extra: Highlight no hover para cards
    const cards = document.querySelectorAll('.deus-card, .criatura-card, .runa-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#fff';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#d4af37';
        });
    });
});