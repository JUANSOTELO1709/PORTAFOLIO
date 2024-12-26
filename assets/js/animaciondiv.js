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
