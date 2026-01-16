document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navLinks = document.querySelectorAll('.navbar nav a');

    let currentLang = 'en';

    const texts = {
        en: {
            nav: ['Home', 'Development', 'Resume', 'Contact'],
            title: 'Borova: The Forsaken Village',
            role: 'Primary Role: <b>Lead Developer</b>',
            contact: 'You can reach me via email at: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            description: [
                '<b>Borova: The Forsaken Village</b> is my Final Degree Project, a first-person psychological horror and mystery game developed using Unreal Engine, which received a final grade of <b>10/10</b>. The game focuses on exploration, environmental storytelling, and unraveling a dark narrative within an isolated and unsettling village. Players navigate the eerie landscapes of Borova, piecing together clues and facing psychological challenges to uncover the village\'s hidden secrets and the fate of its forsaken inhabitants.',
                'Developed entirely in <b>Unreal Engine 5</b>.'
            ],
            sections: {
                core: 'Core Development Work',
                contact: 'Contact'
            },
            contributions: [
                {
                    title: 'Core Gameplay Mechanics & Narrative Integration',
                    intro: 'As the sole developer of Borova, I was responsible for the complete design and implementation of the core gameplay mechanics that define the player experience, including:',
                    bullets: [
                        '<b>Player Movement and Interaction:</b> Implementing smooth first-person controls, object interaction systems, and puzzle mechanics.',
                        '<b>Enemy AI Design and Gameplay Behavior:</b> Designing and programming enemy artificial intelligence capable of detecting, pursuing, and attacking the player, using state-based behaviors and gameplay-driven decision logic.',
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
            role: 'Rol principal: <b>Desarrollador Único</b>',
            contact: 'Puedes contactarme vía email en: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
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
                    intro: 'Como desarrollador único del proyecto, fui responsable del diseño e implementación de todas las mecánicas principales de juego que definen la experiencia del jugador. Esto incluyó:',
                    bullets: [
                        '<b>Movimiento e Interacción del Jugador:</b> Implementación de controles en primera persona fluidos, sistemas de interacción con objetos y mecánicas de puzles',
                        '<b>Diseño de IA enemiga y Comportamiento de juego:</b> Diseño y programación de inteligencia artificial enemiga capaz de detectar, perseguir y atacar al jugador, usando comportamientos basados en estados y lógica de decisiones orientada al gameplay.',
                        '<b>Sistemas de Narrativa:</b> Desarrollo de sistemas para contar historias ambientales, notas, documentos y flujo narrativo.',
                        '<b>Inventario y Gestión de Objetos:</b> Creación de un sistema de inventario funcional para la resolución de puzzles y la progresión del juego.'
                    ],
                    outro: 'Un enfoque clave fue garantizar que las mecánicas de juego se integraran de manera fluida con la narrativa.'
                },
                {
                    "title": "Elementos de Horror Psicológico y Puzzles",
                    "intro": "Para lograr la experiencia de horror psicológico deseada, diseñé e implementé varios elementos, incluyendo:",
                    "bullets": [
                        "<b>Integración de Puzzles:</b> Puzzles temáticamente relevantes vinculados a la exploración y la narrativa.",
                        "<b>Implementación de Diseño Sonoro Atmosférico:</b> Sistemas de audio implementados para aumentar la tensión y la sensación de inquietud.",
                        "<b>Técnicas Visuales y Sutiles de Horror:</b> Cambios ambientales y efectos sutiles en lugar de sustos directos."
                    ],
                    "outro": "El enfoque se centró en crear una atmósfera sostenida de miedo y suspense."
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

        // Cambiar contacto
        document.querySelector('.contact-text').innerHTML = texts[currentLang].contact;

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
