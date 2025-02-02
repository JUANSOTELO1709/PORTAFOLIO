document.addEventListener('DOMContentLoaded', () => {
    const toggleLangButton = document.getElementById('toggle-lang-about_me');
    const spanishAboutMe = document.getElementById('spanish-about_me');
    const englishAboutMe = document.getElementById('english-about_me');
    const spanishSkills = document.getElementById('spanish-skills');
    const englishSkills = document.getElementById('english-skills');
    const spanishStudies = document.getElementById('spanish-studies');
    const englishStudies = document.getElementById('english-studies');
    const spanishPrincipal = document.getElementById('spanish-principal');
    const englishPrincipal = document.getElementById('english-principal');

    toggleLangButton.addEventListener('click', () => {
        if (spanishAboutMe.style.display === 'none') {
            spanishAboutMe.style.display = 'block';
            englishAboutMe.style.display = 'none';
            spanishSkills.style.display = 'block';
            englishSkills.style.display = 'none';
            spanishStudies.style.display = 'block';
            englishStudies.style.display = 'none';
            spanishPrincipal.style.display = 'block';
            englishPrincipal.style.display = 'none';
        } else {
            spanishAboutMe.style.display = 'none';
            englishAboutMe.style.display = 'block';
            spanishSkills.style.display = 'none';
            englishSkills.style.display = 'block';
            spanishStudies.style.display = 'none';
            englishStudies.style.display = 'block';
            spanishPrincipal.style.display = 'none';
            englishPrincipal.style.display = 'block';
        }
    });
});
