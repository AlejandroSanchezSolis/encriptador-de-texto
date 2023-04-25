function encriptar() {
    var parrafo = document.getElementById("textoAencriptar").value.toLowerCase();

    var textoAencriptar = parrafo.replace(/e/img, "enter");
    var textoAencriptar = textoAencriptar.replace(/o/img, "ober");
    var textoAencriptar = textoAencriptar.replace(/i/img, "imes");
    var textoAencriptar = textoAencriptar.replace(/a/img, "ai");
    var textoAencriptar = textoAencriptar.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoAencriptar
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";


}

function desencriptar() {
    var parrafo = document.getElementById("textoAencriptar").value.toLowerCase();

    var textoAencriptar = parrafo.replace(/enter/img, "e");
    var textoAencriptar = textoAencriptar.replace(/ober/img, "o");
    var textoAencriptar = textoAencriptar.replace(/imes/img, "i");
    var textoAencriptar = textoAencriptar.replace(/ai/img, "a");
    var textoAencriptar = textoAencriptar.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoAencriptar;
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("Copy")
    document.getElementById('textoAencriptar').value = '';
    document.getElementById('textoAencriptar')
    textoAencriptar.focus()
}