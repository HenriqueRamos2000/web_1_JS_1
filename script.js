// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changeTudoBtn = document.getElementById("btn-mudar-tudo")

const array = ["Hello", "World", "!!!"]

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeTudoBtn.addEventListener("click", function() {
  x = document.getElementsByClassName("mensagem2");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText=array[i];    // Change the content
    }
});