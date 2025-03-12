function verificarNumero() {
    var num = document.getElementById("num").value;
    var mensagem = "";

    if (num >= 0) {
        mensagem = "O número é positivo";
    } else {
        mensagem = "O número é negativo";
    }
    document.getElementById("resultado").innerHTML = mensagem;
    var palavraContada = mensagem.includes("positivo") ? "positivo" : "negativo";
    var quantidadeLetras = palavraContada.length;
    console.log("Quantidade de letras de '" + palavraContada + "': " + quantidadeLetras);
}
