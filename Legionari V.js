function verificarAcesso() {
    var numeroCartaoInput = document.getElementById("numeroCartao");
    var mensagemAcesso = document.getElementById("mensagemAcesso");

    var numeroCartao = parseInt(numeroCartaoInput.value);

    if (!isNaN(numeroCartao)) {
        if (numeroCartao >= 1000 && numeroCartao <= 1999) {
            mensagemAcesso.textContent = "Acesso total concedido a todas as áreas restritas.";
            document.querySelector("body").style.backgroundColor  = "var(--verde)"
        } else if (numeroCartao >= 2000 && numeroCartao <= 2999) {
            mensagemAcesso.textContent = "Acesso limitado a algumas áreas restritas.";
            document.querySelector("body").style.backgroundColor  = "var(--amarelo)"
        } else if (numeroCartao > 3000) {
            mensagemAcesso.textContent = "Acesso negado. Funcionário não tem permissão para acessar áreas restritas.";
            document.querySelector("body").style.backgroundColor  = "var(--vermelho)"
        } else {
            mensagemAcesso.textContent = "Número de cartão inválido.";
            document.querySelector("body").style.backgroundColor  = "var(--cinza)"
        }
    } else {
        mensagemAcesso.textContent = "Por favor, insira um número de cartão válido.";
    }
}



//switch (acesso) {
    //case "Acesso liberado":
       // confirm.backgroundColor = 'green';
        //break;
       // case "Acesso restrito":
           // confirm.backgroundColor = 'yellow';
           // break;
           // case "Acesso negado":
            //confirm.backgroundColor = 'red';
            //break;
           // default:
           // confirm.backgroundColor = 'white';
           // break;}