document.getElementById('languageSelector').addEventListener('change', function() {
    var selectedLanguage = this.value;
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        if (project.id === selectedLanguage) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
});

// Animación de borde en .portfolio al hacer scroll
window.addEventListener('scroll', function() {
  var portfolio = document.querySelector('.portfolio');
  if (!portfolio) return;
  if (window.scrollY > 50) {
    portfolio.classList.add('scrolled');
  } else {
    portfolio.classList.remove('scrolled');
  }
});
