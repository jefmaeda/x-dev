// 1 passo - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")
let cartaoAtual = 0
// 3 passo - fazer aparecer o proximo cartao da lista
const cartoes = document.querySelectorAll(".cartao")

// 2 passo - dar um jeito de identificar o clique
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return

  // 4 passo - remover o selecionada no cartao anterior
  const cartaoSelecionado = document.querySelector(".selecionado")
  cartaoSelecionado.classList.remove("selecionado")

  cartaoAtual++
  cartoes[cartaoAtual].classList.add("selecionado")
})
