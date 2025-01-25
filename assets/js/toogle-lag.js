document.addEventListener('DOMContentLoaded', () => {
    const toggleLangButton = document.getElementById('toggle-lang-about_me');
    const spanishAboutMe = document.getElementById('spanish-about_me');
    const englishAboutMe = document.getElementById('english-about_me');

    toggleLangButton.addEventListener('click', () => {
        if (spanishAboutMe.style.display === 'none') {
            spanishAboutMe.style.display = 'block';
            englishAboutMe.style.display = 'none';
        } else {
            spanishAboutMe.style.display = 'none';
            englishAboutMe.style.display = 'block';
        }
    });
});
