function ValidarFormulario() {
    var nom = document.getElementById("nome"),
        idade = document.getElementById("idade"),
        email = document.getElementById("email");
    if (nome.value == "" || idade.value == "" || email.value == "") {
        alert("Preencher todos os campos");
    }
    else {
        confirm("Deseja Prosseguir?");
    }
}

function SelecionaTodos() {
    var selecionaTodos = document.getElementById("TodasPessoas");
    var pessoas = document.getElementsByName("Pessoa");
    for (var i = 0; i < pessoas.length; i++) {
        pessoas[i].checked = selecionaTodos.checked;
    }
}

function Deletar() {
    var pessoas = document.getElementsByName("Pessoa");
    var algumselecionado = false;
    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].checked) {
            algumselecionado = true;
            break;
        }
    }
        
    if (!algumselecionado) {
        alert("Selecione ao menos uma pessoa!");
    }
    else if(confirm("Deseja deletar a(s) pessoa(s) selecionada (s)?")) {
        alert("Pessoas deletadas com sucesso!");
    }
}