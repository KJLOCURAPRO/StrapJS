// Funcionalidad para mostrar/ocultar el menú
document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    e.stopPropagation(); // Previene el cierre inmediato al hacer clic en el botón
    const navLinks = document.querySelector('.nav-links');

    // Alternar el display del menú (mostrar/ocultar)
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }

    // Toggle de la animación del menú
    this.classList.toggle('active');
});

// Cerrar menú después de hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');

        // Ocultar todas las secciones
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('section-visible');
            section.classList.add('section-hidden');
        });

        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.remove('section-hidden');
        targetSection.classList.add('section-visible');

        // Cerrar el menú móvil después de hacer clic
        document.querySelector('.nav-links').style.display = "none";
        document.querySelector('.menu-toggle').classList.remove('active');
    });
});

// Cargar la sección 'inicio' visible al cargar la página
window.addEventListener('load', () => {
    document.getElementById('inicio').classList.add('section-visible');
    document.getElementById('inicio').classList.remove('section-hidden');
});

// Funcionalidad para el botón "Descargar Ahora" que lleva a la sección de descarga
document.querySelector('.download-button').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace

    // Desplazarse suavemente a la sección "descarga"
    const targetSection = document.getElementById('descarga');
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
});


function dow() {
    // Obtener la sección de descarga
    const targetSection = document.getElementById('descarga');
    
    // Desplazarse hacia la sección de descarga con un efecto suave
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}
