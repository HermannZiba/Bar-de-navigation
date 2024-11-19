// Script pour activer le menu déroulant
document.addEventListener('DOMContentLoaded', function () {
    const expandable = document.querySelector('.expandable');
    const expandBtn = document.querySelector('.expand-btn');

    // Toggle la classe 'active' pour afficher ou masquer le menu déroulant
    expandBtn.addEventListener('click', function () {
        expandable.classList.toggle('active');
    });
});
