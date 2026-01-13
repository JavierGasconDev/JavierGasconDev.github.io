document.addEventListener('DOMContentLoaded', function() {
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
                'My background in Multimedia Engineering has provided me with a solid foundation in programming fundamentals, object-oriented design, data structures, and system logic. Through academic and personal projects, I have applied these principles to develop robust software systems, including game mechanics, tools, and engine-level features.',
                'This website serves as my personal portfolio, showcasing the video games I have contributed to as a programmer. Feel free to explore the projects section to learn more about my involvement and the technologies I\'ve utilized.',
                'My core skills include proficiency in C# and C++, experience with game engines like Unity and Unreal Engine 5, and a strong understanding of game development principles for both Mobile and PC platforms. I am accustomed to working under deadlines and possess a solid understanding of the video game development pipeline. Dive into the skills section below for a detailed breakdown.'
            ],
            skills: [
                'Mobile Game Development', 'Focused experience in developing games for <b>mobile platforms (iOS and Android)</b> using Unity, including considerations for touch controls, mobile-specific performance optimizations, and deployment processes.',
                'PC Platformer Development', 'Dedicated experience in developing <b>2D and 3D platformer games for PC</b>, utilizing both Unity and exploring Unreal Engine 5. Familiar with mechanics, level design principles, and control schemes specific to PC gaming.',
                'Unity', 'Proficient in <b>mobile game development</b> and <b>PC platformer development</b> using Unity. Experienced in <b>C# scripting</b>, <b>UI/UX design</b>, and optimizing for performance on various platforms. Participated in multiple <b>Game Jams</b>.',
                'Unreal Engine 5', 'Developing skills in Unreal Engine 5, with a focus on its application in <b>PC game development</b>. Exploring features like <b>Blueprints</b>, <b>C++ integration</b>, and high-fidelity graphics for platformer games.',
                'C++', 'Strong foundation in C++, particularly relevant for <b>game engine architecture</b> and performance-critical systems. Experience with <b>Memory Management</b> and <b>ECS (Entity Component System)</b>, having built a game from scratch in C++.',
                'C#', 'Extensive experience with C# primarily within the <b>Unity</b> ecosystem for scripting game logic, creating interactive elements, and managing game states for both <b>mobile</b> and <b>PC platformer</b> projects.'
            ],
            contact: 'You can reach me via email at: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a> Or through my social media:',
            projects: {
                'proj-borova': {
                    title: 'Borova: The Forsaken Village',
                    description: 'My Final Degree Project: a psychological horror and mystery video game developed using Unreal Engine 5, incorporating C++ and Blueprints for gameplay mechanics and environmental storytelling.'
                },
                'proj-relicraider': {
                    title: 'Relic Raider',
                    description: 'University group project involving the creation of a custom game engine in C++ from the ground up, used to develop a video game with mechanics similar to Zelda: Link\'s Awakening.'
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
                'Apasionado <b>Programador de Desarrollo de Videojuegos</b> con fuertes habilidades en Unreal Engine 5 y Unity. Mi formación en Ingeniería Multimedia me ha proporcionado una base sólida y experiencia en programación de mecánicas y sistemas de juegos a través de varios proyectos universitarios. Estoy buscando activamente roles de Programador en desarrollo de juegos para Móvil y PC, usando Unity o Unreal Engine.',
                'Este sitio web sirve como mi portafolio personal, mostrando los videojuegos a los que he contribuido como programador. Siéntete libre de explorar la sección de proyectos para conocer más sobre mi participación y las tecnologías que he utilizado.',
                'Mis habilidades principales incluyen dominio de C# y C++, experiencia con motores de juego como Unity y Unreal Engine 5, y un sólido entendimiento de los principios de desarrollo de videojuegos para plataformas móviles y PC. Estoy acostumbrado a trabajar bajo plazos y poseo una sólida comprensión del pipeline de desarrollo de videojuegos. Explora la sección de habilidades a continuación para un desglose detallado.'
            ],
            skills: [
                'Desarrollo de Juegos Móviles', 'Experiencia enfocada en desarrollar juegos para <b>plataformas móviles (iOS y Android)</b> usando Unity, incluyendo consideraciones de controles táctiles, optimizaciones de rendimiento específicas para móvil y procesos de despliegue.',
                'Desarrollo de Plataformas para PC', 'Experiencia dedicada al desarrollo de <b>juegos de plataformas 2D y 3D para PC</b>, utilizando tanto Unity como explorando Unreal Engine 5. Familiarizado con mecánicas, principios de diseño de niveles y esquemas de control específicos para juegos de PC.',
                'Unity', 'Competente en <b>desarrollo de juegos móviles</b> y <b>desarrollo de plataformas para PC</b> usando Unity. Experiencia en <b>scripting con C#</b>, <b>diseño UI/UX</b>, y optimización para rendimiento en varias plataformas. Participación en múltiples <b>Game Jams</b>.',
                'Unreal Engine 5', 'Desarrollando habilidades en Unreal Engine 5, con enfoque en su aplicación en <b>desarrollo de juegos para PC</b>. Explorando características como <b>Blueprints</b>, <b>integración con C++</b> y gráficos de alta fidelidad para juegos de plataformas.',
                'C++', 'Sólida base en C++, particularmente relevante para <b>arquitectura de motores de juego</b> y sistemas críticos de rendimiento. Experiencia con <b>gestión de memoria</b> y <b>ECS (Entity Component System)</b>, habiendo construido un juego desde cero en C++.',
                'C#', 'Amplia experiencia con C# principalmente dentro del ecosistema <b>Unity</b> para scripting de lógica de juegos, creación de elementos interactivos y gestión de estados de juego tanto para proyectos de <b>móvil</b> como <b>plataformas PC</b>.'
            ],
            contact: 'Puedes contactarme vía email en: <a href="mailto:javier.gascon.14@gmail.com">javier.gascon.14@gmail.com</a> O a través de mis redes sociales:',
            projects: {
                'proj-borova': {
                    title: 'Borova: The Forsaken Village',
                    description: 'Mi Proyecto de Fin de Grado se trata de un videojuego de terror psicológico y misterio desarrollado en Unreal Engine 5, usando C++ y Blueprints para las mecánicas de juego y la narrativa ambiental.'
                },
                'proj-relicraider': {
                    title: 'Relic Raider',
                    description: 'Proyecto grupal universitario que consistió en la creación de un motor de juego personalizado en C++ desde cero. Ello para desarrollar un videojuego con mecánicas similares a Zelda: Link\'s Awakening.'
                }
            }
        }
    };

    let currentLang = 'en'; // idioma inicial

    // --- Cambio de idioma ---
    langToggle.addEventListener('click', function() {
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
            skill.querySelector('h3').textContent = texts[currentLang].skills[i*2];
            skill.querySelector('p').innerHTML = texts[currentLang].skills[i*2 + 1];
        });

        // Cambiar contacto
        document.querySelector('.contact-text').innerHTML = texts[currentLang].contact;

        // Cambiar títulos de sección
        document.getElementById('skills-title').textContent =texts[currentLang].sections.skills;

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
});
