document.addEventListener('DOMContentLoaded', () => {
    const toggleLangButton = document.getElementById('toggle-lang-about_me');
    const spanishAboutMe = document.getElementById('spanish-about_me');
    const englishAboutMe = document.getElementById('english-about_me');
    const spanishHeaderTitle = document.querySelector('#header .header_title');
    const englishHeaderTitle = document.querySelector('#english-header .header_title');

    toggleLangButton.addEventListener('click', () => {
        if (spanishAboutMe.style.display === 'none') {
            spanishAboutMe.style.display = 'block';
            englishAboutMe.style.display = 'none';
            spanishHeaderTitle.style.display = 'block';
            englishHeaderTitle.style.display = 'none';
        } else {
            spanishAboutMe.style.display = 'none';
            englishAboutMe.style.display = 'block';
            spanishHeaderTitle.style.display = 'none';
            englishHeaderTitle.style.display = 'block';
        }
    });
});
