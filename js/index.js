// 1 passo - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")

// 2 passo - dar um jeito de identificar o clique
btnAvancar.addEventListener("click", function () {
  // 3 passo - fazer aparecer o proximo cartao da lista
  const cartoes = document.querySelectorAll(".cartao")

  console.log(cartoes)

})
