import argsIsValid from "../isArgsValid.js";

/**
 * Recebe quatro números inteiros e aplica uma série de operações matemáticas a eles:
 * - O primeiro número é somado a 25
 * - O segundo número é multiplicado por 3
 * - O terceiro número é reduzido a 12% do seu valor original
 * - O quarto número é substituído pela soma dos quatro valores originais
 * 
 * Retorna um objeto contendo os valores originais e os valores modificados
 * 
 * @param {number} first  Primeiro número
 * @param {number} second  Segundo número
 * @param {number} third  Terceiro número
 * @param {number} forth  Quarto número
 * @returns {object} Retorna um objeto com os valores modificados
 * @throws {TypeError} Se os argumentos não forem números
 * 
 * @example
 * mathOperationsOnFourIntegers(1, 2, 3, 4); 
 * // output: [26, 6, 0.36, 10]
 */

export default function mathOperationsOnFourIntegers(first, second, third, forth) {
    if (!argsIsValid((x) => typeof x === "number", first, second, third, forth)) {
        throw new TypeError("Parâmetros precisam ser números.")
    }
    return {
        resultFirstOperation: first + 25, 
        resultSecondOperation: second * 3, 
        resultThirdOperation: third * (12/100), 
        resultForthOperation: first + second + third
    };
}