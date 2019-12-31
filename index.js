const videoBg = document.querySelectorAll('video');
const email = document.querySelector('[data-js="email"]');
const senha = document.querySelector('[data-js="senha"]');
const btn = document.querySelector('[data-js="btn"]');

console.log(videoBg, email, senha, btn);

function perArray() {
  videoBg.forEach(item => {
    item.classList.remove('ativo');
  });
}

function animation() {
  if(email.value !== '123@gmail.com'){
    perArray()
    videoBg[0].classList.add('ativo');
    videoBg[0].play();
    return '';
  }

  if(senha.value !== '123456'){
    perArray()
    videoBg[1].classList.add('ativo');
    videoBg[1].play();
    return '';
  }
}
btn.addEventListener('click', animation);