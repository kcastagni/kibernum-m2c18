document.addEventListener("DOMContentLoaded", function() {

    // Scroll
    const secciones = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    secciones.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Trayectoria
    const items = document.querySelectorAll('.trayectoria-item');

    const observerOptions = {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            } else {
                entry.target.classList.remove('is-active');
            }
        });
    }, observerOptions);

    items.forEach(item => observer.observe(item));


    // Modo osucro
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
    
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });


  // Validación formulario
    const form = document.getElementById('contact-form');
    const textInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const tareaInput = document.getElementById('mensaje');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nombre = textInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = tareaInput.value.trim();

        // Mostrar datos en consola
        console.log("--- Formulario Recibido ---");
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Mensaje:", mensaje);

        // Validación de campos vacíos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo válido.");
            return;
        }

        // Éxito
        alert("¡Tus datos han sido validados correctamente!");
        form.reset(); 
    });

    // Botón Habilidades    

    const btnColorHab = document.getElementById('btn-color-habilidades');
    const seccionHabilidades = document.getElementById('habilidades');

    btnColorHab.addEventListener('click', () => {

        seccionHabilidades.classList.toggle('habilidades-alternativo');
        
        // Biotón
        btnColorHab.style.transform = "scale(0.9)";
        setTimeout(() => btnColorHab.style.transform = "scale(1)", 100);
    });

    

});