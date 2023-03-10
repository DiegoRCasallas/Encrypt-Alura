/** 
 * Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la 
versión encriptada también devolver una palabra encriptada para su versión original.
*/

/*acceso a elementos html */
const textInput = document.getElementById('input-text');
const btnEncrypt = document.querySelector('.button-encrypt');
const btnDecrypt = document.querySelector('.button-decrypt');
const btnCopy = document.querySelector('.button-copy');
const textOutput = document.querySelector('.output__text');
/*cards */
const cardMessage = document.querySelector('.card-message');
const cardOutput = document.querySelector('.card-output');
const cardError= document.querySelector('.card-error');

/*escucha de eventos */
btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener('click', decrypt);
btnCopy.addEventListener('click', copy);

/*Fucnion para copiar contenido */
/**
 * La función copy() toma el valor del elemento textOutput y lo asigna al valor del elemento textInput.
 */
function copy() {
    let textToCopy = textOutput.value;
    textInput.value = textToCopy;
    console.log(`Texto copiado: ${textInput.value}`);
}

/*funciones para ocutar o mostrar las cards */
function cambiarIdCards() {
    /**
 * Si la entrada de texto está vacía, muestra la tarjeta de mensaje y oculta la tarjeta de salida. Si
 * la entrada de texto no está vacía, oculta la tarjeta de mensaje y muestra la tarjeta de salida.
 */
    if (textInput.value == '') {
        cardMessage.setAttribute('id', 'visible');
        cardOutput.setAttribute('id', 'oculto');
    }
    if (textInput.value != '') {
        cardMessage.setAttribute('id', 'oculto');
        cardOutput.setAttribute('id', 'visible');
    } 
    ocultarError();

}
function mostrarError(){
    cardError.setAttribute('id','visible');
    cardMessage.setAttribute("id","oculto");
    cardOutput.setAttribute('id','oculto');
}
function ocultarError(){
    cardError.setAttribute('id','oculto');
}

/*Fucncion para comprobar uso de mayusculas y acentos*/
function hasNoUppercase(str) {
    var pattern = /^[^A-Z]+$/;
    return pattern.test(str);
}
function hasNoAccents(str) {
    var pattern = /^[\u0020-\u007E]+$/;
    return pattern.test(str);
}

/*Funcion para encriptar */
/**
 * Para cada letra en la cadena de entrada, si es una vocal, reemplácela con la palabra correspondiente
 * en la matriz wordsToEncript; de lo contrario, simplemente agregue la letra a la cadena de salida.
 * @returns la palabra cifrada.
 */
function encrypt() {
    let palabra = textInput.value;
    if (hasNoUppercase(palabra) && hasNoAccents(palabra)) {
        const vocals = ['a', 'e', 'i', 'o', 'u'];
        const wordsToEncript = ["ai", "enter", "imes", "ober", "ufat"];
        let encryptWord = "";
        /*recorrer string */
        for (let i = 0; i < palabra.length; i++) {
            let isAdded = false;
            /*condiciones y recorrido de arrs*/
            for (var j = 0; j < vocals.length; j++) {
                if (vocals[j] == palabra[i]) {
                    encryptWord += wordsToEncript[j];
                    isAdded = true;
                }
            }
            /*concatena solo si en la ciclo del segundo for no agrega nada */
            if (!isAdded) {
                encryptWord += palabra[i];
            }
        }
        console.log(encryptWord);
        textOutput.value = encryptWord;
        textOutput.innerText = encryptWord;
        cambiarIdCards();
        ocultarError();
    }else{
        if(palabra=="") cambiarIdCards;
        else mostrarError();   
    }
}

/*Funcion para des-ecriptar */
/**
 * Toma el valor de la entrada de texto, reemplaza las cadenas 'ai', 'enter', 'imes', 'ober' y 'ufat'
 * con las letras 'a', 'e', 'i', 'o' y 'u' respectivamente, y luego devuelve el resultado.
 * @returns La palabra descifrada.
 */
function decrypt() {
    let palabra = textInput.value;
    let decryptWord = palabra.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    console.log(decryptWord);
    textOutput.value = decryptWord;
    textOutput.innerText = decryptWord;
    cambiarIdCards();
    ocultarError();

}
/*Funcion para agregar el elemento html--cardoutput */
