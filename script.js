// Script para el botón de Modo Dark
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = toggleButton.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

