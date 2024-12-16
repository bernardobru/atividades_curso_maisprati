import isArgsValid from "../isArgsValid.js";

/**
 * Faz a média aritmética de duas notas
 * @param {number} firstNote Primeira nota
 * @param {number} secondNote Segundo nota
 * @returns {string} Retorna uma string contendo a média e uma mensagem
 * - Se a média for maior que 6, a mensagem é "Parabéns! você foi aprovado"
 * - Se a média for menor que 6, a mensagem é "Você foi reprovado! estude mais"
 * @example
 * // Caso 1:
 * arithmeticAverageWithElse(10, 5);
 * // output: Média: 7.5, Parabéns! você foi aprovado
 * 
 * // Caso 2:
 * arithmeticAverageWithElse(5, 5);
 * // output: Média: 5, Você foi reprovado! estude mais
 */
export default function arithmeticAverageWithElse(firstNote, secondNote) {    
    if (!isArgsValid((x) => typeof x === "number", firstNote, secondNote)) {
        throw new TypeError("Parâmetros precisam ser números")
    }
    
    let average = (firstNote + secondNote) / 2;
    
    return average >= 6 ? `Média: ${average}, Parabéns! você foi aprovado ` : `Média: ${average}, Você foi reprovado! estude mais`; 
}
