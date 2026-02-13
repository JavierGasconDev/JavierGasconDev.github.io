document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navLinks = document.querySelectorAll('.navbar nav a');

    let currentLang = 'en';

    const texts = {
        en: {
            nav: ['Home', 'Development', 'Resume', 'Contact'],
            title: 'Unity Junior Programmer Pathway',
            role: 'Primary Focus: <b>Unity Learning & Prototyping</b>',
            contact: 'You can reach me via email at: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            description: [
                'I am currently deepening my game development skills by following the official <b>Unity Junior Programmer Pathway</b>. This comprehensive course covers the fundamentals of programming in C# and game development within the Unity engine. Through this pathway, I am building a strong foundation in writing clean, efficient code and understanding the core systems of Unity.',
                'The pathway involves creating multiple <b>prototypes</b> that focus on specific mechanics, such as player control, physics interactions, spawn management, and user interface design.'
            ],
            sections: {
                core: 'Core Learning Outcomes',
                contact: 'Contact'
            },
            contributions: [
                {
                    title: 'C# Programming & Scripting',
                    intro: 'A major part of this pathway is mastering C# in the context of Unity. I have been working on:',
                    bullets: [
                        '<b>Variables and Methods:</b> Understanding the building blocks of scripts to control game object behavior.',
                        '<b>Control Flow:</b> Implementing logic using if-statements, loops, and switch cases to create dynamic gameplay.',
                        '<b>Object-Oriented Programming (OOP):</b> Applying principles like inheritance, encapsulation, and polymorphism to create modular and scalable code bases.'
                    ],
                    outro: 'This ensures that the code I write is not only functional but also maintainable and ready for more complex projects.'
                },
                {
                    title: 'Unity Engine Fundamentals',
                    intro: 'Beyond coding, I am gaining hands-on experience with the Unity Editor and its various subsystems:',
                    bullets: [
                        '<b>Physics and Collisions:</b> Using Rigidbody components and Colliders to simulate realistic physical interactions and trigger events.',
                        '<b>Input Handling:</b> Implementing player controls using both the legacy input manager and the new Input System.',
                        '<b>User Interface (UI):</b> Designing and programming menus, health bars, and score displays.',
                        '<b>Scene Management:</b> Handling game states, level transitions, and object instantiation/destruction.'
                    ],
                    outro: 'These prototypes serve as a practical application of theoretical concepts, allowing me to experiment and learn through doing.'
                }
            ]
        },
        es: {
            nav: ['Inicio', 'Trabajo', 'Currículum', 'Contacto'],
            title: 'Unity Junior Programmer Pathway',
            role: 'Enfoque Principal: <b>Aprendizaje de Unity y Prototipado</b>',
            contact: 'Puedes contactarme vía email en: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            description: [
                'Actualmente estoy profundizando mis habilidades de desarrollo de videojuegos siguiendo el <b>Unity Junior Programmer Pathway</b> oficial. Este curso integral cubre los fundamentos de la programación en C# y el desarrollo de juegos dentro del motor Unity. A través de este camino, estoy construyendo una base sólida en la escritura de código limpio y eficiente, así como en la comprensión de los sistemas centrales de Unity.',
                'El camino implica la creación de múltiples <b>prototipos</b> que se centran en mecánicas específicas, como el control del jugador, las interacciones físicas, la gestión de apariciones (spawning) y el diseño de la interfaz de usuario.'
            ],
            sections: {
                core: 'Resultados Principales de Aprendizaje',
                contact: 'Contacto'
            },
            contributions: [
                {
                    title: 'Programación en C# y Scripting',
                    intro: 'Una parte importante de este camino es dominar C# en el contexto de Unity. He estado trabajando en:',
                    bullets: [
                        '<b>Variables y Métodos:</b> Comprensión de los bloques de construcción de los scripts para controlar el comportamiento de los objetos del juego.',
                        '<b>Flujo de Control:</b> Implementación de lógica mediante sentencias if, bucles y switch para crear una jugabilidad dinámica.',
                        '<b>Programación Orientada a Objetos (POO):</b> Aplicación de principios como herencia, encapsulamiento y polimorfismo para crear bases de código modulares y escalables.'
                    ],
                    outro: 'Esto asegura que el código que escribo no solo sea funcional, sino también mantenible y listo para proyectos más complejos.'
                },
                {
                    title: 'Fundamentos del Motor Unity',
                    intro: 'Más allá de la programación, estoy adquiriendo experiencia práctica con el Editor de Unity y sus diversos subsistemas:',
                    bullets: [
                        '<b>Físicas y Colisiones:</b> Uso de componentes Rigidbody y Colliders para simular interacciones físicas realistas y activar eventos.',
                        '<b>Manejo de Entrada:</b> Implementación de controles del jugador utilizando tanto el gestor de entrada heredado como el nuevo Input System.',
                        '<b>Interfaz de Usuario (UI):</b> Diseño y programación de menús, barras de salud y visualización de puntuaciones.',
                        '<b>Gestión de Escenas:</b> Manejo de estados del juego, transiciones de nivel e instanciación/destrucción de objetos.'
                    ],
                    outro: 'Estos prototipos sirven como una aplicación práctica de conceptos teóricos, permitiéndome experimentar y aprender haciendo.'
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
