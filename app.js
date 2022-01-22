var btntranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");


function clickEventhandler(){
    outputdiv.innerText="asdhbadb"+ txtinput.value ;   
}

btntranslate.addEventListener("click", clickEventhandler);