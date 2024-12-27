

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, { threshold: 0.2 }); // Puedes ajustar el umbral según sea necesario

    const elements = document.querySelectorAll(".about_me-container");
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animate__animated');
        const viewportHeight = window.innerHeight;

        elements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < viewportHeight - 100) {
                element.classList.add('scroll-in');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll(".skill-logo");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const logo = entry.target;
                setTimeout(() => {
                    logo.classList.add("in-view");
                }, Array.from(logos).indexOf(logo) * 200); // Ajusta el intervalo de tiempo entre cada animación
                observer.unobserve(logo); // Dejar de observar una vez que la animación se haya activado
            }
        });
    }, { threshold: 0.1 });

    logos.forEach((logo) => {
        observer.observe(logo);
    });
});
