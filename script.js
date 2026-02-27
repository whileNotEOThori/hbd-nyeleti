const toggleButtons = document.querySelectorAll('.btn-toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isBought = button.classList.toggle('is-bought');
    button.textContent = isBought ? 'bought' : 'click if bought';
    button.setAttribute('aria-pressed', String(isBought));
  });
});
