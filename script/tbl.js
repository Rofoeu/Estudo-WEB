function adicionaLinha(idTabela) {

    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   

    celula1.innerHTML = "<td><input type=text placeholder=OQUE COMPREI></td>"
    celula2.innerHTML =  "<td><input type=text placeholder=VALOR></td>"
    
    if(tabela.rows.length  > 7){
        var numlinha = tabela.rows.length -1;
        var x = 1;
        for(;numlinha >= x; numlinha--)
         
        document.getElementById('tbl').deleteRow(numlinha);
    }
}
function removeLinha(tabela) {
if(tbl.rows.length  > 1){
    var i=tabela.parentNode.parentNode.rowIndex;
  document.getElementById('tbl').deleteRow(i);
}}