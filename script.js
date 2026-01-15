<nav>
    <h2 class="logo">Sidoine</h2>
    <div class="menu-toggle" id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul id="menu">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="apropos.html">À propos</a></li>
        <li><a href="services.html">Compétences</a></li>
        <li><a href="beninboost.html">Bénin Boost</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>

// Sélection des liens du menu
const links = document.querySelectorAll('nav ul li a');
const overlay = document.getElementById('overlay');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien immédiat
        const href = this.getAttribute('href');

        overlay.style.opacity = '1'; // Active l'overlay
        overlay.style.pointerEvents = 'auto';

        setTimeout(() => {
            window.location.href = href; // Change de page après l'animation
        }, 600); // Correspond au temps du fade
    });
});

// Optionnel : fade-in au chargement de la page
window.addEventListener('load', () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
});
