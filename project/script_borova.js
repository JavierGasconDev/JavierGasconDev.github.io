document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navLinks = document.querySelectorAll('.navbar nav a');

    let currentLang = 'en';

    const texts = {
        en: {
            nav: ['Home', 'Development', 'Resume', 'Contact'],
            title: 'Borova: The Forsaken Village',
            role: 'Primary Role: <b>Lead Developer</b>',
            description: [
                '<b>Borova: The Forsaken Village</b> is my Final Degree Project, a first-person psychological horror and mystery game developed using Unreal Engine. The game focuses on exploration, environmental storytelling, and unraveling a dark narrative within an isolated and unsettling village. Players navigate the eerie landscapes of Borova, piecing together clues and facing psychological challenges to uncover the village\'s hidden secrets and the fate of its forsaken inhabitants.',
                'Developed entirely within <b>Unreal Engine</b>, Borova leverages the engine\'s robust tools for visual fidelity, atmospheric design, and interactive environments. The project integrates both <b>C++</b> for core gameplay systems and <b>Blueprints</b> for rapid prototyping and level design, allowing for a flexible and efficient development workflow.'
            ],
            sections: {
                core: 'Core Development Work',
                contact: 'Contact'
            }
        },
        es: {
            nav: ['Inicio', 'Trabajo', 'Currículum', 'Contacto'],
            title: 'Borova: The Forsaken Village',
            role: 'Rol principal: <b>Desarrollador Principal</b>',
            description: [
                '<b>Borova: The Forsaken Village</b> es mi Proyecto de Fin de Grado, un videojuego de terror psicológico y misterio en primera persona desarrollado con Unreal Engine. El juego se centra en la exploración, la narrativa ambiental y el descubrimiento de una historia oscura dentro de un pueblo aislado e inquietante. Los jugadores recorren los paisajes inquietantes de Borova, reuniendo pistas y enfrentándose a desafíos psicológicos para descubrir los secretos ocultos del pueblo y el destino de sus habitantes.',
                'Desarrollado íntegramente en <b>Unreal Engine</b>, Borova aprovecha las potentes herramientas del motor para lograr una alta fidelidad visual, diseño atmosférico y entornos interactivos. El proyecto integra <b>C++</b> para los sistemas principales de juego y <b>Blueprints</b> para prototipado rápido y diseño de niveles, permitiendo un flujo de trabajo flexible y eficiente.'
            ],
            sections: {
                core: 'Trabajo Principal de Desarrollo',
                contact: 'Contacto'
            }
        }
    };

    function updateLangButton() {
        langToggle.textContent = currentLang === 'en' ? 'Español' : 'English';
    }

    function translate() {
        // NAV
        navLinks.forEach((link, i) => {
            link.textContent = texts[currentLang].nav[i];
        });

        // TITLE
        document.querySelector('#project h1').textContent = texts[currentLang].title;
        document.title = texts[currentLang].title;

        // ROLE
        document.querySelector('.info-item p').innerHTML = texts[currentLang].role;

        // DESCRIPTION
        document.querySelectorAll('.project-description').forEach((p, i) => {
            p.innerHTML = texts[currentLang].description[i];
        });

        // SECTION TITLES
        document.querySelector('#project h2').textContent = texts[currentLang].sections.core;
        document.querySelector('#contact h2').textContent = texts[currentLang].sections.contact;

        updateLangButton();
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        translate();
    });

    translate();
});
