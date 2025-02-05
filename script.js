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
