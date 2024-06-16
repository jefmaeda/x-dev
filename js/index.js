// 1 passo - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")

// 2 passo - dar um jeito de identificar o clique
btnAvancar.addEventListener("click", function () {
  // 3 passo - fazer aparecer o proximo cartao da lista
  const cartoes = document.querySelectorAll(".cartao")
  cartoes[1].classList.add("selecionado")

})

//1. identificar (btn-voltar)
const btnVoltar = document.getElementById("btn-voltar")
//2. identificar o clique
btnVoltar.addEventListener("click",function(){
  //3. voltar para o cartao anterior
  const cartoes = document.querySelectorAll(".cartao")

  cartoes[1].classList.remove("selecionado")

})