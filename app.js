var btntranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL="https://api.funtranslations.com/translate/yoda.json"; // Yoda translation from star wars
//var serverURL="https://api.funtranslations.com/translate/minion.json"; // Minion
function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(){
    console.log("error occured" + error);
    }

function clickEventhandler(){
    var inputText= txtinput.value;
        fetch(getTranslationURL(inputText))
        .then(response=>response.json())
            .then(json=>
            {
            var TranslatedTxt= json.contents.translated;
            outputdiv.innerText=TranslatedTxt;
        }
        )
    .cache(errorHandler)
}

btntranslate.addEventListener("click", clickEventhandler);