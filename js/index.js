// 1 passo - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
// 3 passo - fazer aparecer o proximo cartao da lista
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0


// 2 passo - dar um jeito de identificar o clique
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return

  // 4 passo - remover o selecionada no cartao anterior
  esconderCartoesSelecionado()

  cartaoAtual++
  mostrarCartao()
})

// vontar
btnVoltar.addEventListener("click", function () {
  console.log("voltar clk")
  if (cartaoAtual === 0) return

  esconderCartoesSelecionado()

  cartaoAtual--
  mostrarCartao()
})

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado")
}

function esconderCartoesSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado")
  cartaoSelecionado.classList.remove("selecionado")
}