const btn = document.querySelector('.button_change');

btn.addEventListener('click', () => {
  btn.classList.toggle('icon_change');
  btn.classList.toggle('icon_change_2');
});
