document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navLinks = document.querySelectorAll('.navbar nav a');

    let currentLang = 'en';

    const texts = {
        en: {
            nav: ['Home', 'Work', 'Resume', 'Contact'],
            title: 'Relic Raider',
            projectInfo: [
                'Project Type: <b>University Group Project</b>',
                'Role: <b>Engine Programmer, Gameplay Programmer</b>'
            ],
            description: [
                '<b>Relic Raider</b> was a challenging and rewarding university group project focused on the creation of a custom 3D game engine built from scratch using <b>C++</b>. This engine was then used to develop a fully playable video game with mechanics inspired by <b>Zelda: Link\'s Awakening</b>. The project involved a deep understanding of low-level programming concepts, game engine architecture, and collaborative teamwork to bring a complex vision to life.',
                'Our custom engine handled core functionalities such as rendering, input management, collision detection, and basic game object management. Developing the game on top of this engine provided invaluable experience in understanding the inner workings of game development and the crucial interplay between engine and game code.'
            ],
            sections: {
                core: 'Core Development Work',
                contact: 'Contact'
            },
            contact: 'You can reach me via email at: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            contributions: [
                {
                    title: 'Custom Game Engine Development',
                    intro: 'As part of the team, my contributions to the custom game engine included:',
                    bullets: [
                        '<b>Input Management:</b> Developing the input system to capture keyboard and potentially gamepad inputs, and providing an interface for the game logic to access these inputs.',
                        '<b>Collision Detection:</b> Implementing a fundamental collision detection system to handle interactions between game objects. This involved AABB (Axis-Aligned Bounding Box) collision detection.',
                        '<b>Game Object Management:</b> Contributing to the architecture for managing game entities, their properties, and their lifecycle within the engine.'
                    ]
                },
                {
                    title: 'Gameplay Mechanics Implementation',
                    intro: 'My work also extended to developing specific gameplay mechanics for Relic Raider, drawing inspiration from Zelda: Link\'s Awakening:',
                    bullets: [
                        '<b>Character Control:</b> Implementing the player character\'s movement, and basic actions using the engine\'s input system.',
                        '<b>World Interaction:</b> Developing systems for interacting with the game world, such as object manipulation, item collection, and potentially basic puzzle elements.',
                        '<b>Combat System:</b> Implementing a rudimentary combat system, allowing the player to interact with enemies.',
                        '<b>Level Integration:</b> Working on integrating level designs and assets into the game using the custom engine.'
                    ],
                    outro: 'This required translating the design concepts into functional C++ code that interacted with the underlying game engine.'
                }
            ]
        },
        es: {
            nav: ['Inicio', 'Trabajo', 'Currículum', 'Contacto'],
            title: 'Relic Raider',
            projectInfo: [
                'Tipo de proyecto: <b>Proyecto Universitario Grupal</b>',
                'Rol: <b>Programador de Motor, Programador de Gameplay</b>'
            ],
            description: [
                '<b>Relic Raider</b> fue un desafiante y gratificante proyecto universitario grupal centrado en la creación de un motor de juego 3D propio desde cero utilizando <b>C++</b>. Este motor se utilizó para desarrollar un videojuego completamente jugable con mecánicas inspiradas en <b>Zelda: Link\'s Awakening</b>. El proyecto requirió un profundo conocimiento de conceptos de programación de bajo nivel, arquitectura de motores de juego y trabajo en equipo para dar vida a una visión compleja.',
                'Nuestro motor personalizado gestionó funcionalidades principales como el renderizado, la gestión de entrada (input), la detección de colisiones y la gestión básica de objetos de juego. Desarrollar el juego sobre este motor proporcionó una experiencia invaluable para comprender el funcionamiento interno del desarrollo de videojuegos y la interacción crucial entre el código del motor y el del juego.'
            ],
            sections: {
                core: 'Trabajo Principal del Desarrollo',
                contact: 'Contacto'
            },
            contact: 'Puedes contactarme vía email en: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            contributions: [
                {
                    title: 'Desarrollo de Motor de Juego Propio',
                    intro: 'Como parte del equipo, mis contribuciones al motor de juego incluyeron:',
                    bullets: [
                        '<b>Gestión de Entrada (Input):</b> Desarrollo del sistema de entrada para capturar teclado y mandos, proporcionando una interfaz para que la lógica del juego acceda a estas entradas.',
                        '<b>Detección de Colisiones:</b> Implementación de un sistema fundamental de detección de colisiones para las interacciones entre objetos, utilizando AABB (Axis-Aligned Bounding Box).',
                        '<b>Gestión de Objetos de Juego:</b> Contribución a la arquitectura para gestionar entidades, sus propiedades y su ciclo de vida dentro del motor.'
                    ]
                },
                {
                    title: 'Implementación de Mecánicas de Juego',
                    intro: 'Mi trabajo también se extendió al desarrollo de mecánicas específicas para Relic Raider, inspiradas en Zelda: Link\'s Awakening:',
                    bullets: [
                        '<b>Control de Personaje:</b> Implementación del movimiento del jugador y acciones básicas utilizando el sistema de entrada del motor.',
                        '<b>Interacción con el Mundo:</b> Desarrollo de sistemas para interactuar con el entorno, como manipulación de objetos, recolección de ítems y elementos básicos de puzles.',
                        '<b>Sistema de Combate:</b> Implementación de un sistema de combate rudimentario para la interacción con enemigos.',
                        '<b>Integración de Niveles:</b> Trabajo en la integración de diseños de niveles y assets en el juego utilizando el motor propio.'
                    ],
                    outro: 'Esto requirió traducir conceptos de diseño en código C++ funcional que interactuara con el motor de juego subyacente.'
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
            if (texts[currentLang].nav[i]) link.textContent = texts[currentLang].nav[i];
        });

        // TITLE
        document.querySelector('#project h1').textContent = texts[currentLang].title;
        document.title = texts[currentLang].title;

        // PROJECT INFO (Role and Type)
        const infoItems = document.querySelectorAll('.info-item p');
        infoItems.forEach((p, i) => {
            p.innerHTML = texts[currentLang].projectInfo[i];
        });

        // DESCRIPTION
        document.querySelectorAll('.project-description').forEach((p, i) => {
            p.innerHTML = texts[currentLang].description[i];
        });

        // CONTACT
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

            // Handle optional "outro" paragraph
            const paragraphs = item.querySelectorAll('p');
            if (data.outro && paragraphs[1]) {
                paragraphs[1].textContent = data.outro;
            }
        });

        updateLangButton();
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        translate();
    });

    translate();
});