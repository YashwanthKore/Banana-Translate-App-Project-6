var inputMessage = document.querySelector("#input-msg")

var ouputMessageDiv = document.querySelector("#output-msg")

var serverURL = "https://api.funtranslations.com/translate/minion.json?text="

function translationURL(text) {
    return serverURL +text
}

function translateMessage() {
    textMsg = inputMessage.value
    fetch(translationURL(textMsg))
    .then(response => response.json())
    .then(json => {
        console.log(json)
    var TranslatedText = json.contents.translated;
    ouputMessageDiv.innerHTML = TranslatedText
    })
    .catch( error=>  {
        alert("Some error occured")
    })



}

var btnTranslate = document.querySelector("#btn-translate")



btnTranslate.addEventListener("click", translateMessage);