const header = document.getElementById("header");
const navBurguer = document.querySelector(".nav_burguer");
const navBurguerLine1 = document.querySelector(".nav_burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav_burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav_burguer-line-3");
const itemContainer = document.querySelector(".items_container");
const menuItems = document.querySelectorAll(".menuItems");
const backgroundBlur = document.querySelector(".background_blur");

const showNavMenu = () => {
    navBurguerLine1.classList.toggle("active");
    navBurguerLine2.classList.toggle("active");
    navBurguerLine3.classList.toggle("active");
    itemContainer.classList.toggle("active");
    backgroundBlur.classList.toggle("active");
}

navBurguer.addEventListener("click", () => {
    showNavMenu();
})

menuItems.forEach((items)=>{
    items.addEventListener("click", () => {
        showNavMenu();
    } )
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
})

// Descargar HV al hacer click en el botón
const downloadButtons = document.querySelectorAll('.download_button');
downloadButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    let isEnglish = btn.closest('.principal_one').parentElement.id === 'english-principal';
    let fileName = isEnglish ? 'HVENGL.pdf' : 'HV.pdf';
    let link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


// Modal para certificados en estudios
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const closeCertModal = document.getElementById('closeCertModal');

const certButtons = document.querySelectorAll('.cert_button');
certButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // Evita doble click por propagación
    const certSrc = btn.getAttribute('data-cert');
    if(certSrc.endsWith('.pdf')) {
      window.open(certSrc, '_blank');
      return;
    }
    certModalImg.src = certSrc;
    certModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }, { passive: false });
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

function updateCertButtonListeners() {
  const certButtons = document.querySelectorAll('.cert_button');
  certButtons.forEach(btn => {
    btn.onclick = function(e) {
      e.preventDefault();
      const certSrc = btn.getAttribute('data-cert');
      if(certSrc.endsWith('.pdf')) {
        window.open(certSrc, '_blank');
        return;
      }
      certModalImg.src = certSrc;
      certModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };
  });
}
updateCertButtonListeners();

// Si el idioma cambia dinámicamente, actualizar listeners después del cambio
const langButton = document.getElementById('toggle-lang-about_me');
if(langButton) {
  langButton.addEventListener('click', () => {
    setTimeout(updateCertButtonListeners, 100); // Espera a que el DOM cambie
  });
}


