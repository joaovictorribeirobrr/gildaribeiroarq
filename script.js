// Fade in das seções ao rolar
const faders = document.querySelectorAll('.fadein');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;

    if (top < triggerBottom) {
      fader.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Modal de imagem
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeModal');
const projectImages = document.querySelectorAll('.projects img');

projectImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Mudança da navbar ao rolar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scroll-darken');
  } else {
    navbar.classList.remove('scroll-darken');
  }
});
