/*Escucha de eventos  */


/** 
 * Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la 
versión encriptada también devolver una palabra encriptada para su versión original.
*/

/*Fucnion para copiar contenido */
/*Fucncion para comprobar que sea minuscula y no tenga acentos */


/*Funcion para encriptar */
function encrypt(palabra) {
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
    return encryptWord
}

/* replace()para reemplazar*/
/*Funcion para des-ecriptar */
function decrypt(palabra) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
    let decryptWord = palabra.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    /*recorrer string */
    /*no concatenar si empieza por vocales
     y segun keyWords[j].lenght-1*/
    /*concatena solo si en la ciclo del segundo for no agrega nada */
    return decryptWord;
}
