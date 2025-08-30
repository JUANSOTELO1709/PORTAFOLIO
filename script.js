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

// Modal para certificados en estudios
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const closeCertModal = document.getElementById('closeCertModal');

const certButtons = document.querySelectorAll('.cert_button');
certButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const certSrc = btn.getAttribute('data-cert');
    if(certSrc.endsWith('.pdf')) {
      window.open(certSrc, '_blank');
      return;
    }
    certModalImg.src = certSrc;
    certModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});
closeCertModal.addEventListener('click', function() {
  certModal.style.display = 'none';
  certModalImg.src = '';
  document.body.style.overflow = '';
});
certModal.addEventListener('click', function(e) {
  if (e.target === certModal) {
    certModal.style.display = 'none';
    certModalImg.src = '';
    document.body.style.overflow = '';
  }
});
