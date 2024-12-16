import isArgsValid from "../isArgsValid.js";

/**
 * Faz a média aritmética de duas notas
 * @param {number} firstNote Primeiro nota
 * @param {number} secondNote Segundo nota
 * @returns {string|null} Retorna uma string contendo a média e uma mensagem de aprovado
 * - Se a média for maior que 6, a mensagem é "Parabéns! você foi aprovado"
 * - Se a média for menor que 6, a função retorna nulo 
 * @example
 * // Caso 1:
 * arithmeticAverageWithoutElse(10, 5);
 * // output: Média: 7.5, Parabéns! você foi aprovado
 * 
 * // Caso 2:
 * arithmeticAverageWithoutElse(5, 5);
 * // output: null
 */
export default function arithmeticAverageWithoutElse(firstNote, secondNote) {    
    if (!isArgsValid((x) => typeof x === "number", firstNote, secondNote)) {
        throw new TypeError("Parâmetros precisam ser números")
    }
    
    let average = (firstNote + secondNote) / 2;
    
    return average >= 6 ? `Média: ${average}, Parabéns! você foi aprovado ` : null; 
}