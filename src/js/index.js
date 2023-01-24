/* 
    estudo dos passos para o JS funcionar

    obj 1 - abrir a modal com o video do trailer com o clique do botão "Veja o Trailer"
        - passo 1 - pegar o botão "Veja o Trailer"
        - passo 2 - adicionar um evento de clique no botão "Veja o Trailer"
        - passo 3 - pegar o modal
        - passo 4 - abrir a modal na tela

    obj 2 - fechar a modal com o clique do botão "X"
        - passo 1 - pegar o botão "X"
        - passo 2 - adicionar um evento de clique no botão "X"
        - passo 3 - fechar o modal
*/

//variaveis
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFechar = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

//funções
function alterarModal() {
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
  alterarModal();
  video.setAttribute("src", linkDoVideo);
});

botaoFechar.addEventListener("click", () => {
  alterarModal();
  video.setAttribute("src", "");
});
