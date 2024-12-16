import isArgsValid from "../isArgsValid.js";

/**
 * Ordena dois valores numericos em ordem crescente
 * @param {number} a Primeiro valor
 * @param {number} b Segundo valor
 * @returns {number[]} Retorna um array ordenado dos valores recebidos
 * @example
 * // Caso 1:
 * orderByAscending(2, 3);
 * // output: [2, 3]
 * 
 * // Caso 2: 
 * orderByAscending(3, 2);
 * // output: [2, 3]
 * 
 * // Caso 3:
 * orderByAscending(3, 3);
 * // output: [3, 3] 
 */
export default function orderByAscending(a, b) {
    if (!isArgsValid((x) => typeof x === "number", a, b)) {
        throw new TypeError("Parâmetros precisa ser um números");
    }

    if (a > b) {
        return [b, a];
    }

    return [a, b];
}