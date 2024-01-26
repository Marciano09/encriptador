const textoIngresado = document.querySelector("#txtEncriptar");
const textoResultado = document.querySelector("#txtDesencriptar");

const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const btnCopiar = document.querySelector("#btnCopiar");

// Encriptar = Función que permite encriptar una frase introducida por el usuario según los parametros dados a cada vocal.
function encriptar() {
    
    let texto = textoIngresado.value.toLowerCase();

    let textoEncriptado = texto
        .replaceAll("e", "enter")
        .replaceAll("o", "ober")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");

    // Oculta la ilustración y el mensaje del resultado
    document.getElementById("ilustracion").style.display = "none";
    document.getElementById("texto").style.display = "none";
    // Permite imprimir en el textarea
    textoResultado.value = textoEncriptado;
    //Permite mostrar el botón copiar
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";

    document.getElementById("txtEncriptar").value = '';
}

// Desencriptar = Función que permite desencriptar una frase introducida por el usuario o generada por el sistema según los parametros dados.
function desencriptar() {
    
    let textoEncriptado = textoIngresado.value.toLowerCase();

    // i = Toma en cuenta letras mayúsculas y minúsculas
    // g = Toma en cuenta toda la línea u oración
    // m = Toma en cuenta múltiples líneas o parrafos
    var texto = textoEncriptado.replace(/enter/igm, "e");
    var texto = texto.replace(/ober/igm, "o");
    var texto = texto.replace(/imes/igm, "i");
    var texto = texto.replace(/ai/igm, "a");
    var texto = texto.replace(/ufat/igm, "u");

    // Oculta la ilustración y el mensaje del resultado
    document.getElementById("ilustracion").style.display = "none";
    document.getElementById("texto").style.display = "none";
    // Permite imprimir en el textarea
    textoResultado.value = texto;
    //Permite mostrar el botón copiar
    document.getElementById("btnCopiar").style.display = "show";
    // document.getElementById("btnCopiar").style.display = "inherit";

    document.getElementById("txtEncriptar").value = '';
}

function copiar() {

    let textoEncriptado = textoResultado.value;

    navigator.clipboard.writeText(textoEncriptado);
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;