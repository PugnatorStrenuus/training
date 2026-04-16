function open_button() {
  const tid = this.getAttribute('data-target');
  const tel = document.getElementById(tid);

  if (tel) {
    tel.style.display='block';
  }
}

const buttons_show = document.querySelectorAll('.show');

button_show.forEach(button => {
  button.addEventListener('click', open_button);
  }
)
