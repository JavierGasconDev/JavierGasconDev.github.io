document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navLinks = document.querySelectorAll('.navbar nav a');
    const healthBarFill = document.getElementById('health-bar-fill');
    const healthBarText = document.getElementById('health-bar-text');

    let currentLang = 'en';

    const texts = {
        en: {
            nav: ['Home', 'Development', 'Resume', 'Contact'],
            title: 'Unity Junior Programmer Pathway',
            projectInfo: [
                'Primary Focus: <b>Unity Learning & Prototyping</b>'
            ],
            description: [
                'I am currently deepening my game development skills by following the official Unity Junior Programmer Pathway. This comprehensive course covers the fundamentals of programming in C# and game development within the Unity engine. Through this pathway, I am building a strong foundation in writing clean, efficient code and understanding the core systems of Unity.',
                'The pathway involves creating multiple prototypes that focus on specific mechanics, such as player control, physics interactions, spawn management, and user interface design.'
            ],
            sections: {
                core: 'Core Learning Outcomes',
                contact: 'Contact'
            },
            contact: 'You can reach me via email at: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
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
            projectInfo: [
                'Foco Principal: <b>Aprendizaje de Unity y Prototipado</b>'
            ],
            description: [
                'Actualmente estoy profundizando mis habilidades de desarrollo de videojuegos siguiendo el "Unity Junior Programmer Pathway" oficial. Este completo curso abarca los fundamentos de la programación en C# y el desarrollo de juegos dentro del motor de Unity. A través de esta formación, estoy construyendo una base sólida en la redacción de código limpio y eficiente, así como en la comprensión de los sistemas centrales de Unity.',
                'El curso implica la creación de múltiples prototipos centrados en mecánicas específicas, como el control del jugador, las interacciones físicas, la gestión de la generación (spawn) de objetos y el diseño de la interfaz de usuario.'
            ],
            sections: {
                core: 'Resultados de Aprendizaje Principales',
                contact: 'Contacto'
            },
            contact: 'Puedes contactarme vía email en: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            contributions: [
                {
                    title: 'Programación y Scripting en C#',
                    intro: 'Una gran parte de este aprendizaje consiste en dominar C# en el contexto de Unity. He estado trabajando en:',
                    bullets: [
                        '<b>Variables y Métodos:</b> Comprensión de los bloques fundamentales de los scripts para controlar el comportamiento de los objetos del juego.',
                        '<b>Control de Flujo (Lógica):</b> Implementación de lógica utilizando sentencias if, bucles y casos switch para crear un gameplay dinámico.',
                        '<b>Programación Orientada a Objetos (POO):</b> Aplicación de principios como la herencia, el encapsulamiento y el polimorfismo para crear bases de código modulares y escalables.'
                    ],
                    outro: 'Esto asegura que el código que escribo no solo es funcional, sino también mantenible y preparado para proyectos más complejos.'
                },
                {
                    title: 'Fundamentos del Motor Unity',
                    intro: 'Más allá de codificar, estoy adquiriendo experiencia práctica con el Editor de Unity y sus diversos subsistemas:',
                    bullets: [
                        '<b>Física y Colisiones:</b> Uso de componentes Rigidbody y Colliders para simular interacciones físicas reales y activar eventos (triggers).',
                        '<b>Gestión de Entrada (Input):</b> Implementación de los controles del jugador utilizando tanto el Input Manager clásico como el nuevo Input System.',
                        '<b>Interfaz de Usuario (UI):</b> Diseño y programación de menús, barras de vida y marcadores de puntuación.',
                        '<b>Gestión de Escenas:</b> Manejo de estados del juego, transición entre niveles, e instanciación/destrucción de objetos.'
                    ],
                    outro: 'Estos prototipos sirven como una aplicación práctica de los conceptos teóricos, permitiéndome experimentar y aprender mediante la práctica.'
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

        // PROJECT INFO
        const infoItems = document.querySelectorAll('.info-item p');
        infoItems.forEach((p, i) => {
            p.innerHTML = texts[currentLang].projectInfo[i];
        });

        // DESCRIPTION
        document.querySelectorAll('.project-description').forEach((p, i) => {
            if (texts[currentLang].description[i]) p.innerHTML = texts[currentLang].description[i];
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
                if(data.bullets[index]) li.innerHTML = data.bullets[index];
            });

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

    // Animations logic
    const faders = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    faders.forEach(fader => {
        fadeObserver.observe(fader);
    });

    // Health Bar Logic
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        if(healthBarFill) healthBarFill.style.width = scrollPercent + '%';
        if(healthBarText) {
            const currentHP = Math.round(scrollPercent);
            healthBarText.textContent = `HP: ${currentHP}/100`;
        }
    });
});
