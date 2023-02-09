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

/*escucha de eventos */
btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener('click', decrypt);
btnCopy.addEventListener('click', copy);

/*Fucnion para copiar contenido */
function copy() {
 let textToCopy=textOutput.value;
 textInput.value=textToCopy;
 console.log(`Texto copiado: ${textInput.value}`);

}
/*Fucncion para comprobar que sea minuscula y no tenga acentos */
/*Funcion para encriptar */
function encrypt() {
    let palabra = textInput.value;
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
    return encryptWord
}

/* replace()para reemplazar*/
/*Funcion para des-ecriptar */
function decrypt() {
    let palabra = textInput.value;
    let decryptWord = palabra.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    console.log(decryptWord);
    return decryptWord;
}
