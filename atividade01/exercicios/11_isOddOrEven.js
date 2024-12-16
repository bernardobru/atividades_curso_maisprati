import readline from "readline-sync";
/**
 * Verifica se um número é impar
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna `true` se for ímpar 
 * @example 
 * // Caso 1:
 * isOdd(3)
 * // output: true
 * 
 * // Caso 2:
 * isOdd(2):
 * // output: false
*/
function isOdd(a) {
    return a % 2 !== 0;
}

/**
 * Verifica se um número é par
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna `true` se for par
 * * @example 
 * // Caso 1:
 * isOdd(3)
 * // output: false
 * 
 * // Caso 2:
 * isOdd(2):
 * // output: true
 */
function isEven(a) {
    return a % 2 === 0;
}

/**
 * 
 * Recebe um valor do usuário e verifica se é par ou impar, até que o usuário digite 0
 * @example
 * isOddOrEven();
 * // Valor: 3
 * // Ímpar
 * // Valor: 2
 * // Par
 * // Valor: 0
 * // Parando a execução do programa
 */
export default function isOddOrEven() {
    let number;
    do {
        number = parseInt(readline.question("Valor: "));
        
        if (isOdd(number)) {
            console.log("Ímpar");
        }
        
        if (isEven(number)) {
            console.log("Par");
        }
    } while(number > 0 && number !== null && number !== undefined);

    console.log("Parando execução do programa");
}