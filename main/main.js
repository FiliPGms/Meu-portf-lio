const botaoMenu = document.querySelector('.botao__mobile');
const menuMobile = document.querySelector('.invisivel');
let menuEstaAberto = false;

botaoMenu.addEventListener('click', function(){
    menuEstaAberto ? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel');

    botaoMenu.children[0].setAttribute('src', '../assets/fecharMenu.png');
    menuEstaAberto ? botaoMenu.children[0].setAttribute('src', '../assets/abrirMenu.png'): botaoMenu.children[0].setAttribute('src', '../assets/fecharMenu.png');

    menuEstaAberto = !menuEstaAberto;
})