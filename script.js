const tabuleiro = document.getElementById('tabuleiro');

let tab = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "♟", "", ""], 
  ["♜", "", "", "", "", "", "", ""]  
];

let selecionado = null;

function desenharTabuleiro() {
  tabuleiro.innerHTML = "";
  for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
      const casa = document.createElement("div");
      casa.classList.add("casa");


      if ((linha + coluna) % 2 === 0) {
        casa.classList.add("clara");
      } else {
        casa.classList.add("escura");
      }

      casa.textContent = tab[linha][coluna];
      casa.dataset.linha = linha;
      casa.dataset.coluna = coluna;

      casa.addEventListener("click", clicarCasa);

      tabuleiro.appendChild(casa);
    }
  }
}

function clicarCasa(e) {
  const linha = parseInt(e.target.dataset.linha);
  const coluna = parseInt(e.target.dataset.coluna);

  const peca = tab[linha][coluna];

  if (selecionado) {
    const [origemLinha, origemColuna] = selecionado;


    const pecaSelecionada = tab[origemLinha][origemColuna];

    if (pecaSelecionada === "♟") {
      if (linha === origemLinha - 1 && coluna === origemColuna) {
        tab[linha][coluna] = "♟";
        tab[origemLinha][origemColuna] = "";
      }
    }

    if (pecaSelecionada === "♜") {
      if (linha === origemLinha || coluna === origemColuna) {
        tab[linha][coluna] = "♜";
        tab[origemLinha][origemColuna] = "";
      }
    }

    selecionado = null;
    desenharTabuleiro();
  } else {
    if (peca !== "") {
      selecionado = [linha, coluna];
    }
  }
}

desenharTabuleiro();
