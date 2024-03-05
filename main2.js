const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
//Declara que a variável "textos" corresponde a tudo 
//dentro da classe aba-conteudo


for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        //Remover "ativo" dos inativos.
        }     
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
        //Mesmo do botão, mas agora sendo pra classe dos textos.
    }
}
