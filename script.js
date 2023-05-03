function encriptar() {
    var parrafo = document.querySelector(".areadetexto").value.toLowerCase();

    var areadetexto = parrafo.replace(/e/img, "enter");
    var areadetexto = areadetexto.replace(/o/img, "ober");
    var areadetexto = areadetexto.replace(/i/img, "imes");
    var areadetexto = areadetexto.replace(/a/img, "ai");
    var areadetexto = areadetexto.replace(/u/img, "ufat");

    document.querySelector(".textoDesencriptado").value = areadetexto
    document.querySelector(".botonCopiar").style.display = "show";
    document.querySelector(".botonCopiar").style.display = "inherit";
    document.querySelector(".areadetexto").value = ""
    document.querySelector(".textoDesencriptado").style.backgroundImage = "none"

}

function desencriptar() {
    var parrafo = document.querySelector(".areadetexto").value.toLowerCase();

    var areadetexto = parrafo.replace(/enter/img, "e");
    var areadetexto = areadetexto.replace(/ober/img, "o");
    var areadetexto = areadetexto.replace(/imes/img, "i");
    var areadetexto = areadetexto.replace(/ai/img, "a");
    var areadetexto = areadetexto.replace(/ufat/img, "u");

    document.querySelector(".textoDesencriptado").value = areadetexto;
    document.querySelector(".textoDesencriptado").style.backgroundImage = "none"
}

function copiar(){
    let textoDesencriptado = document.querySelector(".textoDesencriptado");
    let text= textoDesencriptado.value;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');})
    document.querySelector(".areadetexto").focus();
    document.querySelector(".areadetexto").value = "";
}

function pegar(){
    navigator.clipboard.readText().then(textoapegar => {document.querySelector('.areadetexto').value = textoapegar;})
}