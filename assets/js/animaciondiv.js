

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, { threshold: 0.1 }); // Puedes ajustar el umbral según sea necesario

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
