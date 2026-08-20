let carrinhoCount = 0;

function selecionarTamanho(elemento) {
  const botoes = document.querySelectorAll('.btn-tamanho');
  botoes.forEach(btn => btn.classList.remove('ativo'));
  elemento.classList.add('ativo');
}

function adicionarAoCarrinho() {
  carrinhoCount++;
  document.getElementById('cart-count').innerText = carrinhoCount;
}

function comprar() {
  const tamanhoAtivo = document.querySelector('.btn-tamanho.ativo').innerText;
  alert(`Redirecionando para o checkout!\nProduto: ThermoFit Shirt\nTamanho: ${tamanhoAtivo}\nValor: R$ 129,00`);
}
