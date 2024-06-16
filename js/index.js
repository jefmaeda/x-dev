const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0


btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return

  esconderCartoesSelecionado()

  cartaoAtual++
  mostrarCartao()
})

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