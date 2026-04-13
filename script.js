function showp() {
  const tid = this.getAttribute('data-target');
  const tel = document.getElementById(tid);

  if (tel) {
    tel.style.display='block';
  } 
}

const buttons_show = document.querySelectorAll('.show');

buttons_show.forEach(button => {
 button.addEventListener('click', showp);
})
