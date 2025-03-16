//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigoSecreto = [];


    function exibirLista(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let adicionar = document.querySelector('input').value;
    if (adicionar == '') {
            alert('Digite um nome!');

     } else {
            listaAmigoSecreto.push(adicionar);
            exibirLista('ul', listaAmigoSecreto);
            limparCampo();
     }        
}
function limparCampo(){
    adicionar = document.querySelector('input');
    adicionar.value = '';
    }
        
function sortearAmigo() {
    let amigoSorteado = listaAmigoSecreto[Math.floor(Math.random() * listaAmigoSecreto.length)];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}        
