document.addEventListener('DOMContentLoaded', () => {
    const toggleLangButton = document.getElementById('toggle-lang');
    const spanishHeader = document.getElementById('spanish-header');
    const englishHeader = document.getElementById('english-header');
    const spanishAboutMe = document.getElementById('spanish-about_me');
    const englishAboutMe = document.getElementById('english-about_me');

    toggleLangButton.addEventListener('click', () => {
        if (spanishHeader.style.display === 'none') {
            spanishHeader.style.display = 'block';
            englishHeader.style.display = 'none';
            spanishAboutMe.style.display = 'block';
            englishAboutMe.style.display = 'none';
        } else {
            spanishHeader.style.display = 'none';
            englishHeader.style.display = 'block';
            spanishAboutMe.style.display = 'none';
            englishAboutMe.style.display = 'block';
        }
    });
});
