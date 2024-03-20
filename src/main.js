// Salvando o botão de voltar ao topo
let mybutton = document.getElementById("myBtn");
// Atribuindo a função ao evento de scroll na tela
window.onscroll = function() {scrollFunction()};
// Quando houver o scroll essa função será chamada
function scrollFunction() {
  // Se o scroll for maior que 100px o elemento vai receber o display-none e a classe-animation
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    mybutton.classList.add("animation");
  } else {
    mybutton.style.display = "none";
  }
}
// O elemento tem o atributo onclick que chama esta função. Ao clicar, a tela é scrollada até a posição 0
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

