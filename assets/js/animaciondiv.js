document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer para la sección About Me
    const aboutMeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, { threshold: 0.1 });

    const aboutMeElements = document.querySelectorAll(".about_me-container");
    aboutMeElements.forEach(element => {
        aboutMeObserver.observe(element);
    });

    // Scroll Animations
    window.addEventListener('scroll', function() {
        const animatedElements = document.querySelectorAll('.animate__animated');
        const viewportHeight = window.innerHeight;

        animatedElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < viewportHeight - 100) {
                element.classList.add('scroll-in');
            }
        });
    });

    // Intersection Observer para las logos de habilidades
    const skillLogos = document.querySelectorAll(".skill-logo");

    const skillLogoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const logo = entry.target;
                setTimeout(() => {
                    logo.classList.add("in-view");
                }, Array.from(skillLogos).indexOf(logo) * 200);
                observer.unobserve(logo);
            }
        });
    }, { threshold: 0.1 });

    skillLogos.forEach((logo) => {
        skillLogoObserver.observe(logo);
    });

    // Intersection Observer para las tarjetas de formación
    const cards = document.querySelectorAll(".card");

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const card = entry.target;
                setTimeout(() => {
                    card.classList.add("in-view");
                }, Array.from(cards).indexOf(card) * 200);
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
        cardObserver.observe(card);
    });
});
