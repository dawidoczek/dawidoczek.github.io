var ktory = true
lista = document.querySelector("#podstrony")
tabela = document.querySelector("main")
function modyfikuj() {
    if (ktory) {
        lista.style = "visibility:hidden;"
        tabela.style = "margin-top:-5vh"
        ktory = false;
    } else {
        lista.style = "visibility:show;"
        tabela.style = "margin-top:2vh"
        ktory = true;
    }
}