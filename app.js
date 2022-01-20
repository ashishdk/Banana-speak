var btntranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
btntranslate.addEventListener("click", clickEventhandler);

function clickEventhandler(){
    console.log("clicked");
    console.log(txtinput.value);    
} 