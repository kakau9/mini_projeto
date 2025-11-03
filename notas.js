
function Adicionar(){
var texto= document.getElementById("nota").value
var novo=document.createElement("p")
novo.innerText= texto
novo.id="paragrafo"
var container=document.getElementById("container")
container.appendChild(novo)
}

function Remover(){
    var paragrafo= document.getElementById("paragrafo")
    if(paragrafo){
    paragrafo.remove();
}
    else{
    alert("Não há texto para remover!")
}
}
function RemoverTudo(){
    var paragrafo=document.getElementById("paragrafo")
    if(paragrafo){
        container.remove()
    }
}