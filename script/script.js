document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.navbar nav');
    const langToggle = document.getElementById('lang-toggle');


    // --- Textos en ambos idiomas ---
    const texts = {
        en: {
            nav: ['Profile', 'Skills', 'Projects', 'Resume', 'Contact'],
            sections: {
                skills: 'Skills',
                projects: 'Personal Projects',
                contact: 'Contact'
            },
            home: [
                'Software Programmer with a background in Multimedia Engineering, focused on problem-solving, system design, and developing interactive applications using C++, C#, and Java.',
                'This website serves as my personal portfolio, showcasing the video games I have contributed to as a programmer. Feel free to explore the projects section to learn more about my involvement and the technologies I\'ve utilized.'
            ],
            skills: [
                'Software Development',
                'Experience designing and implementing software systems with a focus on clean code, problem-solving, and maintainability across academic and personal projects.',

                'Game & Interactive Development',
                'Hands-on experience developing interactive applications and games for PC and mobile platforms, applying real-time logic, system design, and performance considerations.',

                'Game Engines (Unity & Unreal Engine 5)',
                'Experience working with Unity (C#) and Unreal Engine 5 (C++/Blueprints), developing gameplay systems, tools, and real-time interactive features.',

                'C++',
                'Solid foundation in C++ with experience in object-oriented programming, memory management, and performance-oriented system design.',

                'C#',
                'Proficient in C# for developing application logic, game systems, and tools, mainly within Unity-based projects.',

                'Java',
                'Experience using Java for software development, applying object-oriented principles, data structures, and problem-solving in academic projects.'
            ],
            contact: 'You can reach me via email at: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            projects: {

                'proj-borova': {
                    title: 'Borova: The Forsaken Village',
                    description: 'My Final Degree Project: a psychological horror and mystery video game developed using Unreal Engine 5, incorporating C++ and Blueprints for gameplay mechanics and environmental storytelling.'
                },
                'proj-relicraider': {
                    title: 'Relic Raider',
                    description: 'University group project involving the creation of a custom game engine in C++ from the ground up, used to develop a video game with mechanics similar to Zelda: Link\'s Awakening.'
                },
                'proj-unity-pathway': {
                    title: 'Unity Junior Programmer Pathway',
                    description: 'Currently focusing on expanding my game development skills by following the Unity Junior Programmer Pathway. I am developing multiple prototypes to master the engine\'s mechanics, physics, and programming patterns.'
                }
            }
        },
        es: {
            nav: ['Perfil', 'Habilidades', 'Proyectos', 'Currículum', 'Contacto'],
            sections: {
                skills: 'Habilidades',
                projects: 'Proyectos Personales',
                contact: 'Contacto'
            },
            home: [
                'Programador de software con formación en Ingeniería Multimedia, enfocado en la resolución de problemas, el diseño de sistemas y el desarrollo de aplicaciones interactivas utilizando C++, C# y Java.',
                'Este sitio web sirve como mi portafolio personal, mostrando los videojuegos a los que he contribuido como programador. Siéntete libre de explorar la sección de proyectos para conocer más sobre mi participación y las tecnologías que he utilizado.'
            ],
            skills: [
                'Desarrollo de Software',
                'Experiencia en el diseño e implementación de sistemas de software, con enfoque en código limpio, resolución de problemas y mantenibilidad.',

                'Desarrollo de Juegos e Interactivo',
                'Experiencia práctica en el desarrollo de aplicaciones interactivas y videojuegos para PC y móvil, aplicando lógica en tiempo real y diseño de sistemas.',

                'Motores de Juego (Unity y Unreal Engine 5)',
                'Experiencia trabajando con Unity (C#) y Unreal Engine 5 (C++/Blueprints), desarrollando sistemas de gameplay, herramientas y funcionalidades interactivas en tiempo real.',

                'C++',
                'Base sólida en C++ con experiencia en programación orientada a objetos, gestión de memoria y diseño de sistemas eficientes.',

                'C#',
                'Dominio de C# para el desarrollo de lógica de aplicaciones, sistemas de juego y herramientas, principalmente en proyectos con Unity.',

                'Java',
                'Experiencia con Java en el desarrollo de software, aplicando principios de programación orientada a objetos, estructuras de datos y resolución de problemas.'
            ],
            contact: 'Puedes contactarme vía email en: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a>',
            projects: {

                'proj-borova': {
                    title: 'Borova: The Forsaken Village',
                    description: 'Mi Proyecto de Fin de Grado se trata de un videojuego de terror psicológico y misterio desarrollado en Unreal Engine 5, usando C++ y Blueprints para las mecánicas de juego y la narrativa ambiental.'
                },
                'proj-relicraider': {
                    title: 'Relic Raider',
                    description: 'Proyecto grupal universitario que consistió en la creación de un motor de juego personalizado en C++ desde cero. Ello para desarrollar un videojuego con mecánicas similares a Zelda: Link\'s Awakening.'
                },
                'proj-unity-pathway': {
                    title: 'Unity Junior Programmer Pathway',
                    description: 'Actualmente enfocado en ampliar mis habilidades de desarrollo de videojuegos siguiendo el Unity Junior Programmer Pathway. Estoy desarrollando múltiples prototipos para dominar las mecánicas, físicas y patrones de programación del motor.'
                }
            }
        }
    };

    let currentLang = 'en'; // idioma inicial

    // --- Cambio de idioma ---
    langToggle.addEventListener('click', function () {
        currentLang = currentLang === 'en' ? 'es' : 'en';

        // Cambiar texto del botón
        langToggle.textContent = currentLang === 'en' ? 'Español' : 'English';

        // Cambiar nav
        navMenu.querySelectorAll('a').forEach((link, i) => {
            link.textContent = texts[currentLang].nav[i];
        });

        // Cambiar home
        document.querySelectorAll('.home-content .description').forEach((p, i) => {
            p.innerHTML = texts[currentLang].home[i];
        });

        // Cambiar skills
        document.querySelectorAll('.skills-container .skill').forEach((skill, i) => {
            skill.querySelector('h3').textContent = texts[currentLang].skills[i * 2];
            skill.querySelector('p').innerHTML = texts[currentLang].skills[i * 2 + 1];
        });

        // Cambiar contacto
        document.querySelector('.contact-text').innerHTML = texts[currentLang].contact;

        // Cambiar títulos de sección
        document.getElementById('skills-title').textContent = texts[currentLang].sections.skills;

        document.getElementById('projects-title').textContent = texts[currentLang].sections.projects;

        document.getElementById('contact-title').textContent = texts[currentLang].sections.contact;

        // Cambiar proyectos
        for (const [projId, content] of Object.entries(texts[currentLang].projects)) {
            const proj = document.getElementById(projId);
            if (proj) {
                proj.querySelector('h3').textContent = content.title;
                proj.querySelector('p').innerHTML = content.description;
            }
        }
    });
    // Scroll Animation - Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll('.skill, .project-card, .contribution-item, .home-content, h2, .contact-text, .section-title');
    elementsToAnimate.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
