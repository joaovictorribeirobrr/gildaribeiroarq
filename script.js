// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mostrar botão "voltar ao topo"
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Topo";
backToTopButton.id = "backToTop";
document.body.appendChild(backToTopButton);

backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "30px";
backToTopButton.style.right = "30px";
backToTopButton.style.display = "none";
backToTopButton.style.padding = "10px";
backToTopButton.style.backgroundColor = "#333";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.borderRadius = "5px";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
