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
                'Developed entirely within <b>Unreal Engine 5</b>.'
            ],
            sections: {
                core: 'Core Development Work',
                contact: 'Contact'
            },
            contributions: [
                {
                    title: 'Core Gameplay Mechanics & Narrative Integration',
                    intro: 'I was responsible for designing and implementing the core gameplay mechanics that drive the player experience in Borova. This involved:',
                    bullets: [
                        '<b>Player Movement and Interaction:</b> Implementing smooth first-person controls, object interaction systems, and puzzle mechanics using both C++ and Blueprints.',
                        '<b>Narrative Delivery Systems:</b> Developing systems for environmental storytelling, notes, documents, and narrative flow.',
                        '<b>Inventory and Item Management:</b> Creating a functional inventory system for puzzle solving and progression.'
                    ],
                    outro: 'A key focus was ensuring that the gameplay mechanics seamlessly integrated with the narrative.'
                },
                {
                    title: 'Psychological Horror Elements & Puzzles',
                    intro: 'To achieve the desired psychological horror experience, I designed and implemented various elements, including:',
                    bullets: [
                        '<b>Puzzle Integration:</b> Thematically relevant puzzles tied to exploration and narrative.',
                        '<b>Atmospheric Sound Design Implementation:</b> Implementing audio systems to enhance tension and unease.',
                        '<b>Visual and Subtle Horror Techniques:</b> Environmental changes and subtle effects instead of pure jump scares.'
                    ],
                    outro: 'The focus was on creating a sustained atmosphere of dread and suspense.'
                }
            ]
        },
        es: {
            nav: ['Inicio', 'Trabajo', 'Currículum', 'Contacto'],
            title: 'Borova: The Forsaken Village',
            role: 'Rol principal: <b>Desarrollador Principal</b>',
            description: [
                '<b>Borova: The Forsaken Village</b> es mi Proyecto de Fin de Grado, un videojuego de terror psicológico y misterio en primera persona desarrollado con Unreal Engine. El juego se centra en la exploración, la narrativa ambiental y el descubrimiento de una historia oscura dentro de un pueblo aislado e inquietante. Los jugadores recorren los paisajes inquietantes de Borova, reuniendo pistas y enfrentándose a desafíos psicológicos para descubrir los secretos ocultos del pueblo y el destino de sus habitantes.',
                'Desarrollado íntegramente en <b>Unreal Engine 5</b>.'
            ],
            sections: {
                core: 'Trabajo Principal del Desarrollo',
                contact: 'Contacto'
            },
            contributions: [
                {
                    title: 'Mecánicas de Juego Principales e Integración Narrativa',
                    intro: 'Fui responsable de diseñar e implementar las mecánicas principales que definen la experiencia del jugador en Borova:',
                    bullets: [
                        '<b>Movimiento e Interacción del Jugador:</b> Controles en primera persona, interacción con objetos y puzles.',
                        '<b>Sistemas de Narrativa:</b> Narrativa ambiental, notas y control del flujo de información.',
                        '<b>Inventario y Gestión de Objetos:</b> Sistema de inventario para progresión y resolución de puzles.'
                    ],
                    outro: 'El objetivo principal fue integrar jugabilidad y narrativa de forma coherente.'
                },
                {
                    title: 'Elementos de Terror Psicológico y Puzles',
                    intro: 'Para lograr una experiencia de terror psicológico, diseñé e implementé:',
                    bullets: [
                        '<b>Diseño de Puzles:</b> Puzles coherentes con la narrativa.',
                        '<b>Implementación de Sonido Ambiental:</b> Uso del sistema de audio para generar tensión.',
                        '<b>Técnicas Visuales Sutiles:</b> Cambios ambientales y efectos psicológicos.'
                    ],
                    outro: 'El enfoque fue mantener una atmósfera constante de inquietud y suspense.'
                }
            ]
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

        // CONTRIBUTIONS
        document.querySelectorAll('.contribution-item').forEach((item, i) => {
            const data = texts[currentLang].contributions[i];
            item.querySelector('h3').textContent = data.title;
            item.querySelector('p').textContent = data.intro;

            const lis = item.querySelectorAll('ul li');
            lis.forEach((li, index) => {
                li.innerHTML = data.bullets[index];
            });

            item.querySelectorAll('p')[1].textContent = data.outro;
        });

        updateLangButton();
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        translate();
    });

    translate();
});
